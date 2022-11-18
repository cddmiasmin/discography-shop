import React from 'react'

import './pagination.css'

const Pagination = ({numberOfPages, currentPage, SetCurrentPage}) => {

    return (
        <div
            className='d-flex justify-content-center align-items-center gap-2'
            style={{ width: '85%', marginBottom: '3vh' }}
        >
            {Array.from(Array(numberOfPages), (item, key) => {
                return  <button 
                            key={key}
                            value={key}
                            onClick={(e) => SetCurrentPage(Number(e.target.value))}
                            className={`rounded fs-6 page ${currentPage === key ? 'current_page' : ''}`} 
                            style={{width: '4vh', height: '4vh'}}
                        >
                            {key + 1}
                        </button>
            })}
        </div>
    )
}

export default Pagination