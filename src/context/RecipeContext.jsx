import { createContext, useContext, useState, useEffect } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const localData = localStorage.getItem('party_menu_saved_recipes');
        try {
            return localData ? JSON.parse(localData) : [];
        } catch {
            localStorage.removeItem('party_menu_saved_recipes');
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('party_menu_saved_recipes', JSON.stringify(savedRecipes));
    }, [savedRecipes]);

    const toggleSaveRecipe = (recipe) => {
        setSavedRecipes((prevSaved) => {
            const isAlreadySaved = prevSaved.some(item => String(item.id) === String(recipe.id));
            if (isAlreadySaved) {
                return prevSaved.filter(item => String(item.id) !== String(recipe.id));
            } else {
                return [...prevSaved, recipe];
            }
        });
    };

    return (
        <RecipeContext.Provider value={{ savedRecipes, toggleSaveRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRecipes = () => useContext(RecipeContext);
