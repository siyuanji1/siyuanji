import NavigationPC from '../nav/Navigation-pc.js'
import NavigationMobie from '../nav/Navigation-mobie.js'


export default function Header(props) {    
    // Define navigation list and pass it to navigation component
    const navList = [
        {
            link: '/',
            ariaLabel: 'Go to Home Page',
            name: 'Home'
        },
        {
            link: '/search',
            ariaLabel: 'Go to Search Page',
            name: 'Search'
        },
        {
            link: '/compare',
            ariaLabel: 'Go to Compare Page',
            name: 'Compare'
        },
        {
            link: '/favorite',
            ariaLabel: 'Go to Favorite List Page',
            name: 'Favorite List'
        },
        {
            link: '/app',
            ariaLabel: 'Go to Application Page',
            name: 'Application'
        },
    ]
    

    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <NavigationPC navList={navList}></NavigationPC>
                <NavigationMobie navList={navList}></NavigationMobie>
            </nav>
        </header>
    );
}