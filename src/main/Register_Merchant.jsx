import React from 'react'
import SignUp from '../components/SignUp'
import './Register.css'
import { Link } from 'react-router-dom'

function Register_Merchant() {
    return (
        <section className="register">
            <Link to={'/portal'}> &lt; พ่อค้า</Link>
            <div className="container">
                <div className="register-form">
                    <SignUp></SignUp>
                </div>
                <Link to={'/login'}>มีบัญชีอยู่แล้วใช่หรือไม่</Link>
            </div>
        </section>
    )
}

export default Register_Merchant
