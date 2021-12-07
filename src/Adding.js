import './table.css'
import './Adding.css'
import { Header } from './Header.js'
import { newExpense } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function handleChange(event, setter, displayMessage) {
  setter(event.target.value);
  displayMessage(false);
}

export function Adding(props) {

  const [amount, setAmount] = useState('0.00');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [showMessage, setShowMessage] = useState(false);

  const dispatch = useDispatch();

  const message = useSelector(state => state.message);

  return (

    <div className="Component">

      <Header link="/" title="Add an Expense"/>

      <table className="Adding-Table">
        <tbody>
          <tr className='ColumnHeader'>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            <td><input type="number" value={amount} step='0.01' onChange={event => handleChange(event, setAmount, setShowMessage)} /></td>

            <td><input type="date" value={date} onChange={event => handleChange(event, setDate, setShowMessage)} /></td>

            <td><input value={description} onChange={event => handleChange(event, setDescription, setShowMessage)} /></td>
          </tr>

        </tbody>

      </table>

      <div className="flex-container">
        <div className="grid">
          <button className="Submit" onClick={() => {
            dispatch(newExpense({ amount }, { date }, { description }))
            setAmount('')
            setDate('')
            setDescription('')

            setShowMessage(true);

          }}>Submit</button>

          {showMessage && (message === 'Successful') && (<p style={{color: 'green'}}>{message}</p>)}
          {showMessage && (message === 'Invalid') && (<p style={{ color: 'red' }}>{message}</p>)}
        </div>
      </div>

      
    </div>
  );
}