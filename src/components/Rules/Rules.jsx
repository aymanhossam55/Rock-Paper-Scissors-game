import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

import rules from "../../assets/image-rules.svg";

import "./rules.css";

const Rules = () => {
    const showRules = () => {
        Swal.fire({
            title: "Rules",
            imageUrl: rules,
            imageAlt: "Rock Paper Scissors rules",
            showCloseButton: true,
            showConfirmButton: false,
            background: "#ffffff",
            heightAuto: false,
            customClass: {
                popup: "rules-popup",
            },
        });
    };

    return (
        <div className="rules">
            <Button
                type="button"
                className="rules-btn"
                onClick={showRules}
            >
                Rules
            </Button>
        </div>
    );
};

export default Rules;