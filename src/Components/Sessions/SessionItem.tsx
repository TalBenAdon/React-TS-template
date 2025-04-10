import Button from "../UI/Button"
import { Session } from "../../store/sessions-slice"

// *** component containing session item structure *** // 

// type of each session item
type SessionItemProps = Pick<Session, "id" | "title" | "summary" | "image">


export default function SessionItem({ id, title, summary, image }: SessionItemProps) {
    return (
        <article className="session-item">
            <img src={image} alt={title} />
            <div className="session-data">
                <div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
                <p className="actions">
                    <Button to={id}>Learn More</Button>
                </p>
            </div>
        </article>
    )
}