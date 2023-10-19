import { useLocation, Navigate } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export function ProtectedRoute({ isAuth, children, location }) {
  if (!getCookie("token")) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}