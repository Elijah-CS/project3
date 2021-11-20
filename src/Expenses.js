import './Expenses.css'
import { Row } from './Row.js';
import { MyInput } from './MyInput.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { startSearching } from './actions';



function formatQueryText(event, setter) {
  // console.log(event.target.value);

  let input = event.target.value;

  if (event.target.type === 'text') {
    if ( event.target.value === '' ) {
      input = 'all';
    }
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


let input_type = 'date';

export function Expenses(props) {

  const expenses = useSelector(state => state.expenses);
  const [queryText, setQueryText] = useState('');
  const [inputType, setInputType] = useState(input_type);
  const dispatch = useDispatch();

  return (
    <div className='Expenses'>
      <h1>Search/View</h1>

      <span className="radio" onChange={event => setInputType(event.target.value)}>
        <label><input type="radio" value="year" name="radio-date" /> By Year </label>
        <label><input type="radio" value="month" name="radio-date" /> By Month </label>
        <label><input type="radio" value="date" name="radio-date" defaultChecked /> By Day </label>
        <label><input type="radio" value="text" name="radio-date" /> By Keyword </label>
      </span>

      < MyInput type={inputType} format={formatQueryText} setter={setQueryText} />

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