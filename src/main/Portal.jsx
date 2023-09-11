import React from 'react'
import './Portal.css'
import { Link } from 'react-router-dom'

function Portal() {
  return (
    <section className='portal'>
        <div className="header-content">
            <h1>welcome</h1>
            <h1>food on time</h1>
        </div>
        <h2>เลือกรูปแบบการเข้าสู่ระบบ</h2>
        <div className="portal-btn">
            <Link to={'/register_student'}>นักศึกษา</Link>
            <Link to={'/register_parent'}>ผู้ปกครอง</Link>
            <Link to={'/register_merchant'}>แม่ค้า</Link>
        </div>
    </section>
  )
}

export default Portal