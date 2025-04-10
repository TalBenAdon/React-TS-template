import SessionsList from "../Components/Sessions/SessionsList";
import { SESSIONS } from "../dummy-sessions";

// *** sessions page layout *** // 
export default function SessionsPage() {
    return (
        <main className="sessions-page">
            <header>
                <h2>sessionsTitle</h2>
                <p>sessions explainations</p>
            </header>
            <SessionsList sessions={SESSIONS} />
        </main>
    )
}