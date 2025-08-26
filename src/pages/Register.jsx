import { useState } from "react";
import { saveUser } from "../lib/auth.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [data, setData] = useState({
    firstname:"", lastname:"", studentid:"", email:"", password:"",
    facultyChecked:false, majorCE:false
  });
  const [confirm, setConfirm] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const faculty = data.facultyChecked ? "คณะวิทยาศาสตร์และวิศวกรรมศาสตร์" : "";
    const major = data.majorCE ? "วิศวกรรมคอมพิวเตอร์" : "";
    const user = {
      firstname: data.firstname, lastname: data.lastname, studentid: data.studentid,
      email: data.email, password: data.password, faculty, major, profileImage:""
    };
    setConfirm(user);
  };

  const onConfirm = () => { saveUser(confirm); alert("สมัครสมาชิกสำเร็จ!"); nav("/login"); };

  return (
    <div className="auth-wrap">
      <h1>สมัครสมาชิก</h1>

      {!confirm && (
        <form onSubmit={onSubmit}>
          <input placeholder="ชื่อ" required value={data.firstname} onChange={e=>setData({...data, firstname:e.target.value})}/>
          <input placeholder="นามสกุล" required value={data.lastname} onChange={e=>setData({...data, lastname:e.target.value})}/>
          <input placeholder="รหัสนิสิต" required value={data.studentid} onChange={e=>setData({...data, studentid:e.target.value})}/>
          <input type="email" placeholder="Email" required value={data.email} onChange={e=>setData({...data, email:e.target.value})}/>
          <input type="password" placeholder="Password" required value={data.password} onChange={e=>setData({...data, password:e.target.value})}/>

          <label style={{display:"flex", gap:8, alignItems:"center"}}>
            <input type="checkbox" checked={data.facultyChecked} onChange={e=>setData({...data, facultyChecked:e.target.checked})}/>
            คณะวิทยาศาสตร์และวิศวกรรมศาสตร์
          </label>

          {data.facultyChecked && (
            <label style={{display:"flex", gap:8, alignItems:"center", marginLeft:16}}>
              <input type="checkbox" checked={data.majorCE} onChange={e=>setData({...data, majorCE:e.target.checked})}/>
              วิศวกรรมคอมพิวเตอร์
            </label>
          )}

          <button type="submit">สมัครสมาชิก</button>
        </form>
      )}

      {confirm && (
        <div style={{background:"#fff", padding:16, borderRadius:8, border:"1px solid #ddd"}}>
          <h2>ยืนยันข้อมูลของคุณ</h2>
          <p><b>ชื่อ:</b> {confirm.firstname}</p>
          <p><b>นามสกุล:</b> {confirm.lastname}</p>
          <p><b>รหัสนิสิต:</b> {confirm.studentid}</p>
          <p><b>Email:</b> {confirm.email}</p>
          <p><b>คณะ:</b> {confirm.faculty || "-"}</p>
          <p><b>สาขา:</b> {confirm.major || "-"}</p>
          <div style={{display:"flex", gap:8, marginTop:8}}>
            <button onClick={onConfirm}>ยืนยันการสมัคร</button>
            <button className="secondary" onClick={()=>setConfirm(null)}>แก้ไข</button>
          </div>
        </div>
      )}

      <p style={{marginTop:12}}><Link to="/login">กลับไปหน้าเข้าสู่ระบบ</Link></p>
    </div>
  );
}
