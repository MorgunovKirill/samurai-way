import React, {FC} from 'react';
import styles from './Login.module.css'
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
}

type LoginPropsType = {
    loginTC: (data: LoginType) => void
}

const Login: FC<LoginPropsType> = ({loginTC}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        // validate: values => {
        //     const errors: FormikErrorType = {}
        //     if (!values.email) {
        //         errors.email = 'Required'
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address'
        //     }
        //     if (!values.password) {
        //         errors.password = 'Required'
        //     }
        //     return errors
        // },
        onSubmit: values => {
            loginTC(values)
            formik.resetForm()
        }
    })

    return (
        <div className={styles.container}>
           <h1 className={styles.title}>Login page</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.formContainer}>
                    <input
                        type="text"
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={styles.formContainer}>
                    <input
                        type="password"
                        {...formik.getFieldProps('password')}
                    />
                </div>
                <div className={styles.formContainer}>
                    <label>
                        <input
                            type="checkbox"
                            checked={formik.values.rememberMe}
                            {...formik.getFieldProps('rememberMe')}
                        />
                        <span>Remember me</span>
                    </label>
                </div>
                <div>
                    <button type='submit' className={styles.submitBtn}>Log in</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
