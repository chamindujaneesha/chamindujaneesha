import React, { createContext, useContext } from 'react';

export const AuthContext = createContext<string | null>(null);
export const useAuth = () => useContext(AuthContext);
