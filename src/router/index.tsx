import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoute from "../Componants/auth/ProtectedRoute";
import ErrorHandler from "../Componants/errors/ErrorHandler";
import HomePage from "../Pages/Home";
import AboutPage from "../Pages/About";
import ContactPage from "../Pages/Contact";
import ContributePage from "../Pages/ContributePage";
import RootLayout from "../Pages/Layout";
import LoginPage from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import QuickStartPage from "../Pages/Learn/QuickStartPage"
import InstallationPage from "../Pages/Learn/Installation";
import LearnLayout from "../Pages/Learn/Layout";
import ThinkingInReactPage from "../Pages/Learn/ThinkingInReact";

const isLoggedIn = false;
const userData: { email: string } | null = isLoggedIn ? { email: "email@gmail.com" } : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute isAllowed={isLoggedIn} redirectPath="/login" data={userData}>
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/contribute" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Learn Layout */}
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStartPage />} />
        <Route path="thinking-in-react" element={<ThinkingInReactPage />} />
        <Route path="installation" element={<InstallationPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;