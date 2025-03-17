import { useState } from "react";
import { NavLink } from "react-router-dom";


export default function MainHeader() {
    const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false)

    return (
        <header>
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
                        <button onClick={() => { }}>Upcoming Sessions</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}