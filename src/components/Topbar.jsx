import { Link, useNavigate } from "react-router-dom";

export default function Topbar() {
  const nav = useNavigate(); // ✅ เพิ่ม useNavigate

  return (
    <header className="topbar">
      <div className="logo" onClick={() => nav("/home")}>
        GRADIE <span className="ku">KU</span>
      </div>

      <Link to="/info" className="profile" title="โปรไฟล์">
        <img
          src="/images/10.png"
          alt="โปรไฟล์"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      </Link>
    </header>
    
  );
}
