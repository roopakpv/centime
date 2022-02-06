import { IntlProvider } from "react-intl";
import React from "react";
const messages = {}; // en.json
const defaultLocale = "en";

const locale = defaultLocale;

export const intl = (component) => {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {React.cloneElement(component)}
    </IntlProvider>
  );
};
