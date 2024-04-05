import {UserType} from "../../types";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {followTC, getUsersTC, setCurrentPage, unFollowTC} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    setCurrentPage: (newCurrentPage: number) => void,
    toggleFollowingProgress: (id: number, isFetching: boolean) => void,
    getUsersTC: (currentPage: number, pageSize:number) => void,
    followTC: (userId: number) => void,
    unFollowTC: (userId: number) => void,
}

export type UsersPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersTC(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                followTC={this.props.followTC}
                unFollowTC={this.props.unFollowTC}
            />}
        </>
    }
}

export default connect(mapStateToProps, {
    setCurrentPage,
    getUsersTC,
    followTC,
    unFollowTC
})(UsersContainer);



