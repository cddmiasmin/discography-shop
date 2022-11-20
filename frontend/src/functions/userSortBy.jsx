import { useState, useEffect } from "react";

import { dataOptionsToSortBy } from '../data/dataOptionsToSortBy'

import { _ } from 'lodash';

export function useSortBy() {

    const [dataSortedData, SetSortedData] = useState([]);
    const [sortingOptionSelected, SetSortingOptionSelected] = useState(dataOptionsToSortBy[0].value);

    const SortAlbumByChoiceSortBy = (data, choice) => {
        let sortedDataAux;

        if (choice === 'date-recent')
            sortedDataAux = _.orderBy(data, ['releaseDate', 'albumName'], ['desc', 'asc']);
        else if (choice === 'date-old')
            sortedDataAux = _.orderBy(data, ['releaseDate', 'albumName'], ['asc', 'asc']);
        else if (choice === 'biggest-price')
            sortedDataAux = _.orderBy(data, ['price', 'albumName'], ['desc', 'asc']);
        else if (choice === 'lowest-price')
            sortedDataAux = _.orderBy(data, ['price', 'albumName'], ['asc', 'asc']);
        else if (choice === 'album-a-z')
            sortedDataAux = _.orderBy(data, ['albumName', 'artistName'], ['asc', 'asc']);
        else if (choice === 'album-z-a')
            sortedDataAux = _.orderBy(data, ['albumName', 'artistName'], ['desc', 'asc']);
        else if (choice === 'artist-a-z')
            sortedDataAux = _.orderBy(data, ['artistName', 'albumName'], ['asc', 'asc']);
        else
            sortedDataAux = _.orderBy(data, ['artistName', 'albumName'], ['desc', 'asc']);

        SetSortedData(sortedDataAux);
    }

    return {
        dataSortedData,
        sortingOptionSelected,
        SetSortingOptionSelected,
        SortAlbumByChoiceSortBy
    }

}