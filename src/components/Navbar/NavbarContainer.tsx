import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {SideBarType} from "../../types";
import {Dispatch} from "redux";
import Navbar from "./Navbar";

type MapStatePropsType = {
    sidebar: SideBarType
}

type MapDispatchToPropsType = {

}

export type NavbarPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
