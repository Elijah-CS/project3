import './Row.css'

export function Row(props) {

  const {expense} = props;

  const date = `${expense.month}/${expense.day}/${expense.year}`;

  return (

    <tr className='Row'>
      <td className='id'>
        <button className='info'>i</button>
        {expense.id}
      </td>

      <td>{expense.amount}</td>
      <td>{date}</td>
      <td>{expense.description}</td>
      <td>{expense.created}</td>
      <td>{expense.updated}</td>
    </tr>
  );
}