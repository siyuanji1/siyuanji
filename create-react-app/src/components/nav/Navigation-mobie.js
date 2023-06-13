import { Link } from "react-router-dom";
import {useAuth} from "../../auth/Auth";
import {getAuth, signOut} from "firebase/auth";

export default function NavigationMobile(props) {
    const {user, logout} = useAuth();

    // Event handler for sign out
    const handleSignOut = (event) => {
        console.log("signing out");
        signOut(getAuth())
          .then(() => {
              logout()
              window.location.href = "/signin";
          })
    }
    
    // Navigation items
    const navItemArray = props.navList.map((item, index) => {
        return (
            <li className="nav-item" key={index}>
                <Link to={item.link} className="hover-orange" aria-label={item.ariaLabel}>
                    {item.name}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        { navItemArray }
                        <li>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 login-signup">
                                {!user && (
                                  <li className="nav-item">
                                    <a className="nav-link highlight" href="signin"  aria-label="Log in Page">Sign in</a>
                                  </li>
                                )}

                               {user && (
                                 <li className="nav-item">
                                   <span onClick={handleSignOut} className="nav-link highlight"  aria-label="Sign Out">Sign Out</span>
                                 </li>
                               )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
