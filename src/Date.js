
export function Date(props) {

  const { type, format, setter } = props;

  return (
    <input type={type} className="date-search" onChange={event => format(event, setter)} />
  );
}