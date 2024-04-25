import {connect} from "react-redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../redux/redux-store";
import {ProfilePageType} from "../../types";
import {addPost} from "../../redux/profile-reducer";

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts);

export default MyPostsContainer;
