import { useNavigate, Link } from 'react-router-dom';
import { useRecipes } from '../../context/RecipeContext';
import FoodCard from '../../component/FoodCard';
import './index.css';


const SavedRecipesPage = () => {
    const navigate = useNavigate();
    const { savedRecipes, toggleSaveRecipe } = useRecipes();

    return (
        <div className="main-menu-page-bg">
            <div className="saved-recipes-page">
                <div className="details-nav-bar">
                    <div>
                      <h1 className="saved-page-title">Saved Recipes</h1>
                      <p className="item-count">{savedRecipes.length} recipes saved</p>
                    </div>
                    <button type="button" className="back-btn" onClick={() => navigate('/')}>
                        ← Back to Menu
                    </button>
                </div>

                <div className="menu-grid-container">

                    {savedRecipes.length > 0 ? (
                        <ul className="menu-grid">
                            {savedRecipes.map(item => (
                                <li key={item.id} className="saved-item-card-wrapper">
                                    <Link to={`/menu/${item.id}`}>
                                        <FoodCard item={item} />
                                    </Link>
                                    <button 
                                        type="button" 
                                        className="remove-recipe-btn"
                                        onClick={(e) => {
                                            e.preventDefault(); 
                                            toggleSaveRecipe(item);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty-state">
                            <p>No saved recipes yet.</p>
                            <Link to="/" className="browse-menu-link">Browse the menu</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SavedRecipesPage;
