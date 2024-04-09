import React from "react";


type ProfileStatusPropsType = {
    status: string,
    updateUserStatus:  (status: string) => void,
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true,
            }
        )
    }

    dectivateEditMode = () => {
        this.setState(
            {
                editMode: false,
            }
        )
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ? <input autoFocus={true} onBlur={() => this.dectivateEditMode()} type="text" value={this.props.status}/> :
                        <p onDoubleClick={()=>this.activateEditMode()}>Status: {this.props.status} </p>
                }
            </div>
        )
    }
}

export default ProfileStatus
