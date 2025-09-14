import { useState } from "react";
import { login } from "../lib/auth.js";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const res = login(email, password);
    if (res.ok) {
      alert("เข้าสู่ระบบสำเร็จ!");
      nav("/Frist"); 
      alert(res.msg);
    }
  };

  return (
    <div className="auth-wrap">
      <h1>เข้าสู่ระบบ</h1>
      <form onSubmit={onSubmit}>
        <label>อีเมล</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>รหัสผ่าน</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <button
          type="button"
          className="secondary"
          onClick={() => nav("/resetpassword")}
        >
          Forgot Password
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        ยังไม่มีบัญชี? <Link to="/register">สมัครสมาชิก</Link>
      </p>
    </div>
  );
}