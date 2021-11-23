import './table.css'
import './Adding.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { startSearching } from './actions';

export function Update(props) {

  const params = useParams();
  console.log(params);

  const expenses = useSelector(state => state.expenses);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startSearching(`id/${params.id}`) );
  }, [dispatch, params]);

  console.log(expenses);

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
            <td>{params.id}</td>
            <td><input type="number" /></td>
            <td><input type="date" /></td>
            <td><input /></td>
          </tr>

        </tbody>

      </table>
    </div>
  );
}