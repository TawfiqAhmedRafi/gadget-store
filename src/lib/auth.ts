import Cookies from 'js-cookie';

// Mock credentials
export const MOCK_EMAIL = "admin@gadgetstore.com";
export const MOCK_PASSWORD = "gadget123";

const AUTH_COOKIE_KEY = 'gadget_store_auth';

export interface User {
  email: string;
  name: string;
}

export const login = (email: string, password: string): boolean => {
  if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
    const user: User = {
      email: MOCK_EMAIL,
      name: "Admin User"
    };
    Cookies.set(AUTH_COOKIE_KEY, JSON.stringify(user), { expires: 7 });
    return true;
  }
  return false;
};

export const logout = (): void => {
  Cookies.remove(AUTH_COOKIE_KEY);
};

export const getUser = (): User | null => {
  const userCookie = Cookies.get(AUTH_COOKIE_KEY);
  if (userCookie) {
    try {
      return JSON.parse(userCookie);
    } catch {
      return null;
    }
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  return getUser() !== null;
};
