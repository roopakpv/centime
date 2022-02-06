export const dispatchIncome = (amount) => {
  return {
    type: "income",
    payload: amount,
  };
};

export const dispatchExpense = (amount) => {
  return {
    type: "expense",
    payload: amount,
  };
};

export const dispatchUnFlatteredExpense = (amount) => {
  return {
    type: "UnFlatteredExpense",
    payload: amount,
  };
};

export const dispatchLocale = (locale) => {
  return {
    type: "locale",
    payload: locale,
  };
};
