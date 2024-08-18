import { faDesktop, faGraduationCap, faHandsClapping, faThumbtack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"

function About() {
    const state = useSelector(state => state);
    return (
        <div id="about" className="container px-[20px] mx-auto my-[100px]">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>About</h2>
            <div className="flex gap-[10px] items-center justify-center flex-wrap">
                <p className={`${state === "day" ? "bg-secondary text-gray-500" : "bg-secondary_dark text-white"}  p-[20px] rounded-[4px]  w-[380px] lg:w-[360px] h-[300px] sm:h-[250px] shadow-sm 
                text-[15px] leading-[1.6]`}>
                    <span className="block text-center text-primary text-[25px] mb-[10px]"><FontAwesomeIcon icon={faHandsClapping} /></span>
                    Hello! I&apos;m Said Gharrous, a dedicated full stack developer with expertise in frontend and backend technologies. I specialize in React for dynamic UIs and Laravel for scalable backends.  </p>

                <p className={`${state === "day" ? "bg-secondary text-gray-500" : "bg-secondary_dark text-white"}  p-[20px] rounded-[4px]  w-[380px] lg:w-[360px] h-[300px] sm:h-[250px] shadow-sm 
                text-[15px] leading-[1.6]`}>
                    <span className="block text-center text-primary text-[25px] mb-[10px]"><FontAwesomeIcon icon={faDesktop} /></span>
                    I&apos;ve honed my skills through various projects, applying web development knowledge to solve real-world problems. My experience includes designing, developing, and maintaining user-friendly and efficient web applications.
                </p>
                
                <p className={`${state === "day" ? "bg-secondary text-gray-500" : "bg-secondary_dark text-white"}  p-[20px] rounded-[4px]  w-[380px] lg:w-[360px] h-[300px] sm:h-[250px] shadow-sm 
                text-[15px] leading-[1.6]`}>
                    <span className="block text-center text-primary text-[25px] mb-[10px]">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    <span className="mb-[15px] block">
                        <FontAwesomeIcon icon={faThumbtack} className="mr-[10px]" /> 
                        Graduated with a Baccalauréat in Science Physique in <span className="text-black-400 font-bold" >2022 </span>.
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faThumbtack} className="mr-[10px]" /> 
                        Earned a diploma in Development, Digital Option, Full Stack from the Specialized Institute of Applied Technology (ISTA) from <span className="text-black-400 font-bold" >2022 </span> to <span className="text-black-400 font-bold" >2024 </span>.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default About