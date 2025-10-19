import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const Login = () => {

    const [user, setUser] = useState(null);
    const handleGoogleSingIn = () => {
        // console.log("Google Button is Clicked!");
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // console.log(result);
                setUser(result.user)
                // console.log(result.user.photoURL)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const handleGoogleSignOut = () => {
        console.log('SignOut Button is Clicked!');
        signOut(auth)
            .then(() => {
                console.log('Successfully Signed Out!');
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
            <h2>Please Login!</h2>
            {
                user ? (
                    <button
                        onClick={handleGoogleSignOut}
                        className='btn'>Sign Out
                    </button>)
                    :
                    <button className='btn'
                        onClick={handleGoogleSingIn}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s" alt="" className='h-3/4' />
                        Sign In With Google
                    </button>
            }


            {
                user ? (
                    <div>
                        <h3>{user.displayName}</h3>
                        <h3>Email : {user.email}</h3>
                        {
                            user.photoURL && (
                                <img src={user.photoURL} alt="User Profile" className="w-16 rounded-full" />
                            )
                        }
                    </div>
                ) : <p>No User Signed In</p>
            }
        </div>
    );
};

export default Login;