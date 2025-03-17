import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false)

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true)
    }


    return (
        <header className="main-header">
            <h1></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"} end>
                            Our Mission
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"sessions"}>
                            Browse Sessions
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={showUpcomingSessions}>Upcoming Sessions</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}