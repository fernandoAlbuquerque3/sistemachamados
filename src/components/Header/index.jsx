import { useContext } from "react"

import { Link } from "react-router-dom"

import { AuthContext } from "../../contexts/auth"

import { FiHome, FiUser, FiSettings } from "react-icons/fi"

import avatarImg from "../../assests/avatar.png"
import "./header.css"

function Header() {
   const { user } = useContext(AuthContext)

   return (
      <div className="sidebar">
         <div>
            <img
               src={user.avatarUrl === null ? avatarImg : user.avatarUrl}
               alt="foto do usuário"
            />
         </div>

         <Link to="/dashboard">
            <FiHome color="#fff" size={24} />
            Chamados
         </Link>

         <Link to="/customers">
            <FiUser color="#fff" size={24} />
            Clientes
         </Link>

         <Link to="/profile">
            <FiSettings color="#fff" size={24} />
            Perfil
         </Link>
      </div>
   )
}

export default Header
