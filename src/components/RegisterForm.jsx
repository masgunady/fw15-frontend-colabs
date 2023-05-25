// import React from 'react'
import http from "../helper/http"
export default function RegisterForm() {

    const handleSubmit = async (e) => {

        e.preventDefault(e)
        const { value: email } = e.target.email
        const { value: password } = e.target.password
        const { value: phone } = e.target.phone
        const { data } = await http().post('/auth/register', (email, password, phone))
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Adress :</label>
                    <input name="email" type="text" placeholder="Enter your email adress" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Password :</label>
                    <input name="password" type="password" placeholder="Enter your password " className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Phone Number :</label>
                    <input name="phone" type="tel" placeholder="Enter your phone number" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary rounded-2xl mt-5 md:mt-5">Sign Up</button>
            </form>
        </>
    )
}
