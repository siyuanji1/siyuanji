export default function Footer(props) {
    return (
        <footer>
            <div className="footer-container">
                <h1 aria-label="Contact us">Contact us</h1>
                <p><a href="mailto:email@coffee.uw.edu" aria-label="Send an email to siyuanji@uw.edu"><span className="material-icons">Email: </span> siyuanji@uw.edu</a></p>
                <p><a href="tel:555-123-4567" aria-label="Call us at 206-830-0978"><span className="material-icons">Phone: </span> 206-830-0978</a></p>
                <p>&copy; Furever Home 2023</p>
            </div>
        </footer>
    );
}
