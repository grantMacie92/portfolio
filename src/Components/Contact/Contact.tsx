import profile from '../../assets/profile.jpg';
import { FaPhone,  FaEnvelope} from "react-icons/fa";
import './contact.css';
import useMediaQuery from "../../hooks/useMediaQuery.tsx";
const Contact = () => {
    const isMobile = useMediaQuery("(max-width: 991px)");

    return (
        <div id="contact">
            {
                isMobile && <h2>Contact</h2>
            }
            <div className="pfp">
                <img className='image' src={profile}/>
            </div>
            <div className="section">
                <span>
                    <FaPhone />
                    <h3> (305)-336-0594</h3>
                </span>
                <span>
                    <FaEnvelope />
                    <h3>grant.macie92@gmail.com</h3>
                </span>
            </div>
        </div>
    )
}

export default Contact