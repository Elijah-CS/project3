import './Header.css'
import { useNavigate } from 'react-router-dom';

export function Header(props) {

  const {link, title} = props;
  const navigate = useNavigate();

  return (
    <div className="Header">

      <button className="back" onClick={() => { navigate(`${link}`) }}>
        &#8676;
      </button>
      <h1>{title}</h1>
      <button className="back" id="extra">&#8676;</button>

    </div>
  )

}