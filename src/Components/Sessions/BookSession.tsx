import { FormEvent, useEffect, useRef } from "react";
import { Session } from "../../store/sessions-slice"
import Modal, { ModalHandle } from "../UI/Modal";
import { useBookedSessionsDispatch } from "../../store/hooks";
import { BookSession as AddSession } from "../../store/sessions-slice";
import Input from "../UI/Input";

type BookSessionProps = {
    session: Session
    onDone: () => void;
}

export default function BookSession({ session, onDone }: BookSessionProps) {
    const modal = useRef<ModalHandle>(null)
    const dispatch = useBookedSessionsDispatch();

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, [])

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        console.log(data); // normally sent to server
        dispatch(AddSession({ session.id, title, summary, date }))
        onDone();
    }

    return (
        <Modal onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
            </form>
        </Modal>
    )

}