import { useState } from "react";
import "./App.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const avg = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;

  return (
    <div className="bg">
      <div className="glass">

        <div className="title">
          <h1>Unicafe Feedback</h1>
          <p>Student experience analytics</p>
        </div>

        <div className="actions">
          <button className="g" onClick={() => setGood(good + 1)}>Good</button>
          <button className="n" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
          <button className="b" onClick={() => setBad(bad + 1)}>Bad</button>
        </div>

        <div className="stats">
          <h2>Analytics</h2>

          {total === 0 ? (
            <div className="empty">No data collected yet</div>
          ) : (
            <div className="grid">
              <div className="box">Good <span>{good}</span></div>
              <div className="box">Neutral <span>{neutral}</span></div>
              <div className="box">Bad <span>{bad}</span></div>
              <div className="box">Total <span>{total}</span></div>
              <div className="box">Avg <span>{avg.toFixed(2)}</span></div>
              <div className="box">Positive <span>{positive.toFixed(1)}%</span></div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}