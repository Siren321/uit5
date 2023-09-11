import React from 'react'
import './Welcome.css'
import logo from '../assets/logo_with_text.png'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <section className='welcome'>
      <div className="container">
        <img src={logo}></img>
        <div className="conent">
            <h1>ยินดีต้อนรับ</h1>
            <h2>แอพนี้สร้างขึ้นเพื่อจองอาหารและสั่งอาหารโดยเฉพาะ ฉันหวังว่าคุณจะอร่อยกับอาหารกลางวัน!</h2>
        </div>
            <Link to={'/portal'}>เข้าเลยยย</Link>
      </div>
    </section>
  )
}

export default Welcome
