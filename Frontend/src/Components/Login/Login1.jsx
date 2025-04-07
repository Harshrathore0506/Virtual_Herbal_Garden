import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../../Context/ShopContext";
import "./Login.css";
const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { backendUrl } = useContext(ShopContext);
  const onSumbitHandler = async (e) => {};
  return (
    <div className="Login-Container">
      <h1>{backendUrl}</h1>
      <form onSubmit={onSumbitHandler} className="login-form">
        <div className="form-header">
          <p className="form-title">{currentState}</p>
          <hr className="form-divider" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="input-field"
            placeholder="Name"
            required
          />
        )}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="input-field"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="input-field"
          placeholder="Password"
          required
        />
        <div className="form-footer">
          <p className="forgot-password">Forgot Your Password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="toggle-form"
            >
              Create Account
            </p>
          ) : (
            <p onClick={() => setCurrentState("Login")} className="toggle-form">
              Login Here
            </p>
          )}
        </div>
        <button className="submit-button" disabled={isLoading}>
          {isLoading
            ? "Loading..."
            : currentState === "Login"
            ? "Sign In"
            : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
