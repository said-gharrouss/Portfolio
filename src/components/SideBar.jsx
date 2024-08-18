import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons"
import { faBriefcase, faHouse, faTools } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function SideBar() {
    return (
        <ul className="bg-gray-200 p-[10px] flex flex-col justify-between items-center gap-[12px] rounded-[4px] h-[230px]">
                <Link to={"/"}>
                    <li className="cursor-pointer px-[10px]  w-[100px] py-[5px] hover:bg-gray-100 transition-[0.3s] rounded-[4px] flex gap-[10px] items-center text-[15px]"><FontAwesomeIcon icon={faHouse} /> <span>Home</span></li>
                </Link>
                <Link to={"/about"}>
                    <li className="cursor-pointer px-[10px]  w-[100px] py-[5px] hover:bg-gray-100 transition-[0.3s] rounded-[4px] flex gap-[10px] items-center"><FontAwesomeIcon icon={faUser} /> <span>About</span></li>
                </Link>
                <Link to={"/skills"}>
                    <li className="cursor-pointer px-[10px]  w-[100px] py-[5px] hover:bg-gray-100 transition-[0.3s] rounded-[4px] flex gap-[10px] items-center text-[15px]"><FontAwesomeIcon icon={faTools} /> <span>Skills</span></li>
                </Link>
                <Link>
                    <li className="cursor-pointer px-[10px]  w-[100px] py-[5px] hover:bg-gray-100 transition-[0.3s] rounded-[4px] flex gap-[10px] items-center text-[15px]"><FontAwesomeIcon icon={faBriefcase} /> <span>Portfolio</span></li>
                </Link>
                <Link>
                    <li className="cursor-pointer px-[10px]  w-[100px] py-[5px] hover:bg-gray-100 transition-[0.3s] rounded-[4px] flex gap-[10px] items-center text-[15px]"><FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></li>
                </Link>
        </ul>
    )
}

export default SideBar