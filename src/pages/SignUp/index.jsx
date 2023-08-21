import { useState, useContext } from "react"

import { AuthContext } from "../../contexts/auth"

import logo from "../../assests/logo_maior.png"
import { Link } from "react-router-dom"

function SignUp() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const { signUp, loadingAuth } = useContext(AuthContext)

   async function handleSubmit(e) {
      e.preventDefault()

      if (name !== "" && email !== "" && password !== "") {
         await signUp(email, password, name)
         alert("fazer cadastro")
      }
   }

   return (
      <div className="container-center">
         <div className="login">
            <div className="login-area">
               <img src={logo} alt="logo do sistema de chamados" />
            </div>

            <form onSubmit={handleSubmit}>
               <h1>Criar Conta</h1>

               <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />

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

               <button type="submit">
                  {loadingAuth ? "Carregando..." : "Cadastrar"}
               </button>
            </form>
            <Link to="/">Já possui uma conta? Faça login</Link>
         </div>
      </div>
   )
}

export default SignUp
