import { useParams } from "react-router-dom"
import { SESSIONS } from "../dummy-sessions";
import Button from "../Components/UI/Button";


export default function SessionPage() {
    const params = useParams<{ id: string }>()

    const sessionId = params.id
    const currentSession = SESSIONS.find(session => session.id === sessionId)

    if (!currentSession) {
        return (
            <main className="session-page">
                <p>Session not found!</p>
            </main>
        )
    }

    return (
        <main className="session-page">
            <article>
                <header>
                    <img src={currentSession.image} alt={currentSession.title} />
                    <div className="session-details">

                        <h2>{currentSession.title}</h2>
                        <time dateTime={new Date(currentSession.date).toISOString()}>
                            {new Date(currentSession.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })

                            }
                        </time>
                        <p><Button onClick={() => { }}>Book Session</Button></p>
                    </div>
                </header>
                <p className="content">{currentSession.description}</p>
            </article>
        </main>
    )
}