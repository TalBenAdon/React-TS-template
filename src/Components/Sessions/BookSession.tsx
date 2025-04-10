import { FormEvent, useEffect, useRef } from "react";
import { Session } from "../../store/sessions-slice"
import Modal, { ModalHandle } from "../UI/Modal";
import { useBookedSessionsDispatch } from "../../store/hooks";
import { bookSession as AddSession } from "../../store/sessions-slice";
import Input from "../UI/Input";
import Button from "../UI/Button";

// *** component containing session item structure *** // 


type BookSessionProps = {
    session: Session
    onDone: () => void;
}

export default function BookSession({ session, onDone }: BookSessionProps) {
    const modal = useRef<ModalHandle>(null)

    //redux dispatch
    const dispatch = useBookedSessionsDispatch();

    useEffect(() => {
        if (modal.current) {
            modal.current.open();
        }
    }, [])

    //Conventional handleSubmit. the type of the event is FormEvent whos generic is HTMLFormElement
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        console.log(data); // normally sent to server with session info
        dispatch(AddSession(session))
        onDone();
    }

    return (
        <Modal ref={modal} onClose={onDone}>
            <h2>Book Session</h2>
            <form onSubmit={handleSubmit}>
                <Input label="Your name" id="name" name="name" type="text" />
                <Input label="Your email" id="email" name="email" type="email" />
                <p className="modal-buttons">
                    <Button type="button" textOnly onClick={onDone}>
                        Cancel
                    </Button>
                    <Button>
                        Book Session
                    </Button>
                </p>
            </form>
        </Modal>
    )

}