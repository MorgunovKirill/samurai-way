import {SideBarType} from "../types";
import {UnionActionType} from "./store";


const initialState: SideBarType =  {
    friends: [
        {id: '1', name: 'Ivan'},
        {id: '3', name: 'Katya'},
        {id: '5', name: 'Emery'},
    ]
}

const sidebarReducer = (state: SideBarType = initialState, action: UnionActionType) => {
    switch (action.type) {
        default: return state
    }
}

export default sidebarReducer;
