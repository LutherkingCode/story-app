import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import { AuthentificationContext } from "../components/authentification";
import { useNavigate } from "react-router";

export default function Login() {
  const { authenticated, setAuthenticated } = useContext(
    AuthentificationContext
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const redirection = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch users data from API
      const response = await fetch("//reqres.in/api/users");
      const data = await response.json();

      const user = data.data.find(
        (user) => user.email === username && user.last_name === password
      );

      if (user && !authenticated) {
        setAuthenticated(true);
        redirection("/");
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login to Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputField}
          placeholder="Last Name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
}
