import React, { useState, useEffect } from "react";
import Login from "./Login";
import "./App.css";
import Last7DaysGraph from "./Last7DaysGraph";
import {
  getTodayCount,
  incrementTodayCount,
  getTotalCount,
  getLast7DaysData,
} from "./countUtils";

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [graphData, setGraphData] = useState({});

  useEffect(() => {
    setCount(getTodayCount());
    setTotal(getTotalCount());
    setGraphData(getLast7DaysData());
  }, []);

  const addCount = () => {
    const newCount = incrementTodayCount();
    setCount(newCount);
    setTotal(getTotalCount());
    setGraphData(getLast7DaysData());
  };

  return (
    <div className="app">
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
          <div className="topbar">
            🌸 Welcome, <span>{user.displayName}</span>
          </div>

          <div className="content">
            <div className="title">Radha Naam</div>
            <div className="count">{count}</div>

            <button className="add-btn" onClick={addCount}>
              RADHA
            </button>

            <div className="hint">
              Tap once for every Radha naam 🙏
            </div>

            <h3>📿 Total Count: {total}</h3>

            <Last7DaysGraph data={graphData} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
