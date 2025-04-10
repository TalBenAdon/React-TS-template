import { ComponentPropsWithoutRef } from "react";

// *** custom input component *** // 


// Input props type tells us it needs a label and id, and anything in between something an input tag can receive.
type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({ label, id, ...props }: InputProps) {
    return (
        <div className="ui-input">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </div>
    )
}