import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from "yup"

const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Please enter your first name!"),
    lastName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Please enter your last name!"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required email")
})

const FormRegister = () => {
    return (
        <div>
            <h1>Sign up</h1>
            <Formik 
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: ""
                }}
                validationSchema={SignUpSchema}
                onSubmit={values => {
                    console.log(values)
                }}
            >
                {({errors, touched}) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName"/>
                        {errors.firstName && touched.firstName && (
                            <div>{errors.firstName}</div>
                        )}
                        <br></br>

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName"/>
                        {errors.lastName && touched.lastName && (
                            <div>{errors.lastName}</div>
                        )}
                        <br></br>

                        <label htmlFor="email">Email</label>
                        <Field name="email"/>
                        {errors.email && touched.email && (
                            <div>{errors.email}</div>
                        )}
                        <br></br>
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormRegister