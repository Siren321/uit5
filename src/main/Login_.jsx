import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login_() {
  return (
    <section className='Login'>
      <Link to={'/portal'}> &lt; เข้าสู่ระบบ</Link>
      <h2>Food on Time</h2>
      <form>
        <input placeholder='กรอกชื่อ'></input>
        <input placeholder='รหัสผ่าน'></input>
        <button>ล็อกอิน</button>
        <h3>ลืมรหัสผ่าน</h3>
      </form>
    </section>
  )
}

export default Login_   