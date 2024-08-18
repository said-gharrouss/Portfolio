import { useEffect, useState } from "react"
import NavLinks from "./NavLinks"
import PhoneNavLinks from "./PhoneNavLinks"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faBars, faL, faMoon, faSun,} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

function NavBar() {
    const [isOpen,setIsOpen] = useState(false);
    const [shadow,setShadow] = useState(false);
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [up,setUp] = useState(false);
    
    const handleNavbar = () => {
        setIsOpen(!isOpen);
    }

    window.onscroll = () =>{
        if(window.scrollY > 40){
            setShadow(true);
        }else{
            setShadow(false);
        }
        if(window.scrollY > 150){
            setUp(true);
        } else {
            setUp(false);
        }
    }

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const handelState = () => {
        state == "day" ? dispatch({type:"day"}) : dispatch({type:"night"});
    }
    return (
        <>
        <div className={`${shadow ? "navShadow" : "" } ${shadow && state === "night" && "navShadow_dark"} ${state === "night" ? " bg-primary_dark" : "bg-white"}  fixed top-0 w-full left-0  z-[100] `}>
            <div className="sm:container px-[20px] flex justify-between mx-auto  py-[15px] items-center">
                <div className="text-[30px] font-bold  ">said</div>
                <div className="hidden md:block">
                    <NavLinks/>
                </div>
                <div className="md:hidden flex gap-[15px] items-center">
                    <div className="w-[30px] text-[22px] text-center cursor-pointer" onClick={() => handelState()}>
                        {
                            state === "day" ?
                            <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />
                        }
                    </div>
                    <PhoneNavLinks handleNavbar={handleNavbar} isOpen={isOpen}/>
                    <FontAwesomeIcon icon={faBars} className="text-[25px] cursor-pointer" onClick={()=>handleNavbar()} />
                </div>
            </div>
        </div>
        {
            up &&
            <button onClick={() => handleButtonUp()} className="w-[42px] h-[42px] bg-primary text-white font-bold fixed bottom-[10px] right-[10px]
            rounded-[50%] text-[20px] shadow-lg hover:bg-white hover:text-primary transition-[0.3s]"><FontAwesomeIcon icon={faArrowUp} /></button>
        }
        </>
    )
}

export default NavBar