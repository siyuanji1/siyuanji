import { Link } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import {useAuth} from "../../auth/Auth";


export default function NavigationPC(props) {
    const {user, logout} = useAuth();

    // Event handler for sign out
    const handleSignOut = (event) => {
      console.log("signing out");
      signOut(getAuth())
        .then(() => {
          logout();
          window.location.href = "/signin";
        })
    }

    // Navigation items
    const navItemArray = props.navList.map((item, index) => {
        return (
            <li key={index}>
                <Link to={item.link} aria-label={item.ariaLabel}>
                    {item.name}
                </Link>
            </li>
        )
    })

    return (
        <div className="nav-container">
            <div className="brand-container">
                <ul>
                    <li className="brand">
                        <Link to='/' aria-label="Home">
                            <img src="/img/icon.png" alt="Logo"
                                style={{
                                    height: '24px',
                                    marginRight: '5px',
                                }} />
                            Furever Home
                        </Link>
                    </li>
                    <li>
                        <ul id='nav-pages'>
                            {navItemArray}
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="login-container">
                <div id='login-block'>
                    <ul className="login">
                        {user &&
                            <>
                            <li>
                            <button className={'btn'} aria-label="Sign Out" onClick={handleSignOut}>Sign Out</button>
                            </li>
                            </>
                        }
                        {!user  &&
                            <li><a href="signin" aria-label="Login">Sign in</a></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
