import './Expenses.css'
import { Row } from './Row.js';

export function Expenses(props) {
  return (
    <div className='Expenses'>
      <h1>Search/View</h1>

      <table>
        <tr className='ColumnHeader'>
          <th>ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
          <th>Date Created</th>
          <th>Date Updated</th>
        </tr>

        {<Row />}
        {<Row />}
        {<Row />}
        {<Row />}
      </table>
    </div>
  );
}