import { Button } from "antd";
import { storage } from "@/utils/storage";
import { useNavigate } from "react-router";

function setRole(role: string) {
  storage.setUserRole(role);
}
function setToken(token: string) {
  storage.setToken(token);
}

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(role: string) {
    if (role === "admin") {
      setRole("admin");
      setToken("admin-token");
    } else if (role === "user") {
      setRole("user");
      setToken("user-token");
    }
    navigate("/");
  }

  return (
    <>
      <h1>登录页面</h1>
      <Button onClick={() => handleLogin("admin")}>登录 Admin</Button>
      <Button onClick={() => handleLogin("user")}>登录 user</Button>
    </>
  );
}
