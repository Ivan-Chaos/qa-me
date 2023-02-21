import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./ui/theme/mainTheme";
import "../src/ui/fonts/fonts.css";
import LoginLayout from "./ui/layout/LoginLayout";
import TesterSignUp from "./pages/TesterSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/sign-up",
    element: (
      <LoginLayout>
        <TesterSignUp />
      </LoginLayout>
    ),
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
