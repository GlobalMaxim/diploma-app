import React, { useState } from "react";

const Select = (props) => {
  const [value, setValue] = useState("1");
  const { label, id, setForm, form } = props;

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    setForm({ ...form, [`q${id}`]: e.target.value });
  };

  return (
    <form style={{ marginTop: 10 }}>
      <label>
        <select
          value={value}
          onChange={handleChange}
          style={{ marginRight: 10 }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        {label}
      </label>
    </form>
  );
};

export default Select;
