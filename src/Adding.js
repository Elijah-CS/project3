import './table.css'
import './Adding.css'
import { newExpense } from './actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export function Adding(props) {

  const [amount, setAmount] = useState('0.00');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (

    <div className="Component">
      <div className="Header">
        <button className="back" onClick={() => {
          navigate(`/`);
        }}>
          &#8676;
        </button>
        <h1>Add an Expense</h1>
        <button className="back" id="extra">&#8676;</button>

      </div>

      <table className="Adding-Table">
        <tbody>
          <tr className='ColumnHeader'>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            <td><input type="number" value={amount} step='0.01' onChange={event => setAmount(event.target.value)} /></td>
            <td><input type="date" value={date} onChange={event => setDate(event.target.value)} /></td>
            <td><input value={description} onChange={event => setDescription(event.target.value)} /></td>
          </tr>

        </tbody>

      </table>

      <button className="Submit" onClick={ () => {
        dispatch(newExpense({amount}, {date}, {description} )) 
        setAmount('')
        setDate('')
        setDescription('')
      
      }}>Submit</button>
    </div>
  );
}