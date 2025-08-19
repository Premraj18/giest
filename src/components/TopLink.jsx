import { Link} from "react-router-dom";

// This component redirects to another page, and forces the scroll position to the top of the page when clicked.
export default function TopLink({ onClick, ...props }) {
    return (
        <Link
            {...props}
            onClick={(e) => {
                window.scrollTo(0, 0); // force top
                onClick?.(e);
            }}
        />
    );
}