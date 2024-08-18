import { useSelector } from "react-redux"

function PhoneNavLinks({handleNavbar,isOpen}) {
    const state = useSelector(state => state);
    return (
        <>
        <ul className={`flex gap-[15px] text-[20px] flex-col absolute  right-0 w-full z-[20] 
        text-center pt-[40px] pb-[20px] shadow-lg ${isOpen ? "top-0" : "hide-nav"}
        ${state === "day" ? "bg-white" : "bg-primary_dark navShadow_dark"} transition-[all_0.3s] `}>
            <li className="hover:text-primary hover:bg-gray-100 py-[8px] transition-[0.3s] "><a onClick={() => handleNavbar()} href="#home">Home</a></li>
            <li className="hover:text-primary hover:bg-gray-100 py-[8px]  transition-[0.3s] "><a onClick={() => handleNavbar()} href="#about">About</a></li>
            <li className="hover:text-primary hover:bg-gray-100 py-[8px] transition-[0.3s] "><a onClick={() => handleNavbar()} href="#skills">Skills</a></li>
            <li className="hover:text-primary hover:bg-gray-100 py-[8px] transition-[0.3s] "><a onClick={() => handleNavbar()} href="#portfolio">Portfolio</a></li>
            <li className="hover:text-primary hover:bg-gray-100 py-[8px] transition-[0.3s] "><a onClick={() => handleNavbar()} href="#contact">Contact</a></li>
        <button className="absolute z-[21] top-[15px] right-[20px] w-[30px] h-[30px] bg-red-500 text-white
        rounded-[50%] text-[14px]" onClick={() => handleNavbar()}>X</button>
        </ul>
        </>
    )
}

export default PhoneNavLinks