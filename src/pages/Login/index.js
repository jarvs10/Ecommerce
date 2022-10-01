import React from 'react';
import { useForm } from 'react-hook-form';
import Page from '../../components/Page';
import { FormControlLabel, FormControlInput, Button, FormControl, FormControlAction } from '../../globalStyles';

const Login = () => {

  const { register, handleSubmit, formState: { errors, isValid }} = useForm();
  // mode: onChange

  const onSubmitLogin = (data) => {
    console.log('data', data);
  }

  return (
    <Page>
      <h1>Inicio Sesion</h1>

      <form onSubmit={handleSubmit(onSubmitLogin)}>

        <FormControl>
          <FormControlLabel htmlFor='email'>Email</FormControlLabel>
          <FormControlInput 
            type="email" 
            placeholder='Email' 
            id='email' 
            {...register('email', { required: true, pattern: /\S+@\S+\S+./ })} 
          />
          { errors.email?.type === "required" && 
            (<span>Este campo es obligatorio</span>)
          }
          { errors.email?.type === "pattern" && 
            (<span>Ingrese un correo valido</span>)
          }
        </FormControl>

        <FormControl>
          <FormControlLabel htmlFor='password'>Password</FormControlLabel>
          <FormControlInput 
            type="password" 
            placeholder='Password' 
            id='password'
            {...register('password', { required: true })} 
          />
          { errors.password?.type === "required" && 
            (<span>El password es obligatorio</span>)
          }
        </FormControl>

        <FormControlAction>
          <Button
            disabled={!isValid}
            type="submit"
            >Ingresar
          </Button>
        </FormControlAction>
        { isValid ? 'es valido': 'no es valido'}
      </form>
    </Page>
  )
}

export default Login