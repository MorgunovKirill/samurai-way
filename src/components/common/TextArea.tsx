import React, {FC} from 'react';

type TextAreaPropsType = {
    placeholder?: string
    error?: string,
    touched?: boolean,
    name: string,
    value: string,
    onChange: any,
    onBlur: any
}
const TextArea: FC<TextAreaPropsType> = ({error, touched, placeholder, ...props}) => {
    return (
        <div>
            <textarea placeholder={placeholder} {...props}/>
            {touched && error &&
                <div style={{color: 'red'}}>{error}</div>}
        </div>
    );
};

export default TextArea;
