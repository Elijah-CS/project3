import './Adding.css'
import CurrencyInput from 'react-currency-input-field';
import { newExpense } from './actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


export function Adding(props) {

  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  return (

    <div className="Adding">
      <h1>Add an Expense</h1>

      <table className="Adding-Table">
        <tbody>
          <tr className='Adding-Header'>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            <td><CurrencyInput value={amount} onChange={event => setAmount(event.target.value)} /></td>
            <td><input type="date" value={date} onChange={event => setDate(event.target.value)} /></td>
            <td><input value={description} onChange={event => setDescription(event.target.value)} /></td>
          </tr>

        </tbody>

      </table>

      <button onClick={() => dispatch(newExpense({amount}, {date}, {description} ))}>Submit</button>
    </div>
  );
}