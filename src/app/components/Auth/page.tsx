import { supabase } from '@/app/CreateClient';
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Authent = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isSignUp) {
            const { error: signUpError } = await supabase.auth.signUp({ email, password })
            if (signUpError) {
                console.error(signUpError.message)
            }
        }
        else {
            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
            if (signInError) {
                console.error(signInError.message)
            }
        }
    }

    return (
        <div className='p-2 text-center'>
            <h2 className='font-bold'> {isSignUp ? "Sign Up" : "Sign In"}</h2>
            <form action="" onSubmit={handleSubmit} className=' flex flex-col'>
                <input type="email"
                    className='border-2 p-2 m-2'
                    placeholder='email'
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setEmail(e.target.value)
                    }} />
                <input type="password"
                    className='border-2 p-2 m-2'
                    placeholder='password'
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value)
                    }} />
                <button type="submit" className="border-2 p-2 m-2">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </button>
            </form>
            <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="border-2 p-2 m-2"
            >
                {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
            </button>
        </div>
    )
}

export default Authent
