import './Row.css'

export function Row(props) {

  const {expense} = props;

  const date = new Date(expense.year, expense.month - 1, expense.day);

  const c = expense.created.replace('T', '-').split(/[- :]/);
  const created = new Date(c[0], c[1] - 1, c[2]);

  const u = expense.updated.replace('T', '-').split(/[- :]/);
  const updated = new Date(u[0], u[1] - 1, u[2]);

  return (

    <tr className='Row'>
      <td className='id'>
        <button className='info'>i</button>
        {expense.id}
      </td>

      <td className="Search-Row">{expense.amount}</td>
      <td className="Search-Row">{date.toDateString()}</td>
      <td className="Search-Row">{expense.description}</td>
      <td className="Search-Row">{created.toDateString()}</td>
      <td className="Search-Row">{updated.toDateString()}</td>
    </tr>
  );
}