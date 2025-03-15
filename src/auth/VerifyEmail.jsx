import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [message, setMessage] = useState("Verifying...");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token"); 

      if (!token) {
        setMessage("Invalid verification link.");
        return;
      }

      try {
        const response = await axios.post("https://colorlib.onrender.com/api/v1/verify/user/", {token});

        setMessage(response.data.message || "Email verified successfully!");
        toast.success("Email verified! Redirecting...");

        
        setTimeout(() => navigate("/login"), 3000);
      } catch (error) {
        setMessage("Verification failed. Link may be expired or invalid.");
        toast.error("Verification failed. Try again.");
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return <h2>{message}</h2>;
};

export default VerifyEmail;
