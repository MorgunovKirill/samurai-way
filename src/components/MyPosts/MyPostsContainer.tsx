import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../redux/redux-store";
import {ProfilePageType} from "../../types";
import {Dispatch} from "redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
