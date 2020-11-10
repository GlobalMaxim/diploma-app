import React, { useState } from "react";
import TextArea from "../../UI/TextArea/TextArea";

const ThirdPage = () => {
  const [textForm, setTextForm] = useState({ text1: "", text2: "", text3: "" });
  
  const handleButton = () => {
    console.log(textForm);
  };
  return (
    <div>
      <TextArea
        label="Що би Ви додали до змісту заняття?"
        id="1"
        textForm={textForm}
        setTextForm={setTextForm}
      />
      <TextArea
        label="Що би Ви додали до змісту заняття з позицій практики?"
        id="2"
        textForm={textForm}
        setTextForm={setTextForm}
      />
      <TextArea
        label="Що би Ви змінили у методиці проведення заняття?"
        id="3"
        textForm={textForm}
        setTextForm={setTextForm}
      />
      <div style={{ textAlign: "center" }}>
        <button
          type="primary"
          
          onClick={handleButton}
          className="btn btn-primary"
          style={{ width: "50%", marginTop: 10 }}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
