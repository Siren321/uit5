import React from 'react'
import './SignUp.css'

function SignUp() {
  return (
    <div className="form-container">
        <h2>กรอกข้อมูล</h2>
            <form>
                <input placeholder='กรอกชื่อ'></input>
                <input placeholder='กรอกนามสกุล'></input>
                <input placeholder='กรอกอีเมล'></input>
                <input placeholder='กรอกรหัสผ่าน'></input>
                <input placeholder='ยืนยันรหัสผ่าน'></input>
                <button>สร้างบัญชี</button>
            </form>
    </div>
  )
}

export default SignUp
