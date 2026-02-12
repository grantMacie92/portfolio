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
                <h3><FaPhone  /> (305)-336-0594</h3>
                <h3><FaEnvelope /> grant.macie92@gmail.com</h3>
            </div>
        </div>
    )
}

export default Contact