import React, {ChangeEvent} from "react";


type ProfileStatusPropsType = {
    status: string,
    updateUserStatus: (status: string) => void,
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: evt.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true,
            }
        )
    }

    dectivateEditMode = () => {
        this.props.updateUserStatus(this.state.status)
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
                    this.state.editMode ?
                        <input
                            autoFocus={true}
                            onBlur={() => this.dectivateEditMode()}
                            type="text"
                            value={this.state.status}
                            onChange={this.onChangeHandler}
                        /> :
                        <p onDoubleClick={()=>this.activateEditMode()}>Status: {this.props.status ? this.props.status : '-----' } </p>
                }
            </div>
        )
    }
}

export default ProfileStatus
