import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentLogin } from '../../redux/auth/auth.selectors';
import { useForm } from 'react-hook-form';
import { signIn } from '../../redux/auth/auth.actions';

const SignInSecondStep = () => {
  const dispatch = useDispatch();
  const login = useSelector(getCurrentLogin);

  const {register, handleSubmit} = useForm();

  const onSignIn = (data: any) => {
    dispatch(signIn(login, data.password));
  };

  return (
    <form onSubmit={handleSubmit(onSignIn)}>
      <div className="col-10">
        <p className="form-control-static">{login}</p>
      </div>
      <div className="mb-5">
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Пароль"
          name='password'
          ref={register({required: true})}
        />
      </div>
      <div className="mb-3 d-grid gap-2 mx-auto">
        <button type="submit" className="btn btn-dark mb-2">Войти</button>
      </div>
      <div className="mb-3 d-grid gap-2 mx-auto">
        <button type="button" className="btn btn-outline-dark mb-2">Войти через ВКонтакте</button>
      </div>
      <div className="mb-3 d-grid gap-2 mx-auto">
        <button type="button" className="btn btn-outline-dark mb-2">Войти через Facebook</button>
      </div>
    </form>
  );
};

export default SignInSecondStep;
