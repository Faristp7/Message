import { googleLogout } from "@react-oauth/google"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  const handleLogout = () => {
     localStorage.removeItem('token')
     googleLogout()
     navigate('/')
  }
  return (
    <div>
      <button className="btn btn-accent" onClick={handleLogout}>Button</button>
    </div>
  )
}
