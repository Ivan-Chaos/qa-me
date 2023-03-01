import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./ui/theme/mainTheme";
import "../src/ui/fonts/fonts.css";
import LoginLayout from "./ui/layout/LoginLayout";
import TesterSignUp from "./pages/TesterSignUp";
import TesterQuestionare from "./pages/TesterQuestinare";
import FullWidthLayout from "./ui/layout/FullWidthLayout";
import DashboardLayout from "./ui/layout/DashboardLayout";

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
  {
    path: "/questionare",
    element: (
      <FullWidthLayout>
        <TesterQuestionare />
      </FullWidthLayout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
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
