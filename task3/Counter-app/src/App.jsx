import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCounter((prev) => prev + step);
  const decrease = () => setCounter((prev) => prev - step);
  const reset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div style={styles.page}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.card}>
        <div style={styles.badge}>Premium Experience</div>

        <h1 style={styles.title}>Luxury Counter</h1>
        <p style={styles.subtitle}>
          A sleek counter with smooth controls and a modern interface.
        </p>

        <div style={styles.counterWrap}>
          <span style={styles.counterLabel}>Current Value</span>
          <h2 style={styles.counter}>{counter}</h2>
        </div>

        <div style={styles.stepBox}>
          <div style={styles.stepHeader}>
            <span style={styles.stepLabel}>Step Size</span>
            <span style={styles.stepValue}>{step}</span>
          </div>

          <input
            type="range"
            min="1"
            max="20"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            style={styles.slider}
          />
        </div>

        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.decrease }} onClick={decrease}>
            − Decrease
          </button>

          <button style={{ ...styles.button, ...styles.reset }} onClick={reset}>
            Reset
          </button>

          <button style={{ ...styles.button, ...styles.increase }} onClick={increase}>
            + Increase
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top left, rgba(255,255,255,0.14), transparent 28%), linear-gradient(135deg, #0f172a 0%, #111827 45%, #1f2937 100%)",
    fontFamily: "Inter, Arial, sans-serif",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
  },
  glow1: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "rgba(99, 102, 241, 0.35)",
    filter: "blur(70px)",
    top: "10%",
    left: "8%",
  },
  glow2: {
    position: "absolute",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "rgba(236, 72, 153, 0.25)",
    filter: "blur(80px)",
    bottom: "8%",
    right: "10%",
  },
  card: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "460px",
    padding: "34px",
    borderRadius: "28px",
    background: "rgba(255, 255, 255, 0.08)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(18px)",
    color: "#fff",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: "12px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "18px",
  },
  title: {
    margin: 0,
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    letterSpacing: "-0.03em",
  },
  subtitle: {
    margin: "12px 0 28px",
    fontSize: "1rem",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.72)",
  },
  counterWrap: {
    padding: "22px",
    borderRadius: "22px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    marginBottom: "22px",
  },
  counterLabel: {
    display: "block",
    fontSize: "0.85rem",
    color: "rgba(255,255,255,0.62)",
    marginBottom: "8px",
    letterSpacing: "0.04em",
  },
  counter: {
    margin: 0,
    fontSize: "clamp(3rem, 8vw, 4.8rem)",
    fontWeight: 900,
    lineHeight: 1,
  },
  stepBox: {
    padding: "18px 18px 14px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
    marginBottom: "22px",
  },
  stepHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },
  stepLabel: {
    fontSize: "0.95rem",
    color: "rgba(255,255,255,0.75)",
  },
  stepValue: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#fff",
  },
  slider: {
    width: "100%",
    accentColor: "#8b5cf6",
    cursor: "pointer",
  },
  buttons: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  button: {
    border: "none",
    borderRadius: "16px",
    padding: "14px 12px",
    color: "#fff",
    fontSize: "0.98rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.18)",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
  increase: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  decrease: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
  },
  reset: {
    background: "linear-gradient(135deg, #64748b, #334155)",
  },
};

export default App;