import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!isLoggedIn) {
      login();
      navigate("/admin");
    } else {
      logout();
      navigate("/");
    }
  };

  return (
    <div>
      <h1>{isLoggedIn ? "You are logged in!" : "Please Log In"}</h1>
      <button onClick={handleLogin}>{isLoggedIn ? "Log Out" : "Log In"}</button>
    </div>
  );
}

export default Login;
