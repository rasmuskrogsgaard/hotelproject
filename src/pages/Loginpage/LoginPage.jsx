import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import style from "./login.module.scss"


export function LoginPage() {

    const [message, setMessage] = useState("Indtast login oplysninger");

    const { setUserData, userData } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

let url = "http://localhost:4000/login";

    if (e.target.username.value === "") {
        setMessage("Venligst indtast dit brugernavn");
        return;
      }
  
      if (e.target.password.value === "") {
        setMessage("Venligst indtast dit password");
        return;
      }
  
  let body = new URLSearchParams();

    body.append("username", e.target.username.value);
    body.append("password", e.target.password.value);
    
    let options = {
        method: "POST",
        body: body,
        Authorization: "Bearer myprivatekey",
        
      };


      try {
        let res = await fetch(url, options);
        let data = await res.json();
        console.log(data);
        if (data?.status === "Ok") {
          setUserData(data);
          setMessage(`Du er nu logget ind som ${data.user.firstname}`);
        } else {
          setMessage("Der opstod en fejl - prøv igen");
        }
      } catch (err) {
        console.log(err);
      }
    }
  

  return (
    <div className={style.loginContainer}>
      <h2>Login</h2>
      <h4>Indtast dit brugernavn og password for at logge ind</h4>
      <form  className={style.formStyle} onSubmit={(e) => handleSubmit(e)}>
      <label>

          <input type="text" name="username" placeholder='Brugernavn'></input>
        </label>
        <label>

          <input type="password" name="password" placeholder='Password'></input>
        </label>
        <div className={style.buttonContainer}>
        <input  type="submit" value="login"></input>
        <input  type="submit" value="annuller"></input>
        </div>
      </form>
      {message && <b>{message}</b>}
    </div>
  );
};


