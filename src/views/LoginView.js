import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth  from "../useAuth";
import {handleGoogleLogin} from '../firebase'
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

    const onGoogleLogin = async () => {
			localStorage.setItem("user", "")
			localStorage.setItem("isAdmin", "false")
			const result = await handleGoogleLogin();
			if (result) navigate("/")
			console.log("google_login", result)
    /*     var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({prompt : 'select_account'});
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
       
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
					console.log("result", result);
					
					navigate("/");
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        }); */
    }
    

    return (
			<div>
				<form className="form">
					<h2>login</h2>
					<label>Email</label>
					<br/>
					<input name = "email" 
							onChange = {handleChange}
							value={user.email}
							className= "form-control mb-2 mt-1"
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
				<button onClick={()=>onGoogleLogin()}
					className= "form-control btn btn-primary"
					style={{marginTop:10, marginBottom:10,}}
				>Login with Google</button> 
			</div>
    )
}

export default LoginView
