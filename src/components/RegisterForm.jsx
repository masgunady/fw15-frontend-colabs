// import React from 'react'

export default function RegisterForm() {
    return (
        <>
            <form action="submit" className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Adress :</label>
                    <input type="text" placeholder="Enter your email adress" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Password :</label>
                    <input type="text" placeholder="Enter your password " className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Phone Number :</label>
                    <input type="tel" placeholder="Enter your phone number" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary rounded-2xl mt-5 md:mt-5">Sign Up</button>
            </form>
        </>
    )
}
