import React, { useState, useEffect } from "react";
import useHttp  from "../../hooks/http.hooks";
import {useMessage} from '../../hooks/message.hook'

const AuthPage = () => {
  const message = useMessage()
  const [form, setForm] = useState({ email: "", password: "" });
  const { loading, error, request, clearError } = useHttp();

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
      try {
        const data = await request('api/auth/register', 'POST', {...form})
        console.log('Data:', data)
      } catch (e) {

      }
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-3">
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">Авторизация</h5>
            <div>
              <div className="form-group">
                <label htmlFor="email">Введите email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Введите пароль</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div>
              <button className="btn btn-success" disabled={loading} style={{ marginRight: 10 }}>
                Войти
              </button>
              <button className="btn btn-primary" disabled={loading} onClick={registerHandler}>Регистрация</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
