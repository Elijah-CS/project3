import './Expenses.css'
import { Row } from './Row.js';
import { MyDate } from './MyDate.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { startSearching } from './actions';



function formatQueryText(event, setter) {
  // console.log(event.target.value);

  let input = event.target.value;

  if (event.target.type === 'text') {
    //...
  } else if (event.target.type === 'month') {

    const temp = event.target.value.split(/[-]/);
    input = `expenses/${temp[0]}/${temp[1]}`;

  } else if (event.target.type === 'date') {

    const temp = event.target.value.split(/[-]/);
    input = `expenses/${temp[0]}/${temp[1]}/${temp[2]}`;

  } else if (event.target.type === 'select-one') {

    const temp = event.target.value;
    input = `expenses/${temp}`;

  }

  setter(input);

}

function formatDate(event, setter) {

  setter(event.target.value);
}

let date = 'date';

export function Expenses(props) {

  const expenses = useSelector(state => state.expenses);
  const [queryText, setQueryText] = useState('');
  const [dateType, setDateType] = useState(date);
  const dispatch = useDispatch();

  return (
    <div className='Expenses'>
      <h1>Search/View</h1>

      <input className="search-box" onChange={event => formatQueryText(event, setQueryText)} />
      <button className="button" onClick={() => dispatch(startSearching(queryText))}  >
        Search
      </button>

      <span className="radio" onChange={event => formatDate(event, setDateType)}>
        <input type="radio" value="year" name="radio-date" /> By Year
        <input type="radio" value="month" name="radio-date" /> By Month
        <input type="radio" value="date" name="radio-date" /> By Day
      </span>

      < MyDate type={dateType} format={formatQueryText} setter={setQueryText} />

      <button className="button" onClick={() => dispatch(startSearching(queryText))}  >
        Search
      </button>

      <table>
        <tbody>
          <tr className='ColumnHeader'>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Date Updated</th>
          </tr>

          {expenses.map(expense => <Row expense={expense} />)}

        </tbody>

      </table>
    </div>
  );
}