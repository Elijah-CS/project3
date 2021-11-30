import { TextInput } from "./TextInput";

export function MyInput(props) {

  const { type, format, setter } = props;

  switch (type) {
    case 'text':
      return <TextInput format={format} setter={setter} />
    case 'year':
      var arr = [...Array(new Date().getFullYear()).keys()];
      
      return (
        <select className="search" onChange={event => format(event, setter)}>
          <option>----</option>
          {arr.reverse().map(year => <option>{year + 1}</option>)};
        </select>
      )
    default:
      return <input type={type} className="search" onChange={event => format(event, setter)} />
  }
}

