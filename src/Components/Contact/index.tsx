import { FaPhone, FaEnvelope } from "react-icons/fa";
import profile from "../../assets/profile.jpg";
import useMediaQuery from "../../hooks/useMediaQuery.tsx";
import { SocialLinks } from "../SocialLinks/SocialLinks.tsx";
import "./index.css";

const Contact = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <footer id="contact" className="contact">
            {isMobile && <h2>Contact</h2>}

            <div className="contactCard">
                <div className="contactLeft">
                    <div className="pfp">
                        <img className="image" src={profile} alt="Portrait of Macie Grant" />
                    </div>

                    <div className="contactBlurb">
                        <h3 className="contactTitle">Let’s connect</h3>
                        <p className="contactText">
                            Reach out anytime — I’m happy to chat about roles, projects, or collaboration.
                        </p>
                    </div>
                </div>

                <div className="contactRight">
                    <a className="contactRow" href="tel:+13053360594">
                        <span className="contactIcon" aria-hidden="true">
                          <FaPhone />
                        </span>
                        <span className="contactMeta">
                            <span className="contactLabel">Phone</span>
                            <span className="contactValue">(305) 336-0594</span>
                        </span>
                    </a>

                    <a className="contactRow" href="https://mail.google.com/mail/?view=cm&fs=1&to=grant.macie92@gmail.com">
                        <span className="contactIcon" aria-hidden="true">
                          <FaEnvelope />
                        </span>
                        <span className="contactMeta">
                          <span className="contactLabel">Email</span>
                          <span className="contactValue">grant.macie92@gmail.com</span>
                        </span>
                    </a>

                    <div className="contactSocial">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;