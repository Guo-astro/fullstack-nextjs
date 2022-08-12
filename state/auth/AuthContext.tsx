import { createContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
};

type AuthProviderProps = {
  children: React.ReactNode; // 👈️ type children
};
const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
