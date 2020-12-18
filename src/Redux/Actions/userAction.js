export const loginPersonil = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_AUTH',
            payload: {
                id: data.id,
                name: data.nama,
                email: data.email,
                nrp: data.nrp,
                jabatan: data.jabatan,
                unit: data.unit,
                subnit: data.submit,
                idUnit: data.idUnit,
                idSubnit: data.idSubnit
            }
        })
    }
}

export const dataAuth = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'DATA_AUTH',
            payload: {
                id: data.id,
                name: data.nama,
                email: data.email,
                nrp: data.nrp,
                jabatan: data.jabatan,
                unit: data.unit,
                subnit: data.submit,
                idUnit: data.idUnit,
                idSubnit: data.idSubnit
            }
        })
    }
}

export const logOut = () => {
    localStorage.removeItem('token')
    return (dispatch) => {
        dispatch({
            type: "LOG_OUT"
        })
    }
}