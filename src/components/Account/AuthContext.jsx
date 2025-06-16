import { createContext, useContext, useState } from 'react';
import usersData from './../../UserData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const login = (email, password) => {
    const user = usersData.findUserByEmail(email);
    if (!user || user.password !== password) {
      setAuthError('Неверный email или пароль');
      return false;
    }
    setCurrentUser(user);
    setAuthError(null);
    return true;
  };

  const register = (userData) => {
    if (usersData.findUserByEmail(userData.email)) {
      setAuthError('Пользователь с таким email уже существует');
      return false;
    }
    const newUser = usersData.addUser(userData);
    setCurrentUser(newUser);
    setAuthError(null);
    return true;
  };

  const resetPassword = (email, newPassword) => {
    const user = usersData.findUserByEmail(email);
    if (!user) {
      setAuthError('Пользователь с таким email не найден');
      return false;
    }
    usersData.updateUser(user.id, { password: newPassword });
    setAuthError(null);
    return true;
  };

  const updateProfile = (updates) => {
    if (!currentUser) return false;
    const updatedUser = usersData.updateUser(currentUser.id, updates);
    setCurrentUser(updatedUser);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authError,
        login,
        register,
        resetPassword,
        updateProfile,
        logout,
        setAuthError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);