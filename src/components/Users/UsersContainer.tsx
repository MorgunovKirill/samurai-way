import {UserType} from "../../types";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number, followed: boolean) => void,
    setUsers: (users: UserType[]) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number, followed: boolean) => dispatch(followAC(userId, followed)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;



