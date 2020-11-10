import React, { useEffect, useState } from "react";
import Select from "../../UI/Select/Select";
import Button from "../../UI/Button/Button";
import classes from "./SecondPage.module.css";

const SecondPage = (props) => {
  const [form, setForm] = useState({
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
  });
  const { CurrentButtonState } = props;
  console.log(CurrentButtonState);
  const handleButton = () => {
    setForm({ ...form, [`firstQuestion`]: CurrentButtonState });
    console.log(form);
  };

  return (
    <div className="row">
      <div className="col-12 justify-content-center">
        <Select
          label="Оцініть рівень цікавості заняття"
          setForm={setForm}
          form={form}
          id={1}
        />
        <Select
          label="Оцініть рівень актуальності заняття"
          setForm={setForm}
          form={form}
          id={2}
        />
        <Select
          label="Оцініть рівень практичної користі заняття"
          setForm={setForm}
          form={form}
          id={3}
        />
        <Select
          label="Оцініть загальний рівень заняття"
          setForm={setForm}
          form={form}
          id={4}
        />
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleButton}
            style={{width: "50%"}}
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
