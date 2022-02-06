export function getInitialData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        income: {
          salary: 5000,
        },
        expense: {
          other: 200,
          bills: {
            electricbill: 2000,
            mobilebill: 1000,
          },
        },
      });
    }, 2000);
  });
}
