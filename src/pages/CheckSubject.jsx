import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const GROUPS = {
  healthyGroup: 7,
  entrepreneurGroup: 3,
  languageGroup: 15,
  civicGroup: 2,
  artGroup: 3,
  infrastructureGroup: 13,
  hardwareGroup: 16,
  professionalSkillGroup: 5,
  scienceMathGroup: 17,
  engineeringGroup: 15,
  electiveSpecificGroup: 16
};

function emptyRow() {
  return { code:"", name:"", gradeNum:"", credit:"", gradeLetter:"-" };
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

function GroupTable({ id, title, required, rows, setRows }) {
  const addRow = () => setRows([...rows, emptyRow()]);
  const onChange = (idx, key, value) => {
    const next = [...rows];
    next[idx] = { ...next[idx], [key]: value };
    if (key === "gradeNum") next[idx].gradeLetter = toLetter(value);
    setRows(next);
  };

  const { totalCredits, gpa, remaining } = useMemo(() => {
    let credits = 0, weighted = 0;
    rows.forEach(r => {
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
    <details>
      <summary>{title} ไม่น้อยกว่า {required} หน่วยกิต</summary>
      <table>
        <thead>
          <tr>
            <th>รหัสวิชา</th><th>ชื่อวิชา</th><th>เกรด</th><th>หน่วยกิต</th><th>ระดับคะแนน</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td><input type="text" value={r.code} onChange={e=>onChange(i,"code",e.target.value)} placeholder="รหัสวิชา" /></td>
              <td><input type="text" value={r.name} onChange={e=>onChange(i,"name",e.target.value)} placeholder="ชื่อวิชา" /></td>
              <td><input type="number" step="0.01" min="0" max="4" value={r.gradeNum} onChange={e=>onChange(i,"gradeNum",e.target.value)} placeholder="0.00-4.00" /></td>
              <td><input type="number" step="0.5" min="0" value={r.credit} onChange={e=>onChange(i,"credit",e.target.value)} placeholder="หน่วยกิต" /></td>
              <td className="gradeValue">{r.gradeLetter}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" onClick={addRow}>+ เพิ่มแถว</button>
      <div className="summary-box">
        หน่วยกิตรวม: <b>{totalCredits.toFixed(1)}</b> หน่วยกิต<br />
        หน่วยกิตที่เหลือ: <b>{remaining.toFixed(1)}</b> หน่วยกิต<br />
        GPA เฉลี่ย: <b>{gpa}</b>
      </div>
    </details>
  );
}

export default function CheckSubject() {
  const nav = useNavigate();

  // สร้าง state สำหรับทุกกลุ่ม (เริ่มมี 1 แถวว่าง)
  const [rows, setRows] = useState(
    Object.fromEntries(Object.keys(GROUPS).map(k => [k, [emptyRow()]]))
  );

  const setGroupRows = (id) => (newRows) => setRows(prev => ({ ...prev, [id]: newRows }));

  const total = useMemo(() => {
    let totalRequired = 0, totalEarned = 0, totalWeighted = 0;
    Object.entries(GROUPS).forEach(([id, req]) => {
      totalRequired += req;
      let groupCredits = 0, groupWeighted = 0;
      rows[id].forEach(r => {
        const g = parseFloat(r.gradeNum);
        const c = parseFloat(r.credit);
        if (!Number.isNaN(g) && !Number.isNaN(c) && c > 0) { groupCredits += c; groupWeighted += g * c; }
      });
      totalEarned += groupCredits;
      totalWeighted += groupWeighted;
    });
    const totalRemaining = Math.max(0, totalRequired - totalEarned);
    const totalGPA = totalEarned > 0 ? (totalWeighted / totalEarned).toFixed(2) : "-";
    return {
      required: totalRequired.toFixed(1),
      earned: totalEarned.toFixed(1),
      remaining: totalRemaining.toFixed(1),
      gpa: totalGPA
    };
  }, [rows]);

  return (
    <div className="wrap-narrow">
      <h1 className="h1-center">ตรวจสอบรายวิชาตามหลักสูตร</h1>

      <details open>
        <summary>หมวดวิชาศึกษาทั่วไป ไม่น้อยกว่า 30 หน่วยกิต</summary>

        <GroupTable id="healthyGroup" title="กลุ่มสาระอยู่ดีมีสุข" required={GROUPS.healthyGroup}
          rows={rows.healthyGroup} setRows={setGroupRows("healthyGroup")} />

        <GroupTable id="entrepreneurGroup" title="กลุ่มสาระศาสตร์แห่งผู้ประกอบการ" required={GROUPS.entrepreneurGroup}
          rows={rows.entrepreneurGroup} setRows={setGroupRows("entrepreneurGroup")} />

        <GroupTable id="languageGroup" title="กลุ่มสาระภาษากับการสื่อสาร" required={GROUPS.languageGroup}
          rows={rows.languageGroup} setRows={setGroupRows("languageGroup")} />

        <GroupTable id="civicGroup" title="กลุ่มสาระพลเมืองไทยและพลเมืองโลก" required={GROUPS.civicGroup}
          rows={rows.civicGroup} setRows={setGroupRows("civicGroup")} />

        <GroupTable id="artGroup" title="กลุ่มสาระสุนทรียศาสตร์" required={GROUPS.artGroup}
          rows={rows.artGroup} setRows={setGroupRows("artGroup")} />
      </details>

      <details open>
        <summary>หมวดวิชาเฉพาะ ไม่น้อยกว่า 102 หน่วยกิต</summary>

        <GroupTable id="infrastructureGroup" title="กลุ่มโครงสร้างพื้นฐานของระบบ" required={GROUPS.infrastructureGroup}
          rows={rows.infrastructureGroup} setRows={setGroupRows("infrastructureGroup")} />

        <GroupTable id="hardwareGroup" title="กลุ่มฮาร์ดแวร์และสถาปัตยกรรมคอมพิวเตอร์" required={GROUPS.hardwareGroup}
          rows={rows.hardwareGroup} setRows={setGroupRows("hardwareGroup")} />

        <GroupTable id="professionalSkillGroup" title="กลุ่มทักษะวิชาชีพและจรรยาบรรณ" required={GROUPS.professionalSkillGroup}
          rows={rows.professionalSkillGroup} setRows={setGroupRows("professionalSkillGroup")} />

        <GroupTable id="scienceMathGroup" title="วิชาแกนทางวิทยาศาสตร์และคณิตศาสตร์" required={GROUPS.scienceMathGroup}
          rows={rows.scienceMathGroup} setRows={setGroupRows("scienceMathGroup")} />

        <GroupTable id="engineeringGroup" title="วิชาแกนทางวิศวกรรม" required={GROUPS.engineeringGroup}
          rows={rows.engineeringGroup} setRows={setGroupRows("engineeringGroup")} />

        <GroupTable id="electiveSpecificGroup" title="วิชาเฉพาะเลือก" required={GROUPS.electiveSpecificGroup}
          rows={rows.electiveSpecificGroup} setRows={setGroupRows("electiveSpecificGroup")} />
      </details>

      <div className="total-summary">
        <h2>สรุปหน่วยกิตและ GPA รวมทั้งหมด</h2>
        <p>หน่วยกิตสะสมทั้งหมด: <b>{total.earned}</b> หน่วยกิต</p>
        <p>หน่วยกิตที่ต้องเรียน: <b>{total.required}</b> หน่วยกิต</p>
        <p>หน่วยกิตที่เหลือทั้งหมด: <b>{total.remaining}</b> หน่วยกิต</p>
        <p>GPA เฉลี่ยรวม: <b>{total.gpa}</b></p>
      </div>

      <button className="btn" onClick={()=>nav("/home")}>กลับไปหน้า Home</button>
    </div>
  );
}
