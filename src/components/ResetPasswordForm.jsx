// import React from 'react'

export default function ResetPasswordForm() {
    return (
        <>
            <form action="submit" className="flex flex-col gap-4 px-16">
                <div className="flex flex-col gap-2">
                    <label htmlFor="code">Insert Code :</label>
                    <input type="text" name="code" placeholder="Enter your Code" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email Adress :</label>
                    <input type="text" placeholder="Enter your email adress" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password :</label>
                    <input type="text" placeholder="Enter your password " className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Confirm Password :</label>
                    <input type="tel" name="confirm" placeholder="Enter your phone number" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary rounded-2xl mt-5 md:mt-5">Sign Up</button>
            </form>
        </>
    )
}
