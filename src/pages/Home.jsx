import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      {}
      <header
        style={{
          background: "#0b0b0b",
          borderRadius: 30,
          margin: "16px",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "8px 14px",
            borderRadius: 20,
            fontWeight: "900",
            color: "#2a63ff",
            fontSize: "22px",
          }}
        >
          GRADIE KU
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <Link to="/login" style={pillSmall}>login</Link>
          <Link to="/register" style={pillSmall}>Sign Up</Link>
        </div>
      </header>

      {}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 24,
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px",
          paddingBottom: 220, 
        }}
      >
        {}
        <div>
          <h1 style={bigStackLine}>TRUST</h1>
          <h1 style={bigStackLine}>GRADIE KU</h1>
          <h1 style={bigStackLine}>DARLING.</h1>
        </div>

        {}
        <div style={{ textAlign: "center" }}>
          <img
            src="/images/05.PNG"
            alt="worried"
            style={{ width: 120, marginBottom: 20 }}
          />
          <h2 style={{ fontWeight: 900, fontSize: 28, color: "#1e3e91" }}>
            WORRIED ABOUT YOUR GRADES AREN’T YOU?
          </h2>
          <p style={{ fontSize: 18, margin: "16px 0" }}>
            Why not give our website a try?
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <Link to="/login" style={pillCTAblack}>login</Link>
            <Link to="/register" style={pillCTAwhite}>Sign Up</Link>
          </div>
        </div>
      </main>

      {}
      <footer
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 80,
          padding: "16px 20px",
        
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.85) 30%, rgba(255,255,255,1) 100%)",
        }}
      >
        < Figure src="/images/04.PNG"  width={200}  label="chic" />
        <Figure src="/images/02.PNG"   width={150} />
        <Figure src="/images/03.PNG"   width={210} />
      </footer>

      {}
      <style>{`
        @media (max-width: 900px) {
          main { grid-template-columns: 1fr !important; }
          footer { gap: 40px !important; }
        }
        @media (max-width: 520px) {
          footer { gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}


function Figure({ src, label, width }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={src} alt={label} style={{ width }} />
      <p style={{ color: "#2a63ff", marginTop: 6, fontWeight: 600 }}>{label}</p>
    </div>
  );
}


const pillSmall = {
  textDecoration: "none",
  background: "#fff",
  color: "#000",
  borderRadius: 20,
  padding: "6px 14px",
  fontWeight: 600,
  fontSize: 14,
  boxShadow: "0 2px 0 rgba(0,0,0,0.25)",
};

const pillCTAblack = {
  textDecoration: "none",
  background: "#0b0b0b",
  color: "#fff",
  borderRadius: 28,
  padding: "12px 28px",
  fontSize: 18,
  fontWeight: 800,
};

const pillCTAwhite = {
  textDecoration: "none",
  background: "#fff",
  color: "#0b0b0b",
  borderRadius: 28,
  padding: "12px 28px",
  fontSize: 18,
  fontWeight: 800,
  border: "2px solid #eee",
};

const bigStackLine = {
  fontSize: 72,
  fontWeight: 900,
  margin: "0 0 8px",
  color: "#222",
  textShadow: "6px 6px 0 rgba(0,0,0,0.2)",
};
