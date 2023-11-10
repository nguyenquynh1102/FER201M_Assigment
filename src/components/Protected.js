import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";

export default function Protected({ children }) {
  const { user } = UserAuth();
  const userLocal = localStorage.getItem("email");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || userLocal?.length === 0) {
      navigate("/signin");
      toast.error("You need to login first!");
    }
  }, [user, navigate, userLocal?.length]);

  return children;
}
