import './table.css'
import './Adding.css'
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getID, updateExpense, deleteExpense } from './actions';

export function Update(props) {

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    dispatch(getID(params.id));

  }, [dispatch, params]);


  const data = useSelector(state => state.expense);

  useEffect(() => {
    console.log(data);
    setAmount( Number(data.amount).toFixed(2) );
    setDescription(data.description);

    if (Object.keys(data).length > 0) {
      var date = new Date(data.year, data.month - 1, data.day);
      date = date.toISOString().substr(0, 10);

      setDate(date);
    }
  }, [data])


  return (
    <div className='Component'>
      <div className="Header">
        <button className="back" onClick={() => {
          navigate(`/expenses`);
        }}>
          &#8676;
        </button>
        <h1>Update Expense</h1>
        <button className="back" id="extra">&#8676;</button>

      </div>

      <table className="Update-Table">
        <tbody>
          <tr className='ColumnHeader'>
            <th>ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            <td>{data.id}</td>
            <td><input type="number" defaultValue={amount} step='0.01' onChange={event => setAmount(event.target.value)}/></td>
            <td><input type="date" defaultValue={date} onChange={event => setDate(event.target.value)}/></td>
            <td><input defaultValue={description} onChange={event => setDescription(event.target.value)}/></td>
          </tr>

        </tbody>

      </table>

      <button onClick={() => {
        dispatch(updateExpense( data.id, {amount}, {date}, {description}, data.created_at ));
      }}>Update</button>

      <button onClick={() => {
        dispatch(deleteExpense( data.id ))
        setAmount('')
        setDate('')
        setDescription('')

      }}>Delete</button>
    </div>
  );
}