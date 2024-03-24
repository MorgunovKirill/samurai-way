import React from "react";
import LoadingIcon from './Loading_icon.gif'

export const Preloader = () => {
    return <div style={{backgroundColor: '#ffffff'}}>
        <img src={LoadingIcon} />
    </div>
}
