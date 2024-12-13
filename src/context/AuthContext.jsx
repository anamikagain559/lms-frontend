import { createContext, useState, useEffect } from 'react';
import axios from '../axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await axios.post('/login', credentials);
    setUser(response.data.user);
  };

  const logout = async () => {
    await axios.post('/logout');
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get('/user');
      setUser(response.data);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
