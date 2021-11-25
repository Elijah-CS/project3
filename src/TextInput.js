import { useState } from 'react';

function handleChange(event, setInput, format, setter) {
  setInput(event.target.value);

  format(event, setter);

}

export function TextInput(props) {
  const { format, setter } = props;

  const [input, setInput] = useState('');

  return (
    <input type="text" className="search-box"
      placeholder="Leave blank to show all"
      value={input}
      onChange={event => handleChange(event, setInput, format, setter)} />
  );
}