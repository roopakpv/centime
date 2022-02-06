import "./App.css";
import Header from "./components/header";
import SankeyGraph from "./components/sankeyGraph";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { getInitialData } from "./mock/initialData";
import ExpenseTable from "./components/expenseTable";
import { dispatchExpense, dispatchIncome, dispatchUnFlatteredExpense } from "./state/actions";
import { iterate } from "./utils";
import { IntlProvider } from "react-intl";

const messages = {
  en: {
    GREETING: "welcome to Centime. Please choose your preffered language from the dropdown",
    addIncome: "Add Income",
    addExpense: "Add Expense",
  },
  fr: {
    GREETING: "bienvenue à Centime. Veuillez choisir votre langue préférée dans la liste déroulante",
    addIncome: "bienvenue incomeya",
    addExpense: "bienvenue EExpenseya",
  },
};

function App({ updateExpense, updateIncome, locale, updateUnFlatteredExpense }) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    getInitialData().then((res) => {
      updateIncome(res.income);
      updateExpense(iterate(res.expense));
      updateUnFlatteredExpense(res.expense);
      setLoading(false);
    });
  }, []);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        {isLoading ? (
          <div className="loader" />
        ) : (
          <div>
            <Header />
            <div>
              <div className="width30">
                <ExpenseTable />
              </div>
              <div className="width70">
                <SankeyGraph />
              </div>
            </div>
          </div>
        )}
      </div>
    </IntlProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    locale: state.locale,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateIncome: (amount) => dispatch(dispatchIncome(amount)),
    updateExpense: (amount) => dispatch(dispatchExpense(amount)),
    updateUnFlatteredExpense: (amount) => dispatch(dispatchUnFlatteredExpense(amount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
