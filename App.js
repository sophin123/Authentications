import React from "react";
import MainNavigator from "./Navigator/MainNavigator";

import { Provider as AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>
  );
}
