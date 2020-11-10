import React from "react";

const TextArea = (props) => {
    const {label, id, textForm, setTextForm} = props

    const onChange = (e) => {
        setTextForm({...textForm, [`text${id}`] : e.target.value})
    }


  return (
    <form style={{marginBottom: 10}}>
      <div className="form-group" style={{textAlign: 'center'}}>
        <label>{label}</label>
        <textarea
          className="form-control"
          rows="2"
          onChange={onChange}
          placeholder='Напишите ваши пожелания'
        ></textarea>
      </div>
      <hr/>
    </form>
  );
};

export default TextArea;
