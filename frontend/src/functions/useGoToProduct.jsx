import { useNavigate } from "react-router-dom";

export function useGoToProduct() {
    const navigate = useNavigate();

    const GoToProduct = (slugAlbum, slugArtist) => {
        navigate(`/produto/${slugArtist}/${slugAlbum}`);
    }

    return {
        GoToProduct,
    }
}