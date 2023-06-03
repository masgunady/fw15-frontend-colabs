import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        if (!token) {
            navigate("/sign-in");
        }
    }, [navigate, token]);

    return token ? children : null;
}

export default PrivateRoute;
