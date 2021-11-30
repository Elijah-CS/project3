import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clear } from './actions';
import { useEffect } from 'react';

export function Home(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <div className="Home">
      <h1>Expenses</h1>

      <div className='Buttons'>
        <button onClick={() => { navigate(`/expenses/`) }}>
          Search/View
        </button>

        <button onClick={() => { navigate(`/add/`) }}>
          Add Expense
        </button>
      </div>

    </div>
  );
}