import React from 'react'
import { NavLink } from 'react-router-dom';
import Translate from 'react-translate-component'
const NavigationBar = ()=>{
    return(
        
        <nav className="navbar navbar-expand-md navbar-light  mt-5">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/"><Translate content="LinkAll"/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/UnderReview"><Translate content="LinkUnderReview"/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/IntialAcceptance"><Translate content="LinkInitialAcceptance"/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/ConditionalAcceptance"><Translate content="LinkConditionalAcceptance"/></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Rejected"><Translate content="LinkRejected"/></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;