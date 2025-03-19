import SessionsList from "../Components/Sessions/SessionsList";
import { SESSIONS } from "../dummy-sessions";

export default function SessionsPage() {
    return (
        <main>
            <header>
                <h2>sessionsTitle</h2>
                <p>sessions explainations</p>
            </header>
            <SessionsList sessions={SESSIONS} />
        </main>
    )
}