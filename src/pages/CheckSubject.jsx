import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ------ DATA & UTIL ------ */
const GROUPS = {
 /* ศึกษาทั่วไป */
 healthyGroup: 7,
 entrepreneurGroup: 3,
 languageGroup: 15,
 civicGroup: 2,
 artGroup: 3,
 /* ศึกษาทั่วไป */
 appliedTechGroup: 3,
 softwareMethodsGroup: 17,
 infrastructureGroup: 13,
 hardwareGroup: 16,
 professionalSkillGroup: 5,
 scienceMathGroup: 17,
 engineeringGroup: 15,
 electiveSpecificGroup: 16,
 /*วิชาเสรี*/
 freeElectiveGroup: 6 
};

function emptyRow() {
 return { code: "", name: "", gradeNum: "", credit: "", gradeLetter: "-" };
}

function toLetter(grade) {
 const g = parseFloat(grade);
 if (Number.isNaN(g)) return "-";
 if (g >= 3.7) return "A";
 if (g >= 3.3) return "B+";
 if (g >= 2.7) return "B";
 if (g >= 2.3) return "C+";
 if (g >= 1.7) return "C";
 if (g >= 1.3) return "D+";
 if (g >= 1.0) return "D";
 return "F";
}

/* วงแหวนเปอร์เซ็นต์ด้วย CSS */
function Donut({ percent = 0, label = "", sub = "" }) {
 const p = Math.max(0, Math.min(100, Number(percent) || 0));
 const style = {
 background: `conic-gradient(var(--ring) ${p}%, #eaecf2 ${p}% 100%)`
 };
 return (
 <div className="donut">
 <div className="donut-ring" style={style}>
 <div className="donut-hole">
 <div className="donut-percent">{p.toFixed(0)}%</div>
 </div>
 </div>
 <div className="donut-text">
 <div className="donut-label">{label}</div>
 <div className="donut-sub">{sub}</div>
 </div>
 </div>
 );
}

/* ------ ตารางแต่ละกลุ่ม ------ */
function GroupTable({ id, title, required, rows, setRows }) {
 const addRow = () => setRows([...rows, emptyRow()]);
 const onChange = (idx, key, value) => {
 const next = [...rows];
 next[idx] = { ...next[idx], [key]: value };
 if (key === "gradeNum") next[idx].gradeLetter = toLetter(value);
 setRows(next);
 };

 const { totalCredits, gpa, remaining } = useMemo(() => {
 let credits = 0,
 weighted = 0;
 rows.forEach((r) => {
 const g = parseFloat(r.gradeNum);
 const c = parseFloat(r.credit);
 if (!Number.isNaN(g) && !Number.isNaN(c) && c > 0) {
 credits += c;
 weighted += g * c;
 }
 });
 const rem = Math.max(0, required - credits);
 return {
 totalCredits: credits,
 remaining: rem,
 gpa: credits > 0 ? (weighted / credits).toFixed(2) : "-"
 };
 }, [rows, required]);

 return (
 <details className="group-details">
 <summary className="group-summary">
 <span className="play-icon" /> {title} ไม่น้อยกว่า {required} หน่วยกิต
 </summary>

 <div className="group-inner">
 <table className="tbl">
 <thead>
 <tr>
 <th>รหัสวิชา</th>
 <th>ชื่อวิชา</th>
 <th>เกรด</th>
 <th>หน่วยกิต</th>
 <th>ระดับคะแนน</th>
 </tr>
 </thead>
 <tbody>
 {rows.map((r, i) => (
 <tr key={i}>
 <td>
 <input
 type="text"
 value={r.code}
 onChange={(e) => onChange(i, "code", e.target.value)}
 placeholder="รหัสวิชา"
 />
 </td>
 <td>
 <input
 type="text"
 value={r.name}
 onChange={(e) => onChange(i, "name", e.target.value)}
 placeholder="ชื่อวิชา"
 />
 </td>
 <td>
 <input
 type="number"
 step="0.5"
 min="0"
 max="4"
 value={r.gradeNum}
 onChange={(e) => onChange(i, "gradeNum", e.target.value)}
 placeholder="เกรด"
 />
 </td>
 <td>
 <input
 type="number"
 step="0.5"
 min="0"
 value={r.credit}
 onChange={(e) => onChange(i, "credit", e.target.value)}
 placeholder="หน่วยกิต"
 />
 </td>
 <td className="gradeValue">{r.gradeLetter}</td>
 </tr>
 ))}
 </tbody>
 </table>

 <div className="actions-row">
 <button className="btn" onClick={addRow}>
 + เพิ่มแถว
 </button>
 <div className="summary-box">
 หน่วยกิตรวม: <b>{totalCredits.toFixed(1)}</b> หน่วยกิต&nbsp;|&nbsp;
 หน่วยกิตที่เหลือ: <b>{remaining.toFixed(1)}</b> หน่วยกิต&nbsp;|&nbsp;
 GPA เฉลี่ย: <b>{gpa}</b>
 </div>
 </div>
 </div>
 </details>
 );
}

/* ------ หน้า CheckSubject ------ */
export default function CheckSubject() {
 const nav = useNavigate();

 /* state */
 const [rows, setRows] = useState(
 Object.fromEntries(Object.keys(GROUPS).map((k) => [k, [emptyRow()]]))
 );
 const setGroupRows = (id) => (newRows) =>
 setRows((prev) => ({ ...prev, [id]: newRows }));

 /* รวมทั้งหมด */
 const total = useMemo(() => {
 let totalRequired = 0,
 totalEarned = 0,
 totalWeighted = 0;
 Object.entries(GROUPS).forEach(([id, req]) => {
 totalRequired += req;
 let groupCredits = 0,
 groupWeighted = 0;
 rows[id].forEach((r) => {
 const g = parseFloat(r.gradeNum);
 const c = parseFloat(r.credit);
 if (!Number.isNaN(g) && !Number.isNaN(c) && c > 0) {
 groupCredits += c;
 groupWeighted += g * c;
 }
 });
 totalEarned += groupCredits;
 totalWeighted += groupWeighted;
 });
 const totalRemaining = Math.max(0, totalRequired - totalEarned);
 const totalGPA =
 totalEarned > 0 ? (totalWeighted / totalEarned).toFixed(2) : "-";
 return {
 required: totalRequired.toFixed(1),
 earned: totalEarned.toFixed(1),
 remaining: totalRemaining.toFixed(1),
 gpa: totalGPA
 };
 }, [rows]);

 /* เปอร์เซ็นต์โดนัท */
 const earnedPct = Math.min(
 100,
 ((parseFloat(total.earned) || 0) /
 (parseFloat(total.required || 1) || 1)) *
 100
 );
 const remainingPct = Math.min(
 100,
 ((parseFloat(total.remaining) || 0) /
 (parseFloat(total.required || 1) || 1)) *
 100
 );
 const gpaPct = total.gpa === "-" ? 0 : (parseFloat(total.gpa) / 4) * 100;

 return (
 <div className="cs-page">
 {/* ===== CSS แบบจัดบล็อก ===== */}
 <style>{`
 /* ===== Layout Base ===== */
 .cs-page {
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background:#f5f7fa;
 color:#1a2433;
 min-height:100vh;
 padding:80px 16px 60px;
 padding-top: 130px;
 }

 /* ===== Top Bar ===== */
 .topbar {
 max-width:980px;
 margin:0 auto 24px;
 background:#101316;
 border-radius:999px;
 height:56px;
 display:flex;
 align-items:center;
 justify-content:flex-start;
 padding:0 14px;
 box-shadow:0 6px 14px rgba(0,0,0,.18);
 position: fixed; /* ทำให้ติดด้านบน */
 top: 0px; /* ระยะจากด้านบน */
 left: 50%; /* เอาไปอยู่กลาง */
 transform: translateX(-50%); /* จัดให้กึ่งกลาง */
 z-index: 9999; /* ให้ทับ element อื่น */
 width: calc(100% - 32px); /* กันบีบตอนเล็ก */;
 }

 .home-btn {
 display:inline-flex;
 align-items:center;
 justify-content:center;
 width:42px;
 height:42px;
 border-radius:999px;
 background:#2a2f36;
 color:#fff;
 text-decoration:none;
 border:2px solid #3a4048;
 transition:transform .15s ease, background .2s ease;
 margin-left:0;
 }
 .home-btn:hover{ 
 transform:translateY(-1px); 
 background:#323842; 
 }
 .home-icon {
 width:20px;
 height:20px;
 display:block;
 background-color:#ffffff;-webkit-mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z"/></svg>') no-repeat center/contain;mask:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z"/></svg>') no-repeat center/contain;
 }

 .bar-title {
 flex:1;
 text-align:center;
 color:#fff;
 font-weight:900;
 font-size:18px;
 }

 /* ===== Title ===== */
 .title {
 max-width:980px;
 margin:8px auto 22px;
 font-size:22px;
 font-weight:700;
 color:#22324d;
 text-align:left;
 }

 /* ===== Layout Grid ===== */
 .cs-grid {
 max-width:980px;
 margin:0 auto;
 display:grid;
 grid-template-columns:320px 1fr;
 gap:18px;}

 /* ===== Left Summary Card ===== */
 .summary-card {
 background:#eef1f5;
 border:1px solid #d7dde7;
 border-radius:18px;
 padding:18px;box-shadow:0 10px 26px rgba(31,61,94,.08);
 position: sticky;
 top: 110px;
 height: fit-content;
 }

 .summary-title {
 font-size:18px;
 font-weight:800;
 margin-bottom:10px;
 color:#2a3347;
 }

 /* ===== Donut ===== */
 .donut{
 display:flex;
 align-items:center;
 gap:12px;
 margin:14px 0;
 }

 .donut-ring {
 --ring:#3d74ff;
 width:92px;
 height:92px;
 border-radius:50%;
 display:grid;
 place-items:center;
 }

 .donut-hole {
 width:66px;
 height:66px;
 border-radius:50%;
 background:#fff;
 display:grid;
 place-items:center;
 box-shadow:inset 0 0 0 10px #f1f3f9;
 }

 .donut-percent {
 font-weight:800;
 font-size:18px;
 color:#1f2a44;
 }

 .donut-label
 {
 font-weight:700;
 color:#2b3954;
 }

 .donut-sub
 {
 font-size:12px;
 color:#667086;
 }

 /* ===== Right Panel ===== */
 .right-panel {
 background:#eef1f5;
 border:1px solid #d7dde7;
 border-radius:18px;
 padding:16px;
 box-shadow:0 10px 26px rgba(31,61,94,.08);
 }

 /* ===== Section Details ===== */
 .section-details {
 background:#fff;
 border:1px solid #dbe3ee;
 border-radius:14px;
 padding:10px 12px;
 margin:10px 6px 16px;
 }

 .section-details[open] 
 {
 box-shadow:0 8px 18px rgba(47,86,135,.08);
 }

 .section-summary {
 list-style:none;
 cursor:pointer;
 user-select:none;
 font-weight:700;
 color:#13294b;
 font-size:18px;
 display:flex;
 align-items:center;
 gap:10px;
 }

 .section-summary::-webkit-details-marker {
 display:none;
 }

 .section-details>.section-summary::before {
 content:'▸';
 color:#0d47a1;
 font-size:18px;
 transition:transform .18s ease;
 }

 .section-details[open]>.section-summary::before {
 transform:rotate(90deg);
 }

 /* ===== Group Table ===== */
 .group-details {
 margin:10px 0;
 background:#ffffff !important;
 border-radius:12px;
 border:1px solid #e6e9f2;padding:8px;
 }

 .group-summary {
 list-style:none;
 cursor:pointer;
 user-select:none;
 background:#123a7a;
 color:#fff;
 font-weight:600;
 font-size:16px;
 border-radius:10px;
 padding:14px 16px;
 display:flex;
 align-items:center;
 gap:12px;
 border:1px solid #0f2f63;box-shadow:0 3px 8px rgba(10,30,60,.25);
 }

 .group-summary::before {
 content:'▶';
 color:currentColor;
 display:inline-block;
 transform-origin:center;
 transition:transform .18s ease;
 opacity:.95;
 }
 .group-details[open] .group-summary::before {
 transform:rotate(90deg);
 }
 .group-inner {
 background:#f7f9fc;
 border:1px solid #e2e8f2;
 border-radius:10px;padding:14px;
 margin-top:10px;
 }

 /* ===== Table ===== */
 .tbl {
 width:100%;
 border-collapse:collapse;
 background:#fff;
 border:1px solid #e2e7ef;
 border-radius:8px;
 overflow:hidden;
 margin:6px 0 16px;
 }

 .tbl th,.tbl td {
 padding:10px 12px;
 border-bottom:1px solid #e8edf5;
 font-size:14px;
 text-align:left;
 }

 .tbl th {
 background:#f0f4f9;
 color:#2c3e57;
 font-weight:700;
 }

 .tbl input {
 background:#ffffff;
 color:#1a2433;
 font-weight:600;
 padding:8px 10px;
 border:1px solid #cfd7e6;
 border-radius:6px;
 }

 .tbl td:nth-child(3) input {
 width:80px;
 text-align:center;
 }

 .tbl td:nth-child(4) input {
 width:90px;
 text-align:center;
 }

 .gradeValue {
 font-weight:700;
 }

 /* ===== Summary Box ===== */
 .summary-box {
 background:#f0f2f5;
 color:#333;
 padding:10px 12px;
 border-radius:8px;
 border:1px solid #dbe3ee;
 font-size:14px;
 }

 /* ===== Buttons ===== */
 .actions-row {
 display:flex;
 align-items:center;
 justify-content:space-between;
 gap:12px;
 margin-top:10px;
 flex-wrap:wrap;
 }

 .btn {
 background:#0d47a1;
 color:#fff;
 border:1px solid #0b3a85;border-radius:10px;
 padding:10px 16px;
 font-weight:700;
 cursor:pointer;
 }

 .btn:hover {
 filter:brightness(.95);
 }

 /* ===== Total Card ===== */
 .total-card { 
 margin-top:16px;
 background:#fff;
 border:1px solid #dbe3ee;
 border-radius:14px;
 padding:14px;
 }

 @media (max-width:960px){.cs-grid{grid-template-columns:1fr;}}
 `}</style>

 {/* ---------- Top bar ---------- */}
 <div className="topbar">
 <button
 className="home-btn"
 onClick={() => nav("/frist")}
 aria-label="ไปหน้า Frist"
 >
 <span className="home-icon" />
 </button>
 <div className="bar-title">CHECK CURRICULUM COURSES</div>
 <div className="toggle-dot" />
 </div>

 {/* Title ภาษาไทย */}
 <h1 className="title" 
 style={{
 textAlign: 'center',
 position: 'fixed',
 top: '55px', // อยู่ใต้ Topbar
 left: '50%',
 transform: 'translateX(-50%)',
 width: '100%',
 maxWidth: '980px',
 background: '#f5f7fa',
 padding: '10px 0',
 margin: 0,
 zIndex: 999
 }} >
 ตรวจสอบรายวิชาตามหลักสูตร
 </h1>

 {/* ---------- Main grid ---------- */}
 <div className="cs-grid">
 {/* LEFT SUMMARY CARD */}
 <aside className="summary-card">
 <div className="summary-title">GPA & Credit Summary</div>
 <Donut percent={earnedPct} label="Total Earned Credits" sub={`: ${total.earned} credits`} />
 <Donut percent={remainingPct} label="Remaining Credits" sub={`: ${total.remaining} credits / ${total.required} credits`} />
 <Donut percent={gpaPct} label="Cumulative GPA" sub={`GPA : ${total.gpa === "-" ? "—" : total.gpa}`} />
 </aside>

 {/* RIGHT MAIN PANEL */}
 <section className="right-panel">
 {/* หมวดศึกษาทั่วไป */}
 <details className="section-details">
 <summary className="section-summary">
 หมวดศึกษาทั่วไปไม่น้อยกว่า 30 หน่วยกิต
 </summary>
 <GroupTable id="healthyGroup" 
 title="กลุ่มสาระอยู่ดีมีสุข" 
 required={GROUPS.healthyGroup} 
 rows={rows.healthyGroup} 
 setRows={setGroupRows("healthyGroup")} />

 <GroupTable id="entrepreneurGroup" 
 title="กลุ่มสาระศาสตร์แห่งผู้ประกอบการ" 
 required={GROUPS.entrepreneurGroup} 
 rows={rows.entrepreneurGroup} 
 setRows={setGroupRows("entrepreneurGroup")} />

 <GroupTable id="languageGroup" 
 title="กลุ่มสาระภาษากับการสื่อสาร" 
 required={GROUPS.languageGroup} 
 rows={rows.languageGroup} 
 setRows={setGroupRows("languageGroup")} />

 <GroupTable id="civicGroup" 
 title="กลุ่มสาระพลเมืองไทยและพลเมืองโลก" 
 required={GROUPS.civicGroup} 
 rows={rows.civicGroup} 
 setRows={setGroupRows("civicGroup")} />

 <GroupTable id="artGroup" 
 title="กลุ่มสาระสุนทรียศาสตร์" 
 required={GROUPS.artGroup} 
 rows={rows.artGroup} 
 setRows={setGroupRows("artGroup")} />
 </details>

 {/* ===== หมวดวิชาเฉพาะ ===== */}
 <details className="section-details" style={{ marginTop: 12 }}>
 <summary className="section-summary">
 หมวดวิชาเฉพาะ ไม่น้อยกว่า 102 หน่วยกิต
 </summary>
 <GroupTable id="appliedTechGroup" 
 title="กลุ่มเทคโนโลยีเพื่องานประยุกต์" 
 required={GROUPS.appliedTechGroup} 
 rows={rows.appliedTechGroup} 
 setRows={setGroupRows("appliedTechGroup")} />
 
 <GroupTable id="softwareMethodsGroup" 
 title="กลุ่มเทคโนโลยีและวิธีทางซอฟต์แวร์" 
 required={GROUPS.softwareMethodsGroup} 
 rows={rows.softwareMethodsGroup} 
 setRows={setGroupRows("softwareMethodsGroup")} />

 <GroupTable id="infrastructureGroup" 
 title="กลุ่มโครงสร้างพื้นฐานของระบบ" 
 required={GROUPS.infrastructureGroup} 
 rows={rows.infrastructureGroup} 
 setRows={setGroupRows("infrastructureGroup")} />
 
 <GroupTable id="hardwareGroup" 
 title="กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์" 
 required={GROUPS.hardwareGroup} 
 rows={rows.hardwareGroup} 
 setRows={setGroupRows("hardwareGroup")} />

 <GroupTable id="professionalSkillGroup" 
 title="กลุ่มทักษะวิชาชีพและจรรยาบรรณ" 
 required={GROUPS.professionalSkillGroup} 
 rows={rows.professionalSkillGroup} 
 setRows={setGroupRows("professionalSkillGroup")} />

 <GroupTable id="scienceMathGroup" 
 title="วิชาแกนทางวิทยาศาสตร์และคณิตศาสตร์" 
 required={GROUPS.scienceMathGroup} 
 rows={rows.scienceMathGroup} 
 setRows={setGroupRows("scienceMathGroup")} />

 <GroupTable id="engineeringGroup" 
 title="วิชาแกนทางวิศวกรรม" 
 required={GROUPS.engineeringGroup} 
 rows={rows.engineeringGroup} 
 setRows={setGroupRows("engineeringGroup")} />

 <GroupTable id="electiveSpecificGroup" 
 title="วิชาเฉพาะเลือก" 
 required={GROUPS.electiveSpecificGroup} 
 rows={rows.electiveSpecificGroup} 
 setRows={setGroupRows("electiveSpecificGroup")} />
 </details>

 {/* ===== หมวดวิชาเลือกเสรี ===== */}
 <details className="section-details" style={{ marginTop: 12 }}>
 <summary className="section-summary">
 หมวดวิชาเลือกเสรี ไม่น้อยกว่า 6 หน่วยกิต
 </summary>
 
 <GroupTable id="freeElectiveGroup"
 title="กลุ่มวิชาเลือกเสรี"
 required={GROUPS.freeElectiveGroup}
 rows={rows.freeElectiveGroup}
 setRows={setGroupRows("freeElectiveGroup")} />
</details>

 {/* ===== รวมทั้งหมด ===== */}
 <div className="total-card">
 <h2>สรุปหน่วยกิตและ GPA รวมทั้งหมด</h2>
 <p>หน่วยกิตสะสมทั้งหมด: <b>{total.earned}</b> หน่วยกิต</p>
 <p>หน่วยกิตที่ต้องเรียน: <b>{total.required}</b> หน่วยกิต</p>
 <p>หน่วยกิตที่เหลือทั้งหมด: <b>{total.remaining}</b> หน่วยกิต</p>
 <p>GPA เฉลี่ยรวม: <b>{total.gpa}</b></p>
 </div>
 </section>
 </div>
 </div>
 );
}