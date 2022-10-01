export function useShowPassword() {
    const ShowPassword = (inputPassword, iconFillEyeVisible, iconFillEyeInvisible) => {
        var inputPasswordAux = document.getElementById(`${inputPassword}`);
        var iconFillEyeVisibleAux = document.getElementById(`${iconFillEyeVisible}`);
        var iconFillEyeInvisibleAux = document.getElementById(`${iconFillEyeInvisible}`);

        if (iconFillEyeVisibleAux.style.display === 'flex') {
            inputPasswordAux.setAttribute('type', 'text');
            iconFillEyeVisibleAux.style.display = 'none';
            iconFillEyeInvisibleAux.style.display = 'flex';
        }
        else {
            inputPasswordAux.setAttribute('type', 'password');
            iconFillEyeVisibleAux.style.display = 'flex';
            iconFillEyeInvisibleAux.style.display = 'none';
        }
    }

    return ShowPassword
}