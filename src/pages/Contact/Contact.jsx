import './Contact.css'

// Fontawesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

// Components Import
import HeadingText from '../../components/HeadingText/HeadingText'

export default function Contact() {
    return (
        <>
        <section>
            <HeadingText title={'Contact Me'} />
            <div className="container contact-container">
            <form action="#">
                <input type="text" required placeholder='Your Name' />
                <input type="email" required placeholder='Your Email' />
                <input type="number" required placeholder='Your Number' />
                <textarea name= "message" id= "message" rows="6" placeholder='Your Message'></textarea>
                <button type= 'submit' className= 'btn'>
                    Send
                    <span><FontAwesomeIcon icon={faPaperPlane}/></span>
                </button>
            </form>
         </div>
        </section>
        <footer> &copy; 2023 Ronald Chatelier - Built with Next.js and React</footer>
        </>
    )
}
