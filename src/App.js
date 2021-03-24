import React from 'react'
import LoginForm from './components/LoginForm'
import UserLogged from './components/UserLogged'
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from 'react-router-dom'
import './style.css'

function App() {
    return (
        <Router>
            <div className="main">
                <div className="main-content">
                    <Switch>
                        <Route exact path="/" component={LoginForm} />
                        <Route path="/user" component={UserLogged} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
