import React from 'react';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; //install option 1

import HeaderBackground from './headerFooter/Header-background';
import { useAuth } from "../auth/Auth";
import { useNavigate } from "react-router-dom";

const bgData = {
    class: 'bg-image',
    title: 'Find Your Furever Pet Friend!',
    subTitle: 'Discover the perfect pet waiting for a loving home.'
}




export default function SignInPage(props) {
    // Component state
    const { login } = useAuth();
    const navigate = useNavigate();

    // Define firebase UI config object
    const firebaseUIConfig = {
        signInOptions: [ //array of sign in options supported
            //array can include just "Provider IDs", or objects with the IDs and options
            { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
            GoogleAuthProvider.PROVIDER_ID
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
            signInSuccessWithAuthResult: (data) => {
                login(data.user);
                navigate('/search', {
                    replace: true
                })
                return false; //don't redirect after authentication
            }
        }
    }


    return (
        <div>
            <HeaderBackground
                class={bgData.class}
                title={bgData.title}
                subTitle={bgData.subTitle}
            />
            <div className="card bg-light" style={{ paddingBottom: '400px' }}>
                <div className="container card-body" >
                    <StyledFirebaseAuth
                        uiConfig={firebaseUIConfig}
                        firebaseAuth={getAuth()} />
                </div>
            </div>
        </div>

    )
}