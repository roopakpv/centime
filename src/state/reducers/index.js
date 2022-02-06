import { combineReducers } from "redux";
import { expenseReducer, incomeReducer, localeReducer, unFlatteredExpenseReducer } from "./accountReducer";

const reducers = combineReducers({
  income: incomeReducer,
  expense: expenseReducer,
  locale: localeReducer,
  unFlatteredExpense: unFlatteredExpenseReducer,
});

export default reducers;
