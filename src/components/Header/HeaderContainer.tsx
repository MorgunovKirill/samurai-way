import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import api from "../../api/api";

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
        api.getMe().then((data) => {
            if(data.resultCode === 0) {
                const {id, login, email} = data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
