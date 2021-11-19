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

      <td>{expense.amount}</td>
      <td>{date.toDateString()}</td>
      <td>{expense.description}</td>
      <td>{created.toDateString()}</td>
      <td>{updated.toDateString()}</td>
    </tr>
  );
}