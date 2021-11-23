import './table.css'
import './Adding.css'
import { newExpense } from './actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


export function Adding(props) {

  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  return (

    <div className="Component">
      <h1>Add an Expense</h1>

      <table className="Adding-Table">
        <tbody>
          <tr className='ColumnHeader'>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            <td><input type="number" value={amount} onChange={event => setAmount(event.target.value)} /></td>
            <td><input type="date" value={date} onChange={event => setDate(event.target.value)} /></td>
            <td><input value={description} onChange={event => setDescription(event.target.value)} /></td>
          </tr>

        </tbody>

      </table>

      <button onClick={ () => {
        dispatch(newExpense({amount}, {date}, {description} )) 
        setAmount('')
        setDate('')
        setDescription('')
      
      }}>Submit</button>
    </div>
  );
}