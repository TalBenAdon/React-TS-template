import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import Button from "../UI/Button";
import { useBookedSessionsDispatch, useBookedSessionsSelector } from "../../store/hooks";
import { cancelSession } from "../../store/sessions-slice";
import UpcomingSession from "./UpcomingSession";

// *** component containing and managing upcoming sessions *** // 

// Because the upcoming sessions is opening a modal, we give it an "onClose" prop from the MainHeader
type UpcomingSessionsProps = {
    onClose: () => void;
}


export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null)

    // redux dispatch
    const dispatch = useBookedSessionsDispatch();

    // redux selector
    const bookedSessions = useBookedSessionsSelector((state) =>
        state.sessions
    )

    
    function handleCancelSession(sessionId: string) {
        dispatch(cancelSession(sessionId))
    }

    
    useEffect(() => {
        if (modal.current) {
            modal.current.open()

        }
    }, [])

    const hasSessions = bookedSessions.length > 0;

    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            {hasSessions &&
                (<ul>
                    {bookedSessions.map(session =>
                        <li key={session.id}>
                            <UpcomingSession session={session} onCancel={() => handleCancelSession(session.id)} />
                        </li>
                    )}
                </ul>)}
            {!hasSessions && <p>No Upcoming sessions.</p>}
            <p className="actions">
                <Button onClick={onClose}>Close</Button>
            </p>
        </Modal>
    )
}