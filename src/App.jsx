import React from "react";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dynamics-mentos-theme">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
