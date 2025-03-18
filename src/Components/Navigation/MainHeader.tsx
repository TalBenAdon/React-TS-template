import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";


export default function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false)

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true)
    }


    return (
        <header className="main-header">
            <h1>Title</h1>
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
                        <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}