import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import Button from "../UI/Button";
import { useBookedSessionsSelector } from "../../store/hooks";

type UpcomingSessionsProps = {
    onClose: () => void;
}

export default function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
    const modal = useRef<ModalHandle>(null)

    const bookedSessions = useBookedSessionsSelector((state) =>
        state.sessions
    )

    useEffect(() => {
        if (modal.current) {
            modal.current.open()



        }
    }, [])

    return (
        <Modal ref={modal} onClose={onClose}>
            <h2>Upcoming Sessions</h2>
            <ul>

            </ul>
            <Button onClick={onClose}>Close</Button>
        </Modal>
    )
}