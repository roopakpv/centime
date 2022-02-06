import { render } from "@testing-library/react";
import { Header } from "./Header";
import { intl } from "./setupTestsHelper";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

configure({ adapter: new Adapter() });
test("should render header component", () => {
  const dispatchLocale = () => {};

  const header = mount(intl(<Header dispatchLocale={dispatchLocale} />));
  expect(header).toMatchInlineSnapshot(`ReactWrapper {}`);
});
