import { useNavigate } from "react-router-dom";

export function useGoToProduct() {
    const navigate = useNavigate();

    const GoToProduct = () => {
        navigate('/produto');
    }

    return {
        GoToProduct,
    }
}