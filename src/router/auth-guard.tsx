import { Navigate } from "react-router";

interface ProtectRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectRoute({ children, allowedRoles }: ProtectRouteProps) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole || "")) {
    return <Navigate to="/403" />;
  }

  return children;
}
