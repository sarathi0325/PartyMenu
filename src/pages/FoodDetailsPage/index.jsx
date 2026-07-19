import { useParams, useNavigate } from 'react-router-dom';
import { getMenuItemById } from '../../data/menuData';
import './index.css';
import { useRecipes } from '../../context/RecipeContext';

const FoodDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { savedRecipes, toggleSaveRecipe } = useRecipes();

    const dish = getMenuItemById(id);

    if (!dish) {
        return (
            <div className="details-page-bg">
                <div className="error-container">
                    <p>Dish not found.</p>
                    <button type="button" className="back-btn" onClick={() => navigate('/')}>Back to Menu</button>
                </div>
            </div>
        );
    }

    const isSaved = savedRecipes.some(item => String(item.id) === String(dish.id));

    return (
        <div className='details-page-bg'>
            <div className="details-page">
                <div className="details-nav-bar">
                    <button type="button" className="back-btn" onClick={() => navigate('/')}>
                        ← Back to Menu
                    </button>
                    <div className="nav-bar-right-group">
                        <button type="button" className="plain-nav-text-btn" onClick={() => navigate('/saved-recipes')}>
                            Saved Recipes
                        </button>
                        <button 
                            type="button" 
                            className={`save-toggle-btn ${isSaved ? 'saved' : 'unsaved'}`}
                            onClick={() => toggleSaveRecipe(dish)}
                        >
                            {isSaved ? 'Saved' : 'Save Recipe'}
                        </button>
                    </div>
                </div>

                {/* Main Content Hero Box */}
                <div className="details-hero-card">
                    <div className="hero-left-image">
                        <img src={dish.image} alt={dish.name} />
                    </div>
                    
                    <div className="hero-right-info">
                        <div className="badges-row">
                            <span className="info-category-badge">{dish.category}</span>
                            <span className={`info-diet-badge ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                                {dish.isVeg ? 'Veg' : 'Non-Veg'}
                            </span>
                        </div>

                        <h1 className="dish-detail-title">{dish.name}</h1>
                        <p className="dish-detail-servings">{dish.servings}</p>
                        <p className="dish-detail-description">{dish.fullDescription}</p>
                    </div>
                </div>

                <div className="ingredients-card-container">
                    <h2 className='ingredient-text'>Ingredients</h2>
                    <ul className="ingredients-list-items">
                        {dish.ingredients?.map((ing, index) => (
                            <li key={index} className="ingredient-row-item">
                                <span className="ingredient-name">{ing.name || ing}</span>
                                <span className="ingredient-quantity">{ing.quantity || ''}</span>
                            </li>
                        )) || <li className="ingredient-row-item">Ingredients details not available</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;
