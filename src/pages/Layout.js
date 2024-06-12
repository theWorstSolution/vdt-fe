import { Link, Outlet } from "react-router-dom";
import { globalContext } from "../globalContext";
import firebase from 'firebase/compat/app';
import { useContext } from "react";

export default function Layout() {
    const { user, setUser } = useContext(globalContext);
    return (<div>
        <div style={{textAlign:"right"}}>
        {user?<Link onClick={() => firebase.auth().signOut()}>Logout</Link>:
            <Link to={'/login'}>Login</Link>}</div>
        <Outlet />
    </div>)
}