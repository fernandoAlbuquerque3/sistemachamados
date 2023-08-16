import { useState, useContext } from "react"

import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"
import "./signin.css"

import logo from "../../assests/logo_maior.png"

function SignIn() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const { signIn } = useContext(AuthContext)

   function handleSignIn(e) {
      e.preventDefault()
      if (email !== "" && password !== "") {
         signIn(email, password)
      }
   }

   return (
      <div className="container-center">
         <div className="login">
            <div className="login-area">
               <img src={logo} alt="logo do sistema de chamados" />
            </div>

            <form onSubmit={handleSignIn}>
               <h1>Entrar</h1>
               <input
                  type="text"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button type="submit">Acessar</button>
            </form>
            <Link to="/register">Criar uma conta</Link>
         </div>
      </div>
   )
}

export default SignIn
