import "./Login.scss";
import Input from "../../components/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login/`, {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      sessionStorage.setItem("token", response.data.token);

      navigate("/");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <main className="login-page">
      <form className="login" onSubmit={handleSubmit}>
        <h1 className="login__title">Log in</h1>
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="login__button">Log in</button>
      </form>
      <p>
        Need an account? <Link to="/register">Sign up</Link>
      </p>
    </main>
  );
};

export default LoginPage;
