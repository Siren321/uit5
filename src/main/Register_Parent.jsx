import React from 'react'
import SignUp from '../components/SignUp'
import './Register.css'
import { Link } from 'react-router-dom'

function Register_Parent() {
  return (
    <section className="register">
    <Link to={'/portal'}> &lt; ผู้ปกครอง</Link>
    <div className="container">
        <div className="register-form">
            <SignUp></SignUp>
        </div>
        <Link to={'/Login'} className='login-redirect'>มีบัญชีอยู่แล้วใช่หรือไม่</Link>
    </div>
</section>
  )
}

export default Register_Parent