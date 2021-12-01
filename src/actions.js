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

export function clear() {
  return dispatch => {

    dispatch(clearState());
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

          dispatch(changeMessage("Successful"));

        } else {

          dispatch(changeMessage("Invalid"));
        }
      });
  };
}

export function getID(id) {
  return dispatch => {

    fetch(`https://project2.rickoes.me:8443/id/${id}`)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        dispatch(loadID(data.results));
      });
  };
}

export function updateExpense(id, amount, date, description, created) {

  const temp = date.date.split(/[-]/);

  var today = new Date();
  today.setDate(today.getDate() - 1);

  const expense = {
    amount: parseFloat(amount.amount),
    year: parseInt(temp[0]),
    month: parseInt(temp[1]),
    day: parseInt(temp[2]),
    description: description.description,
    created_at: created,
    updated_at: today.toISOString().slice(0, 19),
  };

  return dispatch => {

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    };

    fetch(`https://project2.rickoes.me:8443/expenses/${id}`, options)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(updateID({
            ...expense,
            id: id,
          }));

          dispatch(changeMessage("Successful"));

        } else {
          dispatch(changeMessage("Invalid"));
        }
      });
  };
}

export function deleteExpense(id) {

  return dispatch => {

    const options = {
      method: 'DELETE',
    };

    fetch(`https://project2.rickoes.me:8443/expenses/${id}`, options)
      .then(assertResponse)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          dispatch(deleteID(id));
        }
      });
  };
}

export const Action = Object.freeze({
  LoadExpenses: 'LoadExpenses',
  LoadNet: 'LoadNet',
  AddExpense: 'AddExpense',
  ClearState: 'ClearState',
  LoadID: 'LoadID',
  DeleteID: 'DeleteID',
  UpdateID: 'UpdateID',
  ChangeMessage: 'ChangeMessage',
});

export function loadExpenses(expenses) {
  return { type: Action.LoadExpenses, payload: expenses };
}

export function loadNet(net) {
  return { type: Action.LoadNet, payload: net };
}

export function addExpense(expense) {
  console.log(expense);
  return { type: Action.AddExpense, payload: expense };
}

export function clearState() {
  return { type: Action.ClearState };
}

export function loadID(expense) {
  return { type: Action.LoadID, payload: expense };
}

export function deleteID(id) {
  return { type: Action.DeleteID, payload: id };
}

export function updateID(id) {
  return { type: Action.UpdateID, payload: id };
}

export function changeMessage(message) {
  return { type: Action.ChangeMessage, payload: message };
}