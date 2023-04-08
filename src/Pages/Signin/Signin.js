import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Signin = () => {

    useTitle("Sign In")
    const { loginUser, googleSingIn } = useContext(AUTH_CONTEXT)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    //  Login with email and password
    const handleSignin = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user
                navigate("/")
                toast.success("successfully user login")
                setLoading(false)
            })
            .catch(error => {
                toast.error(error.message)
                setLoading(false)
            })
    }


    // login with  google authentication
    const handleGoogleSignin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                toast.success("successfully user login")
                navigate("/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className='lg:w-[450px] w-full mx-auto px-3 lg:my-16 my-8 '>
            <div className='border rounded p-3'>
                <h2 className='text-3xl font-semibold text-center'>
                    Login User
                </h2>
                <form onSubmit={handleSignin}>
                    <div className='py-2'>
                        <label>Enter email</label>
                        <input
                            className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                            type="email"
                            name='email'
                            required
                            placeholder='Email address'
                        />
                    </div>
                    <div className='py-2'>
                        <label>Enter password</label>
                        <input
                            className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                            type="password"
                            name='password'
                            required
                            placeholder='*******'
                        />
                    </div>
                    <button className='px-8 py-2 rounded-full border-2 border-green-500 hover:bg-green-500 font-semibold duration-300 mt-4'>
                        {loading ? "Loading..." : "Sign in"}
                    </button>
                </form>
                <div className='flex items-center gap-3'>
                    <hr className='w-1/2' />
                    or
                    <hr className='w-1/2' />
                </div>
                <div>
                    <button
                        onClick={handleGoogleSignin}
                        className='px-8 py-2 rounded-full border-2 border-green-500 hover:bg-green-500 font-semibold duration-300 mt-4 w-full flex items-center justify-center gap-2'>
                        <FcGoogle className='text-xl' />
                        <span>Continue with google</span>
                    </button>
                </div>
                <div className='my-2 text-center'>
                    <p>If are you new, then &nbsp;
                        <Link to="/signup" className='text-blue-500 hover:underline'>create account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;