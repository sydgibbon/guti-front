import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// ...

export const ProtectedLayout = () => {
  debugger
  const user = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {outlet}
    </>
  );
};