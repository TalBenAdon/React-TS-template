import SessionItem from "./SessionItem";
import { Session } from "../../store/sessions-slice";

// *** component containing the list of available sessions *** // 


// Props types of session[]. Pick used for comfortable usage.
type SessionsListProps = {
    sessions: Pick<Session, "id" | "title" | "summary" | "image">[]
}

export default function SessionsList({ sessions }: SessionsListProps) {

    return (
        <ul className="sessions-list">
            {sessions.map((session) => (
                <li key={session.id}>
                    <SessionItem {...session} />
                </li>
            ))}
        </ul>
    )
}