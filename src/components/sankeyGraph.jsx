import React from "react";
import { Chart } from "react-google-charts";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export const options = {};

function SankeyGraph({ income, expense, unflatteredExpense }) {
  const [data, setData] = useState([]);
  const createGraphDataforNested = (dataSet, unflatteredObject, i = 0, previousKey = undefined) => {
    Object.keys(unflatteredObject).forEach((key) => {
      if (typeof unflatteredObject[key] !== "object") {
        if (i === 0) {
          dataSet.push(["totalIncome", key, unflatteredObject[key]]);
        } else {
          dataSet.push([previousKey, key, unflatteredObject[key]]);
        }
      } else {
        i += 1;
        const valuesArray = Object.values(unflatteredObject[key]);
        let totalAmount = 0;
        valuesArray.map((amount) => {
          totalAmount += amount * 1;
        });
        dataSet.push(["totalIncome", key, totalAmount]);
        createGraphDataforNested(dataSet, unflatteredObject[key], i, key);
        i = 0;
      }
    });
  };
  useEffect(() => {
    const data = [["From", "To", "Amount"]];

    Object.keys(income).map((obj) => {
      data.push([obj, "totalIncome", income[obj] * 1]);
    });

    createGraphDataforNested(data, unflatteredExpense);
    setData(data);
  }, [income, expense, unflatteredExpense]);
  return <Chart chartType="Sankey" width="100%" height="500px" data={data} options={options} />;
}

const mapStateToProps = (state) => {
  return {
    income: state.income,
    expense: state.expense,
    unflatteredExpense: state.unFlatteredExpense,
  };
};

export default connect(mapStateToProps, null)(SankeyGraph);
