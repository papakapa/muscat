import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SignUpForm, StyledSignUp, StyledSignUpBlock, StyledSignUpHeader,
  StyledSignUpLink,
  StyledSignUpPost, StyledSignUpWrapper } from './StyledSignUp';
import { useForm } from 'react-hook-form';
import { IUserToCreate } from '../../core/interfaces/IUser';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/auth.actions';
import { clientRoutes } from '../../core/constants/client.routes';

const SignUp = () => {
  const dispatch = useDispatch();
  const {register, handleSubmit, watch} = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onCreate =  (data: IUserToCreate) => {
    dispatch(signUp(data));
  };


  return (
    <StyledSignUp>
      <StyledSignUpPost>

      </StyledSignUpPost>
      <StyledSignUpWrapper>
        <StyledSignUpBlock>
          <StyledSignUpHeader>
            Регистрация
          </StyledSignUpHeader>
          <SignUpForm onSubmit={handleSubmit(onCreate)}>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Имя"
                name='firstName'
                ref={register({required: true})}
                autoComplete='off'
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Фамилия"
                name='secondName'
                ref={register({required: true})}
                autoComplete='off'
              />
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                placeholder="Придумайте логин"
                name='login'
                ref={register({required: true})}
                autoComplete='off'
              />
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                placeholder="Введите почту"
                name='email'
                ref={register()}
                autoComplete='off'
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Придумайте пароль"
                name='password'
                ref={register({required: true})}
                autoComplete='off'
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="password"
                className="form-control"
                placeholder="Повторите пароль"
                name='secPassword'
                ref={register({
                  required: true,
                  validate: value => value === password.current
                })}
                autoComplete='off'
              />
            </div>
            <div className="mb-3 mt-4 d-grid gap-2 mx-auto">
              <button type="submit" className="btn btn-outline-dark mb-2" >Зарегистрироваться</button>
            </div>
          </SignUpForm>
          <StyledSignUpLink>Есть аккаунт в MusCat?<NavLink to={clientRoutes.AUTH_SIGN_IN}>Войти</NavLink></StyledSignUpLink>
        </StyledSignUpBlock>
      </StyledSignUpWrapper>
    </StyledSignUp>
  );
};

export default SignUp;
