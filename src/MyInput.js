import {TextInput} from './TextInput.js';

export function MyInput(props) {

  const { type, format, setter } = props;


  if (type === 'text') {

    return <TextInput format={format} setter={setter}/>;

  } else if (type === 'year') {

    var arr = [...Array(new Date().getFullYear()).keys()];

    return (

      <select className="search" onChange={event => format(event, setter)}>
        <option>----</option>
        {arr.reverse().map(year => <option>{year + 1}</option>)};
      </select>

    );
  } else {

    return (
      <input type={type} className="search" onChange={event => format(event, setter)} />
    );
  }
}

