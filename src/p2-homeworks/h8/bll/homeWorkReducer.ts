import {UserType} from "../HW8";



type ActionsType =
    { type: 'sort', payload: 'up' | 'down' } |
    { type: 'check', payload: number }



export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload === 'up' ?
                [...state].sort((a,b)=>a.name.localeCompare(b.name)):
                [...state].sort((a,b)=>b.name.localeCompare(a.name));

        }
        case 'check': {
            // need to fix
            return state.filter(age=>age.age >= action.payload);
        }
        default: return state
    }
}