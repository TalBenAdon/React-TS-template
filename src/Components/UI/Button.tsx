import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { Link, type LinkProps } from "react-router-dom";

// *** custom button component, acts as a link or a button *** // 


// Base type of the component. children (JSX) and a textOnly boolean (implying different style)
type BaseProps = {
    children: ReactNode;
    textOnly?: boolean;
}


// Button props type. button tag attributes + base props. 
// Link requires "to", we imply it "never" has it.
type ButtonProps = ComponentPropsWithoutRef<"button"> & BaseProps & { to?: never }


// Apply the react-router-dom LinkProps interface + BaseProps type + to.
type ButtonLinkProps = LinkProps & BaseProps & { to: string }


// Type guard determines if the component is used as a Link or a Button.
// If 'to' key exists within props, props is ButtonLinkProps type.
function isRouterLink(props: ButtonProps | ButtonLinkProps): props is ButtonLinkProps {
    return 'to' in props;
}


export default function Button(props: ButtonProps | ButtonLinkProps) {
    if (isRouterLink(props)) {
        const { children, textOnly, ...otherProps } = props;
        return (
            <Link className={`button ${textOnly ? 'button--text-only' : ''}`} {...otherProps}>
                {children}
            </Link>
        )
    }

    const { children, textOnly, ...otherProps } = props;
    return (
        <button className={`button ${textOnly ? 'button--text-only' : ''}`}{...otherProps}>
            {children}
        </button>
    )
}