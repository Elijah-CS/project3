import './Row.css'

export function Row(props) {

  return (

    <tr className='Row'>
      <td className='id'>
        <button className='info'>i</button>
        1
      </td>


      <td>19.99</td>
      <td>1/1/1970</td>
      <td>Bought college tuition</td>
      <td>11/18/2021</td>
      <td>11/18/2021</td>
    </tr>
  );
}