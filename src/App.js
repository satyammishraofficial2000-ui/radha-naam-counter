import React, { useState } from "react";
import Login from "./Login";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

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

            <button
              className="add-btn"
              onClick={() => setCount(count + 1)}
            >
              RADHA
            </button>

            <div className="hint">
              Tap once for every Radha naam 🙏
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
