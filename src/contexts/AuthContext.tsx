import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, getUser, login as authLogin, logout as authLogout } from '@/lib/auth';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  const login = (email: string, password: string): boolean => {
    const success = authLogin(email, password);
    if (success) {
      setUser(getUser());
    }
    return success;
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
