import React, { useState } from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { CurrentButtonState, SetCurrentButtonState, id } = props;
  const cls = [classes.Button, classes[props.type]];
  const [ButtonValue, SetButtonValue] = useState(2);

  const onClick = (e) => {
    SetCurrentButtonState({
      ...CurrentButtonState,
      [`quest${id}`]: e.target.value,
    });
  };

  return (
    <div className={classes.ButtonMenu} style={{marginTop: 15}}>
      <div style={{textAlign: 'center', marginBottom: 5}}>{props.children}</div>
      <div style={{textAlign: 'center'}}>
        <button
          onClick={onClick}
          className="btn btn-success"
          disabled={props.disabled}
          id={`id${props.id}` + "+1"}
          value="1"
        >
          Отлично
        </button>
        <button
          onClick={onClick}
          className="btn btn-warning"
          disabled={props.disabled}
          id={`id${props.id}` + "+2"}
          value="2"
        >
          Нормально
        </button>
        <button
          onClick={onClick}
          className="btn btn-danger"
          disabled={props.disabled}
          id={`id${props.id}` + "+3"}
          value="3"
        >
          Плохо
        </button>
      </div>
    </div>
  );
};

export default Button;
