import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      {/* ปุ่มไปหน้าโปรไฟล์ */}
      <Link to="/info" className="profile" title="โปรไฟล์">
        🙂
      </Link>
    </div>
  );
}
