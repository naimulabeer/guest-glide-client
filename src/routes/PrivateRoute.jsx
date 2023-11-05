import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
