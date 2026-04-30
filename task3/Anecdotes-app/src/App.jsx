import { useState } from "react";
import "./App.css";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later.",
  "The first 90% of the code accounts for the first 90% of the development time.",
  "Any fool can write code that a computer can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code.",
];

export default function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const next = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const topIndex = votes.indexOf(Math.max(...votes));

  return (
    <div className="bg">

      <div className="card">

        <div className="header">
          <h1>Anecdotes</h1>
          <p>Random wisdom & programming humor</p>
        </div>

        <div className="quoteBox">
          <p className="quote">“{anecdotes[selected]}”</p>
          <span className="votes">Votes: {votes[selected]}</span>
        </div>

        <div className="buttons">
          <button className="primary" onClick={vote}>Vote</button>
          <button className="secondary" onClick={next}>Next</button>
        </div>

        <div className="top">
          <h2>Top Anecdote</h2>
          <div className="topBox">
            <p>{anecdotes[topIndex]}</p>
            <span>{votes[topIndex]} votes</span>
          </div>
        </div>

      </div>

    </div>
  );
}