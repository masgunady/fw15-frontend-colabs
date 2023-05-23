// import React from 'react'

export default function LoginForm() {
    return (
        <>
            <form action="submit" className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Adress :</label>
                    <input type="text" placeholder="Enter your email adress" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Password :</label>
                    <input type="text" placeholder="Enter your password " className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary rounded-2xl mt-10">Login</button>
            </form>
        </>
    )
}
