import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    const isLogin = localStorage.getItem("token");

    return (
        <Router>
        <div>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* <li>
                <Link to="/coba">Dashboard</Link>
            </li> */}
            </ul>

            <hr />

            {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
            */}
            <Switch>
                <Route exact path="/">
                    {isLogin ? <Redirect to='/dashboard' /> : <Home />}
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/dashboard">
                    {isLogin ? <Dashboard /> : <Redirect to='/' />}
                </Route>
                {/* <Route path="/coba">
                    {isLogin ? <Dashboard /> : <Home />}
                </Route> */}
            </Switch>
        </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Home</h2>
            <div style={{textAlign: 'center'}}> 
                <button onClick={() => {localStorage.setItem("token", "semangatttt!");window.location.reload()}}>login</button>
            </div>
        </div>
    );
    }

    function About() {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>About</h2>
        </div>
    );
    }

    function Dashboard() {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Dashboard</h2>
            <div style={{textAlign: 'center'}} >
                <Link to="/about">
                    <button >About</button>
                </Link>
            </div>
            
            

        </div >
    );
}

function Coba() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}