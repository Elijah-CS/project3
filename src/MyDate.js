
export function MyDate(props) {

  const { type, format, setter } = props;

  if (type === 'year') {

    var arr = [...Array( new Date().getFullYear() ).keys()];

    return (

      <select onChange={event => format(event, setter)}>
        <option>----</option>

        {arr.reverse().map(year => <option>{year + 1}</option>)};
      </select>
    );
  } else {

    return (

      <input type={type} className="date-search" onChange={event => format(event, setter)} />
    );
  }
}