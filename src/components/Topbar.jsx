import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      {/* ปุ่มไปหน้าโปรไฟล์ */}
      <Link to="/info" className="profile" title="โปรไฟล์">
        <img 
          src="/images/10.png"  // 🔹 path รูป
          alt="โปรไฟล์" 
          style={{ width: "40px", height: "40px", borderRadius: "50%" }} // 🔹 ตั้งขนาดและให้เป็นวงกลม
        />
      </Link>
    </div>
  );
}
