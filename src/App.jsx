import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CheckSubject from "./pages/CheckSubject.jsx";
import StudyPlans from "./pages/StudyPlans.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Frist from "./pages/Frist.jsx";   // ✅ เพิ่มหน้า First
import { isLoggedIn } from "./lib/auth.js";

export default function App() {
  const PrivateRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/home" replace />;
  };

  return (
    <Routes>
      {/* เปิดเว็บครั้งแรก → ไปที่ home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/check-subject"
        element={
          <PrivateRoute>
            <CheckSubject />
          </PrivateRoute>
        }
      />
      <Route
        path="/study-plans"
        element={
          <PrivateRoute>
            <StudyPlans />
          </PrivateRoute>
        }
      />
      <Route
        path="/info"
        element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }
      />

      {/* ✅ หน้า First หลัง login */}
      <Route
        path="/Frist"
        element={
          <PrivateRoute>
            <Frist />
          </PrivateRoute>
        }
      />

      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      {/* ไม่เจอ path → ไป home */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}