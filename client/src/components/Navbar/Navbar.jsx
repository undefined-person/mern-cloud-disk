import React from 'react'
import './navbar.scss'
import Logo from '../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../redux/reducers/userReducer'
const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="Logo" className="navbar__logo" />
        <div className="navbar__header"> Cloud</div>
        {!isAuth && <div className="navbar__login">
          <NavLink to="/login">Войти</NavLink>
        </div>}
        {!isAuth && <div className="navbar__registration">
          <NavLink to="/registration">Регистрация</NavLink>
        </div> }
        {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div>}
      </div>
    </div>
  )
}
export default Navbar