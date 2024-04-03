import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string,
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void,
}

export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then((res) => {
            if(res.data.resultCode === 0) {
                const {id, login, email} = res.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
