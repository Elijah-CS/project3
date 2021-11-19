import './Expenses.css'
import { Row } from './Row.js';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { startSearching } from './actions';



export function Expenses(props) {

  const expenses = useSelector(state => state.expenses);
  const [queryText, setQueryText] = useState('');
  const dispatch = useDispatch();

  return (
    <div className='Expenses'>
      <h1>Search/View</h1>

      <input className="searchBox" onChange={event => setQueryText(event.target.value)} />
      <button className="button" onClick={() => dispatch(startSearching(queryText))}  >
        Search
      </button>

      <table>
        <tr className='ColumnHeader'>
          <th>ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
          <th>Date Created</th>
          <th>Date Updated</th>
        </tr>

        {expenses.map(expense => <Row expense={expense} />)}

        {/* {<Row />}
        {<Row />}
        {<Row />}
        {<Row />} */}
      </table>
    </div>
  );
}