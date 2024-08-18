import { faGithub, faInstagram, faLinkedin, faSquareXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"


function Footer() {
    const state = useSelector(state => state);
    return (
        <div className={`${state === "day" ? "bg-secondary" : "bg-primary_dark border-t-[2px] border-white"} mt-[100px] `}>
            <div className="container px-[20px] mx-auto py-[50px]">
                <div className="flex justify-center">
                    <ul className="flex gap-[20px] text-[30px] w-[500px] justify-center flex-wrap">
                        <a href="" className="hover:bg-[#0a66c2] hover:text-white hover:border-secondary  transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faLinkedin} /></li>
                        </a>
                        <a href="" className="hover:bg-[#333] hover:text-white hover:border-secondary  transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faGithub} /></li>
                        </a>
                        <a href="" className="hover:bg-[#e1306c] hover:text-white hover:border-secondary  transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faInstagram} /></li>
                        </a>
                        <a href="" className="hover:bg-[#14171a] hover:text-white hover:border-secondary transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faSquareXTwitter} /></li>
                        </a>
                        <a href="" className="hover:bg-[#333] hover:text-white hover:border-secondary transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faEnvelope} /></li>
                        </a>
                        <a href="" className="hover:bg-[#25d366] hover:text-white hover:border-secondary transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faWhatsapp} /></li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer