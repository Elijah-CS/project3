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
      <td>None</td>
      <td>None</td>

      {/* <td>19.99</td>
      <td>1/1/1970</td>
      <td>Bought college tuition</td>
      <td>11/18/2021</td>
      <td>11/18/2021</td> */}
    </tr>
  );
}