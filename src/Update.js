import './table.css'
import './Adding.css'
import { Header } from './Header.js'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getID, updateExpense, deleteExpense } from './actions';

function handleChange(event, setter, displayMessage) {
  setter(event.target.value);
  console.log(event.target.value);
  displayMessage(false);
}

export function Update(props) {

  const params = useParams();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    dispatch(getID(params.id));

  }, [dispatch, params]);


  const data = useSelector(state => state.expense);

  useEffect(() => {
    console.log(data);

    if (data !== undefined) {
      setAmount(Number(data.amount).toFixed(2));
      setDescription(data.description);

      if (Object.keys(data).length > 0) {
        var date = new Date(data.year, data.month - 1, data.day);
        date = date.toISOString().substr(0, 10);

        setDate(date);
      }
    }
  }, [data])


  const message = useSelector(state => state.message);

  return (
    <div className='Component'>

      <Header link="/expenses" title="Update Expense" />

      <table className="Update-Table">
        <tbody>
          <tr className='ColumnHeader'>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          {data !== undefined && (
            <tr className='Input-Row'>
              <td>{data.id}</td>

              <td><input type="number" defaultValue={amount} step='0.01' onChange={event => handleChange(event, setAmount, setShowMessage)} /></td>

              <td><input type="date" defaultValue={date} onChange={event => handleChange(event, setDate, setShowMessage)} /></td>

              <td><input defaultValue={description} onChange={event => handleChange(event, setDescription, setShowMessage)} /></td>
            </tr>

          )}

        </tbody>

      </table>

      {data !== undefined && (

        <div className="flex-container">
          <div className="grid">
            <button className="Submit" onClick={() => {
              dispatch(updateExpense(data.id, { amount }, { date }, { description }, data.created_at))
              setShowMessage(true);
            }}>Update</button>

            <button className="Submit" onClick={() => {
              dispatch(deleteExpense(data.id))
              setAmount('')
              setDate('')
              setDescription('')
              dispatch(getID('-1'))

            }}>Delete</button>

            {showMessage && (message === 'Successful') && (<p style={{ color: 'green' }}>{message}</p>)}
            {showMessage && (message === 'Invalid') && (<p style={{ color: 'red' }}>{message}</p>)}
          </div>
        </div>

      )}



    </div>
  );
}