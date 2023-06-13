import { useLocation } from "react-router-dom";

export default function ErrorPage(props) {
    const path = useLocation().pathname 

    return (
        <div style={{height:'400px'}}>
            <h1 style={{textAlign:'center', paddingTop:'80px'}}>Not Found</h1>
            <p style={{textAlign:'center'}}>The requested URL {path}  was not found on this server.</p>
        </div>
    );
}