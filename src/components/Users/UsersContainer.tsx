import {UserType} from "../../types";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import api from "../../api/api";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: number, followed: boolean) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component<UsersPropsType> {
    getUsers = () => {
        this.props.toggleIsFetching(true);
        api.fetchUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.toggleIsFetching(false);
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        api.fetchUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items)
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
            />}
        </>
    }
}

export default connect(mapStateToProps, {
    follow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);



