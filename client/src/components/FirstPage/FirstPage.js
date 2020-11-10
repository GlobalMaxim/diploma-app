import react, { useEffect, useState } from "react";
import classes from "../FirstPage/FirstPage.module.css";
import Button from "../../UI/Button/Button";
import { NavLink } from "react-router-dom";

const FirstPage = () => {
  const [CurrentButtonState, SetCurrentButtonState] = useState({
    quest1: "",
    quest2: "",
    quest3: "",
    quest4: "",
  });

  const cls = [classes.FirstPage];
  console.log(CurrentButtonState);
  // const handleButton = (e) => {
  //   if (e.target.id === "1") {
  //     SetCurrentButtonState(1);
  //   } else if (e.target.id === "2") {
  //     SetCurrentButtonState(2);
  //   } else {
  //     SetCurrentButtonState(3);
  //   }
  //   if (e.target.id === CurrentButtonState) {
  //     cls.push(classes.active);
  //   }
  // };

  const moveToNextPage = () => {};

  const showMain = () => {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 justify-content-center">
            <div className={classes.FirstPage}>
              <Button
                id="1"
                SetCurrentButtonState={SetCurrentButtonState}
                CurrentButtonState={CurrentButtonState}
              >
                Чи сподобалось вам заняття?
              </Button>
              <Button
                id="2"
                SetCurrentButtonState={SetCurrentButtonState}
                CurrentButtonState={CurrentButtonState}
              >
                Зміст заняття актуальний?
              </Button>
              <Button
                id="3"
                SetCurrentButtonState={SetCurrentButtonState}
                CurrentButtonState={CurrentButtonState}
              >
                Заняття спрямовано на потреби практичної діяльності?
              </Button>
              <Button
                id="4"
                SetCurrentButtonState={SetCurrentButtonState}
                CurrentButtonState={CurrentButtonState}
              >
                Методика проведення заняття сподобалась?
              </Button>

              <div style={{ textAlign: "center" }}>
                <NavLink
                  to={"/second-page"}
                  CurrentButtonState={CurrentButtonState}
                >
                  <button
                    type="primary"
                    disabled={!CurrentButtonState}
                    onClick={moveToNextPage}
                    className="btn btn-primary"
                    style={{width: "50%", marginTop: 10}}
                  >
                    Далее
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // console.log(CurrentButtonState);

  return <div>{showMain()}</div>;
};

export default FirstPage;
