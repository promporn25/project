 import { Link, useNavigate } from "react-router-dom";
 import { useState } from "react";

 export default function StudyPlans() {
 const nav = useNavigate();
 const [openBlock1, setOpenBlock1] = useState(false);
 const [openBlock2, setOpenBlock2] = useState(false);
 return (
 <div className="page">
 <style>{`
 /* Layout base */
 .page {
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 background:#f5f7fa;
 color:#1a2433;
 min-height:100vh;
 padding:80px 16px 60px;
 padding-top: 80px;
 }

 /* Top pill header */
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
 .home-btn:hover { transform: translateY(-1px); background:#323842; }

 .home-icon {
 width: 20px; height: 20px; display:block;
 -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z"/></svg>') no-repeat center / contain;
 mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z"/></svg>') no-repeat center / contain;
 background-color:#ffffff;
 }

 .bar-title {
 flex:1;
 text-align:center;
 color:#fff;
 font-weight:900;
 font-size:18px;
 }

 /* Title */
 .title {
 max-width: 980px;
 margin: 8px auto 22px;
 font-size: 22px;
 font-weight: 700;
 color: #22324d;
 text-align: left;
 }

 /* Major panel */
 .panel {
 max-width: 980px;
 margin: 0 auto;
 background: #eef1f5;
 border: 1px solid #d7dde7;
 border-radius: 18px;
 padding: 18px 16px;
 box-shadow: 0 10px 26px rgba(31,61,94,.08);
 }

 /* Main section details (3.1.4.1 / 3.1.4.2)*/
 details.block {
 background: #ffffff !important;
 border: 1px solid #dbe3ee;
 border-radius: 14px;
 padding: 10px 12px;
 margin: 10px 6px 16px;
 }
 details.block[open] { box-shadow: 0 8px 18px rgba(47,86,135,.08); }
 summary.block {
 list-style: none; cursor: pointer; user-select: none;
 font-weight: 700; color:#13294b; font-size: 18px;
 display: flex; align-items: center; gap: 10px;
 }
 summary.block::-webkit-details-marker { display:none; }
 summary.block::before {
 content: '▸'; color:#0d47a1; font-size: 18px;
 transition: transform .18s ease;
 }
 details.block[open] > summary.block::before { transform: rotate(90deg); }

 /* Year rows – blue bars */
 details.year {
 margin: 10px 0;
 background: #ffffff !important; /* กันไม่ให้พื้นหลังขึ้นชมพู */
 border-radius: 12px;
 border: 1px solid #e6e9f2;
 padding: 8px; /* ให้มีช่องว่างรอบปุ่มสีน้ำเงิน */
 }
 summary.year {
 list-style:none; cursor:pointer; user-select:none;
 background:#123a7a;
 color:#fff; font-weight:600; font-size:16px;
 border-radius: 10px;
 padding: 14px 16px;
 display:flex; align-items:center; gap:12px;
 border:1px solid #0f2f63;
 box-shadow: 0 3px 8px rgba(10,30,60,.25);
 transition: filter .15s ease, transform .06s ease;
 }
 summary.year::-webkit-details-marker{display:none;}
 summary.year:active{ transform: translateY(1px); }
 summary.year::before{
 content:'▶';
 color: currentColor;
 display:inline-block;
 transform-origin:center;
 transition: transform .18s ease;
 opacity:.95;
 }
 details.year[open] > summary.year::before{ transform: rotate(90deg); }

 /* Inside a year */
 .year-body {
 background:#f7f9fc;
 border:1px solid #e2e8f2;
 border-radius:10px;
 padding:14px;
 margin:10px 2px 4px 2px;
 }
 .semester-title {
 font-weight: 700;
 margin: 12px 0 8px;
 color:#0a0a0a;
 }
 .credit-info { font-size:13px; color:#6a7484; font-style: italic; }

 table {
 width:100%; border-collapse: collapse; margin: 6px 0 16px;
 background:#fff; border:1px solid #e2e7ef; border-radius:8px; overflow:hidden;
 }
 th, td { padding: 10px 12px; border-bottom:1px solid #e8edf5; font-size:14px; }
 th { background:#f0f4f9; color:#2c3e57; font-weight:700; }
 tbody tr:nth-child(even){ background:#fafcff; }
 tfoot td { background:#e9f0fb; font-weight:700; text-align:right; }

 /* Back button bottom */
 .back-wrap { text-align:center; margin-top: 26px; }
 .back-button {
 display:inline-block; padding: 12px 22px; border-radius:10px;
 background:#0d47a1; color:#fff; text-decoration:none; font-weight:700;
 border:1px solid #0b3a85;
 }
 .back-button:hover{ filter:brightness(.95); }
 `}</style>

 <div className="topbar">
 <button
 className="home-btn"
 onClick={() => nav("/frist")}
 aria-label="ไปหน้า Frist"
 >
 <span className="home-icon" />
 </button>
 <div className="bar-title">CURRICULUM OVERVIEW 
 </div>
 <div className="toggle-dot" />
 </div>

 <h1 className="title">
 3.1.4 แผนการศึกษาหลักสูตร วศ.บ. วิศวกรรมคอมพิวเตอร์ (ปรับปรุง พ.ศ. 2565)
 </h1>

 <div className="panel">

 <details className="block" >
 <summary className="block">3.1.4.1 แผนการศึกษาสำหรับนิสิตที่ไม่เรียนสหกิจศึกษา</summary>

 
 <details className="year">
 <summary className="year">Freshman (ปี 1)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204113</td><td>คอมพิวเตอร์และการโปรแกรมสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (2-3-6)</td></tr>
 <tr><td>01417167</td><td>คณิตศาสตร์วิศวกรรม I</td><td>3 (3-0-6)</td></tr>
 <tr><td>01420111</td><td>ฟิสิกส์ทั่วไป I</td><td>3 (3-0-6)</td></tr>
 <tr><td>01420113</td><td>ปฏิบัติการฟิสิกส์ I</td><td>1 (0-3-2)</td></tr>
 <tr><td>01999111</td><td>ศาสตร์แห่งแผ่นดิน</td><td>2 (2-0-4)</td></tr>
 <tr><td>--</td><td>วิชาภาษาไทย</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระอยู่ดีมีสุข</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>21 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204114</td><td>การพัฒนาฮาร์ดแวร์คอมพิวเตอร์เบื้องต้น</td><td>3 (2-3-6)</td></tr>
 <tr><td>01208111</td><td>การเขียนแบบวิศวกรรม</td><td>3 (2-3-6)</td></tr>
 <tr><td>01403114</td><td>ปฏิบัติการหลักมูลเคมีทั่วไป</td><td>1 (0-3-2)</td></tr>
 <tr><td>01403117</td><td>หลักมูลเคมีทั่วไป</td><td>3 (3-0-6)</td></tr>
 <tr><td>01417168</td><td>คณิตศาสตร์วิศวกรรม II</td><td>3 (3-0-6)</td></tr>
 <tr><td>01175xxx</td><td>กิจกรรมพลศึกษา</td><td>1 (0-2-1)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระศาสตร์แห่งผู้ประกอบการ</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป วิชาสารสนเทศ/คอมพิวเตอร์</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Sophomore (ปี 2)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204211</td><td>คณิตศาสตร์เต็มหน่วยและทฤษฎีการคำนวณ</td><td>4 (4-0-8)</td></tr>
 <tr><td>01204212</td><td>แบบชนิดข้อมูลนามธรรมและการแก้ปัญหา</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204215</td><td>คณิตศาสตร์พื้นฐานสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204216</td><td>ความน่าจะเป็นและสถิติสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204222</td><td>การออกแบบระบบดิจิทัล</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204224</td><td>ปฏิบัติการวงจรตรรก</td><td>1 (0-3-2)</td></tr>
 <tr><td>01205211</td><td>การวิเคราะห์วงจรไฟฟ้า I</td><td>3 (3-0-6)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต (19-3-40)</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204214</td><td>ปฏิบัติการการแก้ปัญหา</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204223</td><td>การฝึกปฏิบัติทางวิศวกรรมคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204225</td><td>สถาปัตยกรรมและองค์ประกอบคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204271</td><td>วิศวกรรมคอมพิวเตอร์เบื้องต้น</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204313</td><td>การวิเคราะห์และออกแบบขั้นตอนวิธี</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204351</td><td>ระบบฐานข้อมูล</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204371</td><td>เทคนิคการแปลงในการประมวลผลสัญญาณ</td><td>3 (3-0-6)</td></tr>
 <tr><td>01205242</td><td>วงจรและระบบอิเล็กทรอนิกส์ I</td><td>3 (3-0-6)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>18 หน่วยกิต (15-9-36)</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Junior (ปี 3)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204324</td><td>ปฏิบัติการระบบคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204325</td><td>การสื่อสารข้อมูลและเครือข่ายคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204332</td><td>ระบบปฏิบัติการ</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204341</td><td>วิศวกรรมซอฟต์แวร์</td><td>4 (3-3-8)</td></tr>
 <tr><td>--</td><td>ภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระอยู่ดีมีสุข</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204322</td><td>ระบบฝังตัว</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204323</td><td>ปฏิบัติการอิเล็กทรอนิกส์สำหรับวิศวกรคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204391</td><td>ปฏิบัติการพัฒนาทักษะอาชีพและสังคม</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204421</td><td>เครือข่ายคอมพิวเตอร์</td><td>3 (2-3-6)</td></tr>
 <tr><td>01204437</td><td>ความปลอดภัยระบบคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเลือกเสรี</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>17 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Senior (ปี 4)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204399</td><td>การฝึกงาน</td><td>1</td></tr>
 <tr><td>01204495</td><td>การเตรียมงานโครงงานวิศวกรรมคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>--</td><td>วิชาภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>6 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204499</td><td>โครงงานวิศวกรรมคอมพิวเตอร์</td><td>2 (0-6-3)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มวิชาสาระสุนทรียศาสตร์</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเลือกเสรี</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>
 </details>

 <details className="block">
 <summary className="block">3.1.4.2 แผนการศึกษาสำหรับนิสิตที่เลือกเรียนสหกิจศึกษา</summary>

 <details className="year">
 <summary className="year">Freshman (ปี 1)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204113</td><td>คอมพิวเตอร์และการโปรแกรมสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (2-3-6)</td></tr>
 <tr><td>01417167</td><td>คณิตศาสตร์วิศวกรรม I</td><td>3 (3-0-6)</td></tr>
 <tr><td>01420111</td><td>ฟิสิกส์ทั่วไป I</td><td>3 (3-0-6)</td></tr>
 <tr><td>01420113</td><td>ปฏิบัติการฟิสิกส์ I</td><td>1 (0-3-2)</td></tr>
 <tr><td>01999111</td><td>ศาสตร์แห่งแผ่นดิน</td><td>2 (2-0-4)</td></tr>
 <tr><td>--</td><td>วิชาภาษาไทย</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระอยู่ดีมีสุข</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>21 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204114</td><td>การพัฒนาฮาร์ดแวร์คอมพิวเตอร์เบื้องต้น</td><td>3 (2-3-6)</td></tr>
 <tr><td>01208111</td><td>การเขียนแบบวิศวกรรม</td><td>3 (2-3-6)</td></tr>
 <tr><td>01403114</td><td>ปฏิบัติการหลักมูลเคมีทั่วไป</td><td>1 (0-3-2)</td></tr>
 <tr><td>01403117</td><td>หลักมูลเคมีทั่วไป</td><td>3 (3-0-6)</td></tr>
 <tr><td>01417168</td><td>คณิตศาสตร์วิศวกรรม II</td><td>3 (3-0-6)</td></tr>
 <tr><td>01175xxx</td><td>กิจกรรมพลศึกษา</td><td>1 (0-2-1)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระศาสตร์แห่งผู้ประกอบการ</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป วิชาสารสนเทศ/คอมพิวเตอร์</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Sophomore (ปี 2)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204211</td><td>คณิตศาสตร์เต็มหน่วยและทฤษฎีการคำนวณ</td><td>4 (4-0-8)</td></tr>
 <tr><td>01204212</td><td>แบบชนิดข้อมูลนามธรรมและการแก้ปัญหา</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204215</td><td>คณิตศาสตร์พื้นฐานสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204216</td><td>ความน่าจะเป็นและสถิติสำหรับวิศวกรคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204222</td><td>การออกแบบระบบดิจิทัล</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204224</td><td>ปฏิบัติการวงจรตรรก</td><td>1 (0-3-2)</td></tr>
 <tr><td>01205211</td><td>การวิเคราะห์วงจรไฟฟ้า I</td><td>3 (3-0-6)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต (19-3-40)</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204214</td><td>ปฏิบัติการการแก้ปัญหา</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204223</td><td>การฝึกปฏิบัติทางวิศวกรรมคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204225</td><td>สถาปัตยกรรมและองค์ประกอบคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204271</td><td>วิศวกรรมคอมพิวเตอร์เบื้องต้น</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204313</td><td>การวิเคราะห์และออกแบบขั้นตอนวิธี</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204351</td><td>ระบบฐานข้อมูล</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204371</td><td>เทคนิคการแปลงในการประมวลผลสัญญาณ</td><td>3 (3-0-6)</td></tr>
 <tr><td>01205242</td><td>วงจรและระบบอิเล็กทรอนิกส์ I</td><td>3 (3-0-6)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>18 หน่วยกิต (15-9-36)</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Junior (ปี 3)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204324</td><td>ปฏิบัติการระบบคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204325</td><td>การสื่อสารข้อมูลและเครือข่ายคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204332</td><td>ระบบปฏิบัติการ</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204341</td><td>วิศวกรรมซอฟต์แวร์</td><td>4 (3-3-8)</td></tr>
 <tr><td>--</td><td>ภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไป กลุ่มสาระอยู่ดีมีสุข</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204322</td><td>ระบบฝังตัว</td><td>3 (3-0-6)</td></tr>
 <tr><td>01204323</td><td>ปฏิบัติการอิเล็กทรอนิกส์สำหรับวิศวกรคอมพิวเตอร์</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204391</td><td>ปฏิบัติการพัฒนาทักษะอาชีพและสังคม</td><td>1 (0-3-2)</td></tr>
 <tr><td>01204421</td><td>เครือข่ายคอมพิวเตอร์</td><td>3 (2-3-6)</td></tr>
 <tr><td>01204437</td><td>ความปลอดภัยระบบคอมพิวเตอร์</td><td>3 (3-0-6)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเลือกเสรี</td><td>3 (- - -)</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>17 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>

 <details className="year">
 <summary className="year">Senior (ปี 4)</summary>
 <div className="year-body">
 <div className="semester-title">ภาคการศึกษาที่ 1</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204499</td><td>โครงงานวิศวกรรมคอมพิวเตอร์</td><td>2 (0-6-3)</td></tr>
 <tr><td>--</td><td>วิชาภาษาต่างประเทศ 1 ภาษา</td><td>3 (- - -)</td></tr>
 <tr><td>--</td><td>วิชาเฉพาะเลือก</td><td>6(- - -)</td></tr>
 <tr><td>--</td><td>วิชาศึกษาทั่วไปกลุ่มวิชาสาระสุนทรียศาสตร์</td><td>3 (- - - )</td></tr>
 <tr><td>--</td><td>วิชาเลือกเสรี</td><td>3 (- - - )</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต</td></tr></tfoot>
 </table>

 <div className="semester-title">ภาคการศึกษาที่ 2</div>
 <table>
 <thead>
 <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
 </thead>
 <tbody>
 <tr><td>01204490</td><td>สหกิจศึกษา</td><td>7</td></tr>
 </tbody>
 <tfoot><tr><td colSpan={2}>รวม</td><td>7 หน่วยกิต</td></tr></tfoot>
 </table>
 </div>
 </details>
 </details>
 </div>
 </div>
 );
 }