import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const { backendUrl, navigate, token, setToken } = useContext(ShopContext);
  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/user/register", {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast("Registration Successful");
          setCurrentState("Login");
          setEmail("");
          setName("");
          setPassword("");
        } else {
          toast.error(response.data.message);
          setEmail("");
          setName("");
          setPassword("");
        }
      } else {
        const response = await axios.post(backendUrl + "/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setEmail("");
          setName("");
          setPassword("");
        } else {
          // toast.error(response.data.message);
          toast.error(response.data.message);
          setEmail("");
          setName("");
          setPassword("");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="Login-Container">
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
