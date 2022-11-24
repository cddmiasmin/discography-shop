import { useState, useEffect } from 'react';

import {
    validateName,
    validateLastName,
    validateCPF,
    validateTelephone,
    validateEmail,
    validatePassword
} from '../utils/regex';

export function useValidationRegistration(
    name, lastName, cpf, telephone, email, password, confirmPassword
) {

    const [nameErr, SetNameErr] = useState(false);
    const [lastNameErr, SetLastNameErr] = useState(false);
    const [cpfErr, SetCPFErr] = useState(false);
    const [telephoneErr, SetTelephoneErr] = useState(false);
    const [emailErr, SetEmailErr] = useState(false);
    const [passwordErr, SetPasswordErr] = useState(false);
    const [confirmPasswordErr, SetConfirmPasswordErr] = useState(false);

    useEffect (() => {
        if (nameErr) name.current.classList.add('err');
        else name.current.classList.remove('err');
    }, [nameErr]);

    useEffect(() => {
        if (lastNameErr) lastName.current.classList.add('err');
        else lastName.current.classList.remove('err');
    }, [lastNameErr]);

    useEffect(() => {
        if (cpfErr) cpf.current.classList.add('err');
        else cpf.current.classList.remove('err');
    }, [cpfErr]);

    useEffect(() => {
        if (telephoneErr) telephone.current.classList.add('err');
        else telephone.current.classList.remove('err');
    }, [telephoneErr]);

    useEffect(() => {
        if (emailErr) email.current.classList.add('err');
        else email.current.classList.remove('err');
    }, [emailErr]);

    useEffect(() => {
        if (passwordErr) password.current.classList.add('err');
        else password.current.classList.remove('err');
    }, [passwordErr]);

    useEffect(() => {
        if (confirmPasswordErr) confirmPassword.current.classList.add('err');
        else confirmPassword.current.classList.remove('err');
    }, [confirmPasswordErr]);

    const PasswordsAreTheSame = () => {
        if(password.current.value !== confirmPassword.current.value){
            SetPasswordErr(true);
            SetConfirmPasswordErr(true);
        } 
    }

    const Validate = () => {

        if (!validateName.test(name.current.value))
            SetNameErr(true);
        else SetNameErr(false);

        if (!validateLastName.test(lastName.current.value))
            SetLastNameErr(true);
        else SetLastNameErr(false);

        if (!validateCPF.test(cpf.current.value))
            SetCPFErr(true);
        else SetCPFErr(false);

        if (!validateTelephone.test(telephone.current.value))
            SetTelephoneErr(true);
        else SetTelephoneErr(false);

        if (!validateEmail.test(email.current.value))
            SetEmailErr(true);
        else SetEmailErr(false);

        if (!validatePassword.test(password.current.value))
            SetPasswordErr(true);
        else {
            SetPasswordErr(false);
            PasswordsAreTheSame();
        } 
    }


    // console.log('name', nameErr);
    // console.log('last', lastNameErr);
    // console.log('cpf', cpfErr);
    // console.log('tele', telephoneErr);
    // console.log('email', emailErr);
    // console.log('senha', passwordErr);

    return {
        Validate,
        nameErr,
        lastNameErr,
        cpfErr,
        telephoneErr,
        emailErr,
        passwordErr
    }
}