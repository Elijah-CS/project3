import './table.css'
import './Adding.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getID } from './actions';

export function Update(props) {

  const params = useParams();
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
    setAmount(data.amount);
    setDescription(data.description);

    if (Object.keys(data).length > 0) {
      var date = new Date(data.year, data.month - 1, data.day);
      date = date.toISOString().substr(0, 10);

      setDate(date);
    }
  }, [data])


  return (
    <div className='Component'>
      <h1>Update Expense</h1>

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
            <td><input type="number" defaultValue={amount} onChange={event => setAmount(event.target.value)}/></td>
            <td><input type="date" defaultValue={date} onChange={event => setDate(event.target.value)}/></td>
            <td><input defaultValue={description} onChange={event => setDescription(event.target.value)}/></td>
          </tr>

        </tbody>

      </table>

      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}