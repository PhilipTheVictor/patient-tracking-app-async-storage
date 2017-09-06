import { combineReducers } from 'redux'

const InitialState = {
    name: '',
    email: '',
    disease: '',
    age: ''
}

const RegisterationReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'REGISTER_PATIENT':
        return { ...state, payload: action.payload }
    }
}


export default combineReducers({
    RegisterationReducer
})