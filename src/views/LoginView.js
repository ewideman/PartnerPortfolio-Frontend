import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth  from "../useAuth";

const LoginView = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    const [auth, setAuth] = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
   
    async function handleSubmit (event){
        localStorage.setItem("user", "")
        localStorage.setItem("isAdmin", "false")
        event.preventDefault()
        const {data} = await axios.post(`${apiUrl}/auth/login`, user);
        console.log("res", data)
      
        if (data){
            setAuth(data);
            localStorage.setItem("user", JSON.stringify(data))
            localStorage.setItem("isAdmin", data.role == "USER" ? 'false' : 'true')
            localStorage.setItem("jwtlibapp", JSON.stringify(data))
            navigate("/");
        }
    }

    function handleChange (event){
        setUser ({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const isAuthenticated = () => {
        if (typeof window == 'undefined') {
            return false;
        }

  
    }

    return (
            <form className="form">
                <h2>login</h2>
                <label>Email</label>
                <br/>
                <input name = "email" 
                    onChange = {handleChange}
                    value={user.email}
                    className= "form-control"
                    type="text"
                    placeholder="email"/>
                <input name= "password"
                    onChange={handleChange}
                    value = {user.password}
                    className="form-control"
                    type= "password"
                    placeholder="password"/>
                <button onClick = {handleSubmit} className= "form-control btn btn-primary">Submit</button>
            </form>
    )
}

export default LoginView
