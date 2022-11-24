export const validateName = new RegExp(
    /^[a-zA-Z ]+$/
);

export const validateLastName = new RegExp(
    /^[a-zA-Z ]+$/
);

export const validateCPF = new RegExp(
    /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/
);

export const validateTelephone = new RegExp(
    /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);

export const validateEmail = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);

export const validatePassword = new RegExp(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{4,})$/
);