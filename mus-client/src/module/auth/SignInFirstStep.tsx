import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { checkLogin, setSignStage } from '../../redux/auth/auth.actions';

const SignInFirstStep = () => {
  const dispatch = useDispatch();

  const onEnter = async (data: any) => {
    dispatch(checkLogin(data.login));
  };

  const onSignUp = () => dispatch(setSignStage('signUp'));

  const {register, handleSubmit} = useForm<{login: string}>();

  return (
    <form onSubmit={handleSubmit(onEnter)}>
      <div className="mb-5">
        <input
          className="form-control"
          id="exampleInputEmail1"
          name='login'
          placeholder="Введите логин, почту"
          ref={register({required: true})}
        />
      </div>
      <div className="mb-3 d-grid gap-2 mx-auto">
        <button type="submit" className="btn btn-dark mb-2" onClick={onEnter}>Войти</button>
      </div>
      <div className="mb-3 d-grid gap-2 mx-auto">
        <button type="button" className="btn btn-outline-dark mb-2" onClick={onSignUp}>Зарегестрироваться</button>
      </div>
    </form>
  );
};

export default SignInFirstStep;
