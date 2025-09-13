import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    studentid: "",
    email: "",
    faculty: "",
    major: "",
    profileImage: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setForm((p) => ({
      ...p,
      ...stored,
      profileImage:
        stored.profileImage ||
        "https://via.placeholder.com/150/dfdfdf/777?text=Profile",
    }));
  }, []);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((p) => ({ ...p, [id]: value }));
  };

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) =>
      setForm((p) => ({ ...p, profileImage: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const onSave = () => {
    localStorage.setItem("userInfo", JSON.stringify(form));
    setIsEditing(false);
    setMessage("บันทึกข้อมูลเรียบร้อยแล้ว!");
  };

  const onLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#ededed" : "#ffffff",
        padding: "20px 16px 120px",
      }}
    >
      
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#141414",
          borderRadius: 22,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          boxShadow: "0 6px 0 rgba(0,0,0,.25)",
          position: "relative",
        }}
      >
        <Link
           to="/frist"   
          title="Home"
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#777",
            display: "grid",
            placeItems: "center",
            boxShadow: "inset 0 -2px 0 rgba(0,0,0,.25)",
            textDecoration: "none",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
          </svg>
        </Link>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: 900,
              letterSpacing: 1,
              fontSize: 24,
              textTransform: "uppercase",
            }}
          >
            EDIT PROFILE
          </span>
        </div>
      </div>

      
      <div
        style={{
          maxWidth: 900,
          margin: "24px auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", marginTop: 18, marginBottom: 22 }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#d9d9d9",
              overflow: "hidden",
              boxShadow: "0 10px 18px rgba(0,0,0,.18)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={form.profileImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <label
            htmlFor="upload"
            style={{
              position: "absolute",
              right: -6,
              bottom: 8,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "#fff",
              display: "grid",
              placeItems: "center",
              boxShadow: "0 4px 10px rgba(0,0,0,.25)",
              cursor: "pointer",
              border: "2px solid #eee",
            }}
            title="เปลี่ยนรูป"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#333">
              <path d="M5 20h14v-9h-4l-2-2H9L7 11H5v9z" />
            </svg>
          </label>
          <input
            id="upload"
            type="file"
            accept="image/*"
            onChange={onUpload}
            style={{ display: "none" }}
            disabled={!isEditing}
          />
        </div>

        <FormRow
          id="firstname"
          value={form.firstname}
          placeholder="ชื่อ"
          onChange={onChange}
          disabled={!isEditing}
        />
        <FormRow
          id="lastname"
          value={form.lastname}
          placeholder="นามสกุล"
          onChange={onChange}
          disabled={!isEditing}
        />
        <FormRow
          id="studentid"
          value={form.studentid}
          placeholder="รหัสนิสิต"
          onChange={onChange}
          disabled={!isEditing}
        />
        <FormRow
          id="email"
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={onChange}
          disabled={!isEditing}
        />

        
        <div
          style={{
            width: "100%",
            maxWidth: 520,
            marginTop: 8,
            display: "flex",
            justifyContent: "flex-start",
            gap: 12,
          }}
        >
          {!isEditing ? (
            <button
              onClick={() => {
                setIsEditing(true);
                setMessage("");
              }}
              style={btn("primary")}
              type="button"
            >
              แก้ไขข้อมูล
            </button>
          ) : (
            <button onClick={onSave} style={btn("success")} type="button">
              บันทึก
            </button>
          )}

          <button onClick={onLogout} style={btn("danger")} type="button">
            Log Out
          </button>
        </div>

        <div
          style={{
            maxWidth: 520,
            width: "100%",
            marginTop: 10,
            fontWeight: 700,
            color: "#1f8f2e",
          }}
        >
          {message}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .row-input { height: 42px !important; }
        }
      `}</style>
    </div>
  );
}


function FormRow({ id, value, placeholder, onChange, disabled, type = "text" }) {
  return (
    <input
      className="row-input"
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      style={{
        width: "100%",
        maxWidth: 520,
        height: 48,
        borderRadius: 10,
        border: "0",
        background: "#dfdfe0",
        margin: "10px 0",
        boxShadow: "0 4px 12px rgba(0,0,0,.12) inset, 0 4px 10px rgba(0,0,0,.08)",
        padding: "0 14px",
        fontSize: 16,
        outline: "none",
      }}
    />
  );
}

function btn(variant) {
  const base = {
    border: 0,
    borderRadius: 12,
    padding: "10px 18px",
    fontWeight: 800,
    boxShadow: "0 6px 0 rgba(0,0,0,.2)",
    cursor: "pointer",
  };
  if (variant === "primary")
    return { ...base, background: "#343639ff", color: "#fff" };
  if (variant === "success")
    return { ...base, background: "#28a745", color: "#fff" };
  if (variant === "danger")
    return {
      ...base,
      background: "#8f2a2a",
      color: "#fff",
    };
  return base;
}
