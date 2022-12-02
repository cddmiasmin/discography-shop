import { createContext, useState, useEffect } from "react";

import _ from 'lodash'

import api from './../services/api';

export const UserContext = createContext();

export function UserContextProvider({ children }) {

    const [user, SetUser] = useState(
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
    );

    const [totalValueCart, SetTotalValueCart] = useState(0);
    const [items, SetItems] = useState(['1']);
    const [quantityOfItems, SetQuantityOfItems] = useState(0);

    const [isSnackbarOpen, SetIsSnackbarOpen] = useState(false);
    const [severity, SetSeverity] = useState('error');
    const [message, SetMessage] = useState('');

    const [isSnackbarOpenProduct, SetIsSnackbarOpenProduct] = useState(false);
    const [severityProduct, SetSeverityProduct] = useState('error');
    const [messageProduct, SetMessageProduct] = useState('');

    const getCartItems = () => {
        api.get(`/cart/${user.code}`).then((response) => {
            SetItems(response.data.result);
        });
    }

    const alterCartItem = (code, amount, price, origin) => {

        let totalValue = amount * price;
        // console.log(amount)
        api.put(`/cart/${code}`, {
            amount: amount,
            totalValue: totalValue,
        })
            .then(function (response) {

                if(origin === 'cart') {
                    SetSeverity('success');
                    SetMessage(response.data.result);
                    SetIsSnackbarOpen(true);
                } else {
                    SetSeverityProduct('success');
                    SetMessageProduct(response.data.result);
                    SetIsSnackbarOpenProduct(true);
                }

                getCartItems();
            });
    }

    const deleteCartItem = (code) => {
        api.delete(`/cart/${code}`)
            .then(function (response) {
                SetSeverity('success');
                SetMessage(response.data.result);
                SetIsSnackbarOpen(true);
                getCartItems();
            });
    }

    const addItem = (client, product, amount, totalValue) => {
        api.post('/cart', {
            client: client,
            product: product,
            amount: amount,
            totalValue: totalValue
        })
            .then(function (response) {
                SetSeverityProduct('success');
                SetMessageProduct(response.data.result);
                SetIsSnackbarOpenProduct(true);
                getCartItems();
            });
    }

    const DoesTheItemAlreadyExist = (product) => {
        let result = items.find(t => t.cartProduct == product);

        if (result) return result;
        else return false;
    }

    useEffect(() => {
        if (user.length !== 0) {
            getCartItems();
        } else SetItems(1);
    }, [user]);

    useEffect(() => {
        if (user.length !== 0 && items[0] !== '1') {
            SetQuantityOfItems(items.length);
            SetTotalValueCart(_.sumBy(items, 'cartTotalValue'));
        }
    }, [items])

    return (
        <UserContext.Provider
            value={{
                user, SetUser,
                items,
                quantityOfItems,
                totalValueCart,
                addItem,
                alterCartItem,
                deleteCartItem,
                isSnackbarOpen, SetIsSnackbarOpen,
                severity,
                message,
                isSnackbarOpenProduct, SetIsSnackbarOpenProduct,
                severityProduct, SetSeverityProduct,
                messageProduct, SetMessageProduct,
                DoesTheItemAlreadyExist
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
