import './table.css'
import './Adding.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getID } from './actions';

export function Update(props) {

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getID( params.id ) );

  }, [dispatch, params]);


  const data = useSelector(state => state.expense);

  console.log(data);

  var amount = '';
  var date = '';
  var description = '';

  if (Object.keys(data).length > 0) {
    amount = data.amount;
    date = new Date(data.year, data.month - 1, data.day);
    date = date.toISOString().substr(0, 10);
    description = data.description;
  }

  console.log(amount);

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
            <td><input type="number" defaultValue={amount}/></td>
            <td><input type="date" defaultValue={date}/></td>
            <td><input defaultValue={description}/></td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}