import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
// import property from "../../../portfolio-backend/models/property";

const SignupView= () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState({
    name: "",
    address: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
      setUser({
          ...user,
          [event.target.name]: event.target.value
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      // book.genre = book.genre.split(",");
      localStorage.setItem("user", "")
      localStorage.setItem("isAdmin", "false")
      const response = await axios.post(`${apiUrl}/auth/signup`, 
      {
        ...user,
        role: 'USER'
      });
      if (response.data){
        navigate('/');
        setUser({
          name: "",
          email: "",
          password: "",
        })
      }
  }

  return (
    <div className="container mt-5">
      <form className="form">
        <h2>Add User</h2>
        <input
            onChange={handleChange}
            value={user.name}
            name="name"
            className="form-control"
            placeholder="name"
            type="text"
        />
        <input
            onChange={handleChange}
            value={user.email}
            name="email"
            className="form-control"
            placeholder="email"
            type="text"
        />
        <input
            name="password"
            onChange={handleChange}
            value={user.password}
            className="form-control"
            placeholder="password"
            type="text"
        />
        <button 
            onClick={handleSubmit}
            className="btn btn-outline-dark form-control">
                Create
        </button>
      </form>
    </div>
  );
};

export default SignupView;
