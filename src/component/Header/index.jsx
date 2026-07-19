import './index.css'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useRecipes } from '../../context/RecipeContext'

const Header = () => {
    const {user,logout} = useAuth()
    const { savedRecipes } = useRecipes()
    const navigate=useNavigate()

    const handleLogout=()=>{
        logout()
        navigate('/signin')
    }
  return (
    <nav className='navbar'>
        <div className='navbar-content-left'>
           <h1>Party Menu</h1>
           <p>Welcome, {user.name}</p>
        </div>
        <div className='navbar-content-right'>
            <Link to="/saved-recipes" className="nav-button">
                    Saved Recipes <span className="saved-count-badge">{savedRecipes.length}</span>
            </Link>
            <button type='button' onClick={handleLogout}  className="logout-button">
                Logout
            </button>
        </div>
    </nav>
  )
}

export default Header
