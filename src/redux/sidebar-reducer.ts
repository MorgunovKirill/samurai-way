import {SideBarType} from "../types";
import {UnionActionType} from "./store";

const sidebarReducer = (state: SideBarType, action: UnionActionType) => {
    switch (action.type) {
        default: return state
    }
}

export default sidebarReducer;
