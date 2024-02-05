import Input from "../../components/Input/Input";
import "./Register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

function Register() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${API_URL}/login/register`, {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });
      navigate("/login");
    } catch (error) {
      event.target.reset();
      setError(error.response.data);
    }
  };

  return (
    <main className="signup__page">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>
        <Input type="text" name="name" label="Name" />
        <Input type="text" name="email" label="Email" />
        <Input type="password" name="password" label="Password" />
        <button className="signup__button">Sign up</button>
      </form>
      <p>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
}

export default Register;
