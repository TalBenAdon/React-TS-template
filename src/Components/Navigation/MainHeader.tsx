import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import UpcomingSessions from "../Sessions/UpcomingSessions";

// Typical Navlink Header with "isActive" classes

export default function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false)

    function showUpcomingSessions() {
        setUpcomingSessionsVisible(true)
    }

    function HideUpcomingSessions() {
        setUpcomingSessionsVisible(false)
    }

    return (
        <>
            {upcomingSessionsVisible && <UpcomingSessions onClose={HideUpcomingSessions} />}
            <header className="main-header">
                <h1>Mentoring</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? 'active' : ''} end>
                                Our Mission
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"sessions"} className={({ isActive }) => isActive ? 'active' : ''}>
                                Browse Sessions
                            </NavLink>
                        </li>
                        <li>
                            <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}