import React from 'react'
import { Link } from 'react-router-dom';
import Page from '../../components/Page'
import { Button } from '../../globalStyles';
import { Theme } from '../../themes/theme';

const Profile = () => {

  const isAuth = false;
  const user = {
    name: 'Jaiber',
    phone: 3206644863,
    email: 'jaiber@gmail.com',
    avatar: ''
  }

  const UserInfo = () => (
    <div>
      <h3>{user.name}</h3>
      <h5>{user.phone}</h5>
      <p>{user.email}</p>
      <br/>
      <br/>
      <Button type="">Cerrar Sesion</Button>
    </div>
  );

  const UserUnauth = () => (
    <div>
      <p>Para acceder a tu perfil, inicia sesion</p>
      <Link to={'/login'}>
        <Button type="">Iniciar Sesion</Button>
      </Link>
      <br/>
      <p>o, crea una cuenta</p>
      <Link to={'/singup'}>
        <Button bgColor={Theme.secondary}>Registrarme</Button>
      </Link>
    </div>
  )

  return (
    <Page>
        <h1>Mi Cuenta</h1>
        { isAuth ? <UserInfo/> : <UserUnauth/>}
    </Page>
  )
}

export default Profile