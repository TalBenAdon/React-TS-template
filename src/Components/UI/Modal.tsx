import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// defines what functionality the parent gets when uses a ref to this modal, the exposed method.
export type ModalHandle = {
    open: () => void;
}

// props for the modal
type ModalProps = {
    children: ReactNode;
    onClose: () => void;
}

// forward ref is used to allow the parent to pass a ref to this component
const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, onClose }, ref) {

    // setting up a ref to the dialog DOM element 
    const dialog = useRef<HTMLDialogElement>(null)

    // when the parent component uses this ref, expose an object with the following function. (and open function that runs dialog.current.showModal())
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                if (dialog.current) {
                    dialog.current.showModal(); // html element specific method, blocks interaction with background, opens it as a modal
                }
            }
        }
    })

    // renders the dialog element into a dom node outside the main root app. defined in the HTML
    return createPortal(
        <dialog ref={dialog} className="modal" onClose={onClose}>
            {children}
        </dialog>,
        document.getElementById('modal-root')!
    );
});

export default Modal

