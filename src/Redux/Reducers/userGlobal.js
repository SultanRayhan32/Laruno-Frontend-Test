const INITIAL_STATE = {
    id: null,
    name: '',
    email: '',
    nrp: '',
    jabatan: null,
    unit: '',
    subnit: '',
    idUnit: '',
    idSubnit: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {...INITIAL_STATE,
                id: action.payload.id,
                name: action.payload.name, 
                email: action.payload.email,
                nrp: action.payload.nrp,
                jabatan: action.payload.jabatan,
                unit: action.payload.unit,
                subnit: action.payload.subnit,
                idUnit: action.payload.idUnit,
                idSubnit: action.payload.idSubnit
            }
        case 'DATA_AUTH' :
            return {...INITIAL_STATE,
                id: action.payload.id,
                name: action.payload.name, 
                email: action.payload.email,
                nrp: action.payload.nrp,
                jabatan: action.payload.jabatan,
                unit: action.payload.unit,
                subnit: action.payload.subnit,
                idUnit: action.payload.idUnit,
                idSubnit: action.payload.idSubnit
            }
        case 'KEEP_LOGIN':
            return {...INITIAL_STATE,
                id: action.payload.id,
                name: action.payload.name, 
                email: action.payload.email,
            }
        case 'LOG_OUT' :
            return {...INITIAL_STATE}
            
            default : 
        return state
        }
    }