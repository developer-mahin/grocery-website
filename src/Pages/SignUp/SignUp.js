import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_CONTEXT } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { createAccount, updateProfileInfo, googleSingIn } = useContext(AUTH_CONTEXT)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    //  create account with email and password

    const handleSinUp = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const image = form.image.files[0]

        const formData = new FormData()
        formData.append("image", image)

        const url = `https://api.imgbb.com/1/upload?key=b486f58b0681b7c344264f43dd69a0d8`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {

                const image = data.data.display_url
                createAccount(email, password)
                    .then(result => {
                        const user = result.user
                        updateProfileInfo(name, image)
                        navigate("/")
                        toast.success("successfully user created")
                        setLoading(false)
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoading(false)
                    })

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
                    Create account
                </h2>
                <form onSubmit={handleSinUp}>
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
                        <label>Enter name</label>
                        <input
                            className='w-full px-4 py-2 rounded border border-green-300 focus:outline-green-500'
                            type="text"
                            name='name'
                            required
                            placeholder='Email name'
                        />
                    </div>
                    <div className='py-2'>
                        <label>Your photo</label>
                        <input
                            className='w-full py-2'
                            type="file"
                            name='image'
                            required
                            accept="image/*"
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
                        {loading ? "Loading..." : "Sign Up"}
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
                    <p>Already have an account than &nbsp;
                        <Link to="/signin" className='text-blue-500 hover:underline'>Signin</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;