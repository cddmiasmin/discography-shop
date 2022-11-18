import { useState } from "react"

export function usePagination(items) {

    const [currentPage, SetCurrentPage] = useState(0);
    
    const itemsPerPage = 8;
    const numberOfPages = Math.ceil(items.length / itemsPerPage);
    const starIndex = currentPage * itemsPerPage;
    const endIndex = starIndex + itemsPerPage;
    const currentItems = items.slice(starIndex, endIndex);

    return {
        numberOfPages,
        currentItems,
        currentPage,
        SetCurrentPage
    }
}