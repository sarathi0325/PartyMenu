import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RecipeProvider } from './context/RecipeContext';
import SignInPage from './pages/SignInPage';
import MainMenuPage from './pages/MainMenuPage';
import FoodDetailsPage from './pages/FoodDetailsPage'; 
import SavedRecipesPage from './pages/SavedRecipesPage'; 
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './component/ProtectedRoute';
import './App.css';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route 
        path="/signin" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <SignInPage />} 
      />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <MainMenuPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/menu/:id" element={<FoodDetailsPage />} />
      <Route path="/saved-recipes" element={<SavedRecipesPage />} />
      <Route path="*" element={<NotFoundPage />} /> 
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    <RecipeProvider> 
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </RecipeProvider>
  </AuthProvider>
);

export default App;
