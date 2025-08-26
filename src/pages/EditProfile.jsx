import { useState, useEffect } from "react";

export default function EditProfile() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    studentid: "",
    email: "",
    faculty: "",
    major: "",
    profileImage: "https://via.placeholder.com/150?text=No+Image",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userInfo")) || {};
    setUserInfo((prev) => ({ ...prev, ...stored }));
  }, []);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUserInfo({ ...userInfo, profileImage: ev.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setEditing(false);
    setMessage("บันทึกข้อมูลเรียบร้อยแล้ว!");
  };

  return (
    <div className="container">
      <div className="header">EDIT PROFILE</div>

      <div className="profile-image-box">
        <img src={userInfo.profileImage} alt="Profile" />
      </div>
      {editing && (
        <input type="file" accept="image/*" onChange={handleImageChange} />
      )}

      <form>
        <input
          type="text"
          id="firstname"
          value={userInfo.firstname}
          placeholder="ชื่อ"
          onChange={handleChange}
          disabled={!editing}
        />
        <input
          type="text"
          id="lastname"
          value={userInfo.lastname}
          placeholder="นามสกุล"
          onChange={handleChange}
          disabled={!editing}
        />
        <input
          type="text"
          id="studentid"
          value={userInfo.studentid}
          placeholder="รหัสนิสิต"
          onChange={handleChange}
          disabled={!editing}
        />
        <input
          type="email"
          id="email"
          value={userInfo.email}
          placeholder="Email"
          onChange={handleChange}
          disabled={!editing}
        />
        <input
          type="text"
          id="faculty"
          value={userInfo.faculty}
          placeholder="คณะ"
          onChange={handleChange}
          disabled={!editing}
        />
        <input
          type="text"
          id="major"
          value={userInfo.major}
          placeholder="สาขา"
          onChange={handleChange}
          disabled={!editing}
        />

        {!editing ? (
          <button type="button" onClick={() => setEditing(true)}>
            แก้ไขข้อมูล
          </button>
        ) : (
          <button type="button" onClick={handleSave}>
            บันทึก
          </button>
        )}
      </form>

      <div>
        <button onClick={() => (window.location.href = "/")}>
          กลับไปหน้า Home
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            window.location.href = "/login";
          }}
        >
          Log Out
        </button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}
