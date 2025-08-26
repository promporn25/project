import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const nav = useNavigate();
  const [f, setF] = useState({ fullname:"", email:"", p1:"", p2:"" });

  const onSubmit = (e) => {
    e.preventDefault();
    if (f.p1 !== f.p2) { alert("รหัสผ่านไม่ตรงกัน"); return; }
    // demo: ไม่ผูกกับผู้ใช้จริง
    alert("เปลี่ยนรหัสผ่านสำเร็จ (ตัวอย่าง)");
    nav("/login");
  };

  return (
    <div className="auth-wrap" style={{maxWidth:400}}>
      <h1>รีเซ็ตรหัสผ่าน</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="ชื่อ - นามสกุล" value={f.fullname} onChange={e=>setF({...f, fullname:e.target.value})} required />
        <input type="email" placeholder="อีเมล" value={f.email} onChange={e=>setF({...f, email:e.target.value})} required />
        <input type="password" placeholder="รหัสผ่านใหม่" value={f.p1} onChange={e=>setF({...f, p1:e.target.value})} required />
        <input type="password" placeholder="ยืนยันรหัสผ่านใหม่" value={f.p2} onChange={e=>setF({...f, p2:e.target.value})} required />
        <button type="submit">ยืนยันรหัสผ่าน</button>
      </form>
    </div>
  );
}
