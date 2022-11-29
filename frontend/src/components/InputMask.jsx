import React from 'react'

import './../page/Registration/registration.css';

import { mask, unMask } from 'remask';

const InputMask = ({value, SetValue, pattern, placeholder, type, number}) => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center'>
            <input
                className='element-width rounded'
                type="text" id={`${type}-resgistration`} placeholder={placeholder} required
                value={value}
                onChange={(event) => {
                    SetValue(mask(unMask(event.target.value), pattern));
                }} 
                minLength={number}
            />
        </div>
    )
}

export default InputMask