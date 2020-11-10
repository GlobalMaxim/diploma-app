import React, {  useState } from "react";
import Select from "../../UI/Select/Select";
// import classes from "./SecondPage.module.css";
import { NavLink } from "react-router-dom";

const SecondPage = () => {
  const [form, setForm] = useState({
    q1: "1",
    q2: "1",
    q3: "1",
    q4: "1",
  });
  const handleButton = () => {
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
          <NavLink to={'/third-page'}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleButton}
              style={{ width: "50%" }}
            >
              Далее
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
