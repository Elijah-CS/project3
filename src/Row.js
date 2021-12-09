import './Row.css'
import { useNavigate } from 'react-router-dom';

export function Row(props) {

  const {expense} = props;

  const date = new Date(expense.year, expense.month - 1, expense.day);

  const c = expense.created_at.replace('T', '-').split(/[- :]/);
  const created = new Date(c[0], c[1] - 1, c[2]);

  const u = expense.updated_at.replace('T', '-').split(/[- :]/);
  const updated = new Date(u[0], u[1] - 1, u[2]);

  const navigate = useNavigate();

  return (

    <tr className='Row'>
      <td className="Search-Row" id='id'>
        <button className='info' onClick={() => navigate(`/update/${expense.id}`)}>{expense.id}</button>
      </td>

      <td className="Search-Row">{Number(expense.amount).toFixed(2)}</td>
      <td className="Search-Row">{date.toDateString()}</td>
      <td className="Search-Row">{expense.description}</td>
      <td className="Search-Row">{created.toDateString()}</td>
      <td className="Search-Row">{updated.toDateString()}</td>
    </tr>
  );
}