export const expenseReducer = (state = {}, action) => {
  switch (action.type) {
    case "expense":
      return action.payload;

    default:
      return state;
  }
};

export const unFlatteredExpenseReducer = (state = {}, action) => {
  switch (action.type) {
    case "UnFlatteredExpense":
      return action.payload;

    default:
      return state;
  }
};

export const incomeReducer = (state = {}, action) => {
  switch (action.type) {
    case "income":
      return action.payload;

    default:
      return state;
  }
};

export const localeReducer = (state = "en", action) => {
  switch (action.type) {
    case "locale":
      return action.payload;

    default:
      return state;
  }
};
