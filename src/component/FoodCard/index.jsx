import './index.css';

const FoodCard = ({ item }) => {
    const { image, name, category, isVeg, description, servings } = item;

    return (
        <div className="food-card">
            <div className="image-container">
                <img src={image} alt={name} className="food-image" />
                <div className={`diet-badge ${isVeg ? 'veg' : 'non-veg'}`}>
                    {isVeg ? 'VEG' : 'NON-VEG'}
                </div>
            </div>
            <div className="card-details">
                <p className="category-label">{category.toUpperCase()}</p>
                <h3 className="dish-name">{name}</h3>
                <p className="dish-description">{description}</p>
                <p className="servings">{servings}</p>
            </div>
        </div>
    );
};

export default FoodCard;
