import { type Session } from "../../store/sessions-slice"
import Button from "../UI/Button";

// *** an upcoming session component *** // 

// Upcoming session uses only some data of the session object, so typescript "Pick" is used
type UpcomingSessionProps = {
    session: Pick<Session, 'id' | 'title' | 'summary' | 'date'>;
    onCancel: () => void;
}

export default function UpcomingSession({ session, onCancel }: UpcomingSessionProps) {

    const date: Date = new Date(session.date)
    return (
        <article className="upcoming-session">
            <div>
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <time dateTime={date.toISOString()}>
                    {date.toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </time>
            </div>
            <p className="actions">
                <Button textOnly onClick={onCancel}>
                    Cancel
                </Button>
            </p>
        </article>
    )

}