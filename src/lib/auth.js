export const getUser = () => {
  try { return JSON.parse(localStorage.getItem("userInfo")) || null; }
  catch { return null; }
};
export const isLoggedIn = () => !!getUser();

export const login = (email, password) => {
  const u = getUser();
  if (!u) return { ok:false, msg:"ไม่พบข้อมูลสมาชิก กรุณาสมัครสมาชิกก่อน" };
  if (u.email === email && u.password === password) return { ok:true };
  return { ok:false, msg:"อีเมลหรือรหัสผ่านไม่ถูกต้อง" };
};

export const logout = () => localStorage.removeItem("userInfo");

export const saveUser = (user) => {
  localStorage.setItem("userInfo", JSON.stringify(user));
};
