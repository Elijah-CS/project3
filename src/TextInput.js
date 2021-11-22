import { useState } from 'react';

let text = '';

function handleChange(event, setInput, format, setter) {
  setInput(event.target.value);

  format(event, setter);

}

export function TextInput(props) {
  const { format, setter } = props;

  const [input, setInput] = useState(text);

  return (
    <input type="text" className="search-box"
      placeholder="Leave empty to show all"
      value={input}
      onChange={event => handleChange(event, setInput, format, setter)} />
  );
}