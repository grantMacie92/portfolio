import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./socialLinks.css";

export function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://github.com/yourname" aria-label="GitHub">
                <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/macie-grant-960932185/" aria-label="LinkedIn">
                <FaLinkedin className="icon" />
            </a>
        </div>
    );
}