import React, {Fragment, useState} from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm()

    const onSubmit = (data, e) => {

        e.target.reset();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input type="text" name="name" ref={
                    register({
                        required: {
                            value: true,
                            message: 'Required name'
                        },
                        maxLength: {
                            value: 8,
                            message: 'No mas de 8 caracter'
                        },
                        minLength:{
                            value:2,
                            message: 'Minimo 2 caracter'
                        }
                    })
                }/>
                <div>
                    {errors?.name?.message}
                </div>
                <label>UserName</label>
                <input type="text" name="username" ref={
                    register({
                        required: {
                            value: true,
                            message: 'Required name'
                        },
                        maxLength: {
                            value: 8,
                            message: 'No mas de 8 caracter'
                        },
                        minLength:{
                            value:2,
                            message: 'Minimo 2 caracter'
                        }
                    })
                } />
                <div>
                    {errors?.username?.message}
                </div>
                <button type="submit">Edit Users</button>
            </form>
        </Fragment>
    )
}

export default EditUserForm