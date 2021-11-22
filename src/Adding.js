import './Adding.css'
// import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

// let amt = '0.00';

export function Adding(props) {

  // const [amount, setAmount] = useState(amt);

  return (

    <div className="Adding">
      <h1>Add an Expense</h1>

      <table className="Adding-Table">
        <tbody>
          <tr className='Adding-Header'>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>

          <tr className='Input-Row'>
            {/* <td><input 
              type="number" 
              step=".01" 
              pattern="[0-9]{3}"/></td> */}
            <td><CurrencyInput /></td>
            <td><input type="date" /></td>
            <td><input /></td>
          </tr>

        </tbody>

      </table>

      <button>Submit</button>
    </div>
  );
}