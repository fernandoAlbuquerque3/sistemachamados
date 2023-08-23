import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

function Dashboard() {
   const { logout } = useContext(AuthContext)

   async function handleLogout() {
      await logout()
   }
   return (
      <div>
         <h1>Página Dashboard</h1>
         <button onClick={handleLogout}>Sair da conta</button>
      </div>
   )
}
export default Dashboard
