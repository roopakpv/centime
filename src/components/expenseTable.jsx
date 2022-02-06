import { connect } from "react-redux";
import "./expenseTable.css";
import { useState, Fragment } from "react";
import { dispatchExpense, dispatchIncome, dispatchUnFlatteredExpense } from "../state/actions";
import { FormattedMessage } from "react-intl";

export const ExpenseTable = ({ income, expense, dispatchIncome, dispatchExpense, dispatchUnFlatteredExpense, unflatteredExpense }) => {
  const [showIncomePopup, setshowIncomePopup] = useState(false);
  const [incomeDesc, setincomeDesc] = useState("");
  const [incomeAmt, setincomeAmt] = useState("");
  const [showExpensePopup, setshowExpensePopup] = useState(false);
  const [ExpenseDesc, setExpenseDesc] = useState("");
  const [ExpenseAmt, setExpenseAmt] = useState("");
  const addIncomeHandler = () => {
    setshowIncomePopup(true);
  };

  const addIncome = () => {
    setshowIncomePopup(false);
    income[`${incomeDesc}`] = incomeAmt;
    const updatedIncome = { ...income };
    // seting back to default value
    setincomeDesc("");
    setincomeAmt("");
    dispatchIncome(updatedIncome);
  };
  const addExpenseHandler = () => {
    setshowExpensePopup(true);
  };
  const addExpense = () => {
    setshowExpensePopup(false);
    const updatedExpense = [...expense];
    updatedExpense.push({ [`${ExpenseDesc}`]: ExpenseAmt * 1 });

    unflatteredExpense[`${ExpenseDesc}`] = ExpenseAmt * 1;
    const updatedExpenseUnflattered = { ...unflatteredExpense };

    // seting back to default value
    setExpenseDesc("");
    setExpenseAmt("");
    dispatchExpense(updatedExpense);
    dispatchUnFlatteredExpense(updatedExpenseUnflattered);
  };
  return (
    <div>
      {showExpensePopup ? (
        <div className="modal">
          <div className="modalContent">
            <span
              className="close"
              onClick={() => {
                setshowExpensePopup(false);
              }}
            >
              ×
            </span>
            <p>Add your Expense</p>
            <div>
              <span className="disBlock">Expense Type</span>
              <input
                value={ExpenseDesc}
                onChange={(e) => {
                  setExpenseDesc(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <span className="disBlock">Amount</span>
              <input
                type="number"
                value={ExpenseAmt}
                onChange={(e) => {
                  setExpenseAmt(e.target.value);
                }}
              ></input>
            </div>
            <button
              onClick={() => {
                addExpense();
              }}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        <Fragment />
      )}
      {showIncomePopup ? (
        <div className="modal">
          <div className="modalContent">
            <span
              className="close"
              onClick={() => {
                setshowIncomePopup(false);
              }}
            >
              ×
            </span>
            <p>Add your income</p>
            <div>
              <span className="disBlock">Income Type</span>
              <input
                value={incomeDesc}
                onChange={(e) => {
                  setincomeDesc(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <span className="disBlock">Amount</span>
              <input
                type="number"
                value={incomeAmt}
                onChange={(e) => {
                  setincomeAmt(e.target.value);
                }}
              ></input>
            </div>
            <button
              onClick={() => {
                addIncome();
              }}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        <Fragment />
      )}
      {Object.keys(income).map((item) => (
        <div className="income" key={item}>
          <span className="incomedesription">{item}</span>
          <span className="incomeamount">{income[item]}</span>
        </div>
      ))}
      {expense.map((item) => (
        <div className="expense" key={Object.keys(item)[0]}>
          <span className="expensedesription">{Object.keys(item)[0]}</span>
          <span className="expenseamount">{Object.values(item)[0]}</span>
        </div>
      ))}
      <div>
        <span className="width50">
          <button
            className="btn"
            onClick={() => {
              addIncomeHandler();
            }}
          >
            <FormattedMessage id="addIncome" />
          </button>
        </span>
        <span className="width50">
          <button
            className="btn"
            onClick={() => {
              addExpenseHandler();
            }}
          >
            <FormattedMessage id="addExpense" />
          </button>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    income: state.income,
    expense: state.expense,
    unflatteredExpense: state.unFlatteredExpense,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchIncome: (amount) => dispatch(dispatchIncome(amount)),
    dispatchExpense: (amount) => dispatch(dispatchExpense(amount)),
    dispatchUnFlatteredExpense: (amount) => dispatch(dispatchUnFlatteredExpense(amount)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
