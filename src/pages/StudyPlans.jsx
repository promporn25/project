import { Link } from "react-router-dom";

export default function StudyPlans() {
  return (
    <div>
      {/* Inline styles scoped to this page */}
      <style>{`
        body { margin: 0; }
        .page {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9fbfc;
          color: #2c3e50;
          margin: 20px auto;
          max-width: 900px;
          line-height: 1.6;
          padding: 0 20px 40px;
        }
        h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
          color: #1a2a40;
        }
        details {
          margin-bottom: 25px;
          border: 1px solid #d1d9e6;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 2px 6px rgba(30, 60, 90, 0.05);
          padding: 15px 20px;
          transition: box-shadow 0.3s ease;
        }
        details[open] { box-shadow: 0 4px 12px rgba(58, 111, 163, 0.15); }
        summary {
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          padding: 8px 0;
          outline: none;
          user-select: none;
          color: #092144;
          list-style: none;
        }
        summary::-webkit-details-marker { display: none; }
        summary::before {
          content: '▶';
          display: inline-block;
          margin-right: 8px;
          transition: transform 0.2s ease;
          color: #0d47a1;
        }
        details[open] > summary::before { transform: rotate(90deg); }
        .semester-title {
          font-weight: 700;
          margin-top: 15px;
          margin-bottom: 10px;
          font-size: 17px;
          color: #34495e;
        }
        .credit-info {
          font-size: 14px;
          color: #555;
          margin-bottom: 8px;
          font-style: italic;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
          margin-bottom: 20px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        th, td {
          padding: 10px 12px;
          border: 1px solid #ddd;
          text-align: left;
          font-size: 14px;
        }
        th {
          background-color: #f0f4f7;
          font-weight: 600;
          color: #34495e;
        }
        tbody tr:nth-child(even) { background-color: #f9fbfc; }
        tfoot td {
          font-weight: 700;
          background-color: #e8eef3;
          text-align: right;
        }
        .back-button {
          display: inline-block;
          margin-top: 30px;
          padding: 12px 24px;
          background-color: #0d47a1;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .back-button:hover { background-color: #08306b; }
      `}</style>

      <div className="page">
        <h1>3.1.4 แผนการศึกษาหลักสูตร วศ.บ. วิศวกรรมคอมพิวเตอร์ (ปรับปรุง พ.ศ. 2565)</h1>

        <details open>
          <summary>3.1.4.1 แผนการศึกษาสำหรับนิสิตที่ไม่เรียนสหกิจศึกษา</summary>

          <details>
            <summary>ปี 1</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>21 หน่วยกิต</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 2</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต (19-3-40)</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>18 หน่วยกิต (15-9-36)</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 3</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>17 หน่วยกิต</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 4</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต ( - - )</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต ( - - )</td></tr>
              </tfoot>
            </table>
          </details>
        </details>

        <details>
          <summary>3.1.4.2 แผนการศึกษาสำหรับนิสิตที่เลือกเรียนสหกิจศึกษา</summary>

          <details>
            <summary>ปี 1</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>21 หน่วยกิต</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 2</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต (19-3-40)</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>18 หน่วยกิต (15-9-36)</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 3</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>20 หน่วยกิต</td></tr>
              </tfoot>
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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>17 หน่วยกิต</td></tr>
              </tfoot>
            </table>
          </details>

          <details>
            <summary>ปี 4</summary>

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
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>11 หน่วยกิต ( - - )</td></tr>
              </tfoot>
            </table>

            <div className="semester-title">ภาคการศึกษาที่ 2</div>
            <table>
              <thead>
                <tr><th>รหัสวิชา</th><th>ชื่อรายวิชา</th><th>หน่วยกิต (บรรยาย-ปฏิบัติ-ศึกษาด้วยตนเอง)</th></tr>
              </thead>
              <tbody>
                <tr><td>01204490</td><td>สหกิจศึกษา</td><td>7</td></tr>
              </tbody>
              <tfoot>
                <tr><td colSpan={2}>รวม</td><td>7หน่วยกิต ( - - )</td></tr>
              </tfoot>
            </table>
          </details>
        </details>

        <div style={{ textAlign: 'center' }}>
          <Link to="/" className="back-button">← กลับหน้า Home</Link>
        </div>
      </div>
    </div>
  );
}
