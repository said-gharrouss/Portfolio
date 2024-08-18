import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux";

function NavLinks() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(state);
    const handelState = () => {
        state == "day" ? dispatch({type:"day"}) : dispatch({type:"night"});
    }
    return (
        <ul className="flex gap-[30px] text-[20px]">
                <li className="hover:text-primary transition-[0.3s]"><a href="#home">Home</a></li>
                <li className="hover:text-primary  transition-[0.3s]"><a href="#about">About</a></li>
                <li className="hover:text-primary  transition-[0.3s]"><a href="#skills">Skills</a></li>
                <li className="hover:text-primary  transition-[0.3s]"><a href="#portfolio">Portfolio</a></li>
                <li className="hover:text-primary  transition-[0.3s]"><a href="#contact">Contact</a></li>
                <li className="cursor-pointer w-[30px] h-[30px]" onClick={() => handelState()}>
                    {
                        state === "day" ?
                        <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
                    }
                </li>
        </ul>
    )
}

export default NavLinks