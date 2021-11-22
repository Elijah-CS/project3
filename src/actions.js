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
        console.log(data);
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
        console.log(data);
        dispatch(loadNet(data.results));
      });
  };
}

export const Action = Object.freeze({
  LoadExpenses: 'LoadExpenses',
  LoadNet: 'LoadNet',
});

export function loadExpenses(expenses) {
  return { type: Action.LoadExpenses, payload: expenses };
}

export function loadNet(net) {
  return { type: Action.LoadNet, payload: net };
}
