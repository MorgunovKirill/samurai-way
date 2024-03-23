import {UserType} from "../../types";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./UsersC";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userId: number, followed: boolean) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number, followed: boolean) => dispatch(followAC(userId, followed)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (newCurrentPage: number) => dispatch(setCurrentPageAC(newCurrentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;



