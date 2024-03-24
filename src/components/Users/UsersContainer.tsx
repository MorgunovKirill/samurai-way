import {UserType} from "../../types";
import {RootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

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

class UsersContainer extends React.Component<UsersPropsType> {
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);



