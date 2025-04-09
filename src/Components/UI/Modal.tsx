import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// Defines the methods exposed to the parent component when a ref is passed to the modal (in this case, the open method).
export type ModalHandle = {
    open: () => void;
}

// props for the modal
type ModalProps = {
    children: ReactNode;
    onClose: () => void;
}

// The forwardRef function is used to allow the parent to pass a ref to the modal component so that the parent can directly call methods like open on the modal.
const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, onClose }, ref) {

    // setting up a ref to the dialog DOM element 
    const dialog = useRef<HTMLDialogElement>(null)

    // When the parent component uses the ref, useImperativeHandle exposes the open function, which calls dialog.current.showModal() to open the modal.
    useImperativeHandle(ref, () => {
        return {
            open: () => {
                if (dialog.current) {
                    dialog.current.showModal(); // Renders the <dialog> element into a DOM node outside the root app, which is defined in the HTML with the id='modal-root'.
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

