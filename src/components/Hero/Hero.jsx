import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Hero() {
    return (
        <div  id="home" className="container px-[20px] mx-auto pt-[100px] sm:pt-[150px] lg:pt-[80px] flex items-center gap-[20px] flex-col lg:flex-row">
            <div className="w-full sm:w-[60%] md:w-full lg:flex-[1.2] text-center lg:text-left">
                <h1 className="text-[30px] sm:text-[50px] font-bold">Hi, I&#39;m <span className="text-primary block sm:inline">Said Gharrous</span></h1>
                <h2 className="font-semibold text-[20px] sm:text-[30px]">Full Stack Web Developer</h2>
                <p className="text-gray-500 mt-[10px]">Building efficient, scalable, and user-centric web applications with modern technologies.</p>
                <a 
                    href="/public/Said-Gharrous-resume.pdf" 
                    download="Said-Gharrous-Resume.pdf" 
                    className="bg-primary rounded-[6px] py-[12px] text-white font-bold mt-[20px] w-[200px] sm:w-[230px] mx-auto lg:ml-0 flex items-center justify-center gap-[10px]
                    border-[2px] border-transparent hover:border-primary hover:text-[#374151] hover:bg-white
                    text-[14px]"               
                >
                    <button>Download My Resume</button>
                    <FontAwesomeIcon icon={faDownload} />
                </a>
            </div>
            <div className="flex-[0.7] hidden lg:block">
                <img src="/src/assets/images/Developer activity-bro.svg" alt="" className="w-full"/>
            </div>
        </div>
    )
}

export default Hero