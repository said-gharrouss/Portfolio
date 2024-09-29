import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"


function Footer() {
    const state = useSelector(state => state);
    return (
        <div className={`${state === "day" ? "bg-secondary" : "bg-primary_dark border-t-[2px] border-white"} mt-[100px] `}>
            <div className="container px-[20px] mx-auto py-[50px] flex flex-col sm:flex-row justify-end gap-[50px] md:gap-[200px] lg:gap-[500px]">
                <ul className="text-[17px] flex flex-col gap-[30px] ">
                    <li className="pb-[15px] w-[200px] sm:w-[300px] border-b-[1px] border-[#fff]">
                        <span className="font-bold">Age : </span>
                        <span>19</span>
                    </li>
                    <li className="pb-[15px] w-[200px] sm:w-[300px] border-b-[1px] border-[#fff]">
                        <span className="font-bold">Email : </span>
                        <span>gharrousssaid@gmail.com</span>
                    </li>
                    <li className="pb-[15px] w-[200px] sm:w-[300px] border-b-[1px] border-[#fff]">
                        <span className="font-bold">Place : </span>
                        <span>Oujda - Morocco</span>
                    </li>
                </ul>
                <div>
                    <h2 className="font-bold text-[25px] mb-[20px]">Find me on social media</h2>
                    <ul className="flex gap-[20px] text-[30px] flex-wrap">
                        <a href="https://www.linkedin.com/in/said-gharrouss/" target="_blank" className="hover:bg-[#0a66c2] hover:text-white hover:border-secondary  transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faLinkedin} /></li>
                        </a>
                        <a href="https://github.com/said-gharrouss" target="_blank" className="hover:bg-[#333] hover:text-white hover:border-secondary  transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faGithub} /></li>
                        </a>
                        <a href="https://wa.me/212659608841?text=Hello%20I%27m%20interested%20in%20your%20services" target="_blank" className="hover:bg-[#25d366] hover:text-white hover:border-secondary transition-[0.3s] rounded-[4px]  border-[1.5px] border-white">
                            <li className="px-[15px] py-[4px]"><FontAwesomeIcon icon={faWhatsapp} /></li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="bg-[#374151] h-[60px] w-full text-white flex items-center justify-center font-semibold">
                    © 2024 | All rights reserved
            </div>
        </div>
    )
}

export default Footer

