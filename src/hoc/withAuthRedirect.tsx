import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";

const withAuthRedirect = <T,>(Component: ComponentType<T>) => {

    function RedirectComponent(props: MapStateToPropsType) {
        const {isAuth, ...restProps} = props;

            if (!isAuth) return <Redirect to={'/login'} />

            return <Component {...restProps as T} />
    }

    type MapStateToPropsType = {
        isAuth: boolean
    }
    const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectedRedirectComponent
};

export default withAuthRedirect;
