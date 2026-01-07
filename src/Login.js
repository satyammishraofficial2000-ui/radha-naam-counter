import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

function Login({ setUser }) {
  const [name, setName] = useState("");

  const login = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    try {
      // Google authentication
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save Google authenticated user
      setUser({
        displayName: user.displayName || name,
        email: user.email,
        uid: user.uid,
      });

    } catch (error) {
      alert("Google login failed");
      console.error(error);
    }
  };

  return (
    <div className="login">
      <h1>🌸 Radha Naam Counter</h1>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p className="subtext">
        Simple • Peaceful • Personal
      </p>
    </div>
  );
}

export default Login;
