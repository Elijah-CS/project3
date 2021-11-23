function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

export function startSearching(queryText) {
  return dispatch => {

    fetch(`https://project2.rickoes.me:8443/${queryText}`)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        dispatch(loadExpenses(data.results));
      });
  };
}

export function getNet() {
  return dispatch => {

    fetch(`https://project2.rickoes.me:8443/net`)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        dispatch(loadNet(data.results));
      });
  };
}

export function newExpense(amount, date, description) {

  const temp = date.date.split(/[-]/);

  const expense = {
    amount: parseFloat(amount.amount),
    year: parseInt(temp[0]),
    month: parseInt(temp[1]),
    day: parseInt(temp[2]),
    description: description.description,
  };

  console.log(expense);

  return dispatch => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    };

    fetch(`https://project2.rickoes.me:8443/expenses`, options)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(addExpense({
            ...expense,
            id: data.results,
          }));
        }
      });
  };
}

export const Action = Object.freeze({
  LoadExpenses: 'LoadExpenses',
  LoadNet: 'LoadNet',
  AddExpense: 'AddExpense',
});

export function loadExpenses(expenses) {
  return { type: Action.LoadExpenses, payload: expenses };
}

export function loadNet(net) {
  return { type: Action.LoadNet, payload: net };
}

export function addExpense(expense) {
  return { type: Action.AddExpense, payload: expense };
}
