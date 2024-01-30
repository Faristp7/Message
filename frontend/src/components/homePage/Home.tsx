import { googleLogout } from "@react-oauth/google"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getUserAuth } from "../../redux/user/userAuth"

export default function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
     localStorage.removeItem('token')
     googleLogout()
     dispatch(getUserAuth(false))
     navigate('/')
  }
  return (
    <div>
      <button className="btn btn-accent" onClick={handleLogout}>Button</button>
    </div>
  )
}
