import './Home.css';
import { useNavigate } from 'react-router-dom';

export function Home(props) {

  const navigate = useNavigate();

  return (
    <div className="Home">
      <h1>Expenses</h1>

      <div className='Buttons'>
        <button
          onClick={() => {
            navigate(`/expenses/`);
          }}>
          Search/View
        </button>
        <button>Add Expense</button>
      </div>

    </div>
  );
}