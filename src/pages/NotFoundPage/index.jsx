import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './index.css';

const NotFoundPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to={isAuthenticated ? '/' : '/signin'}>
        {isAuthenticated ? 'Back to Menu' : 'Back to Sign In'}
      </Link>
    </div>
  );
};

export default NotFoundPage; 
