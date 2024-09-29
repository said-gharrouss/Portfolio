import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import BookStoreDetails from "./BookStoreDetails";
import InternshipmanagementDetails from "./InternshipmanagementDetails";

function Portfolio() {
    const state = useSelector(state => state);
    const types = ["All","React & Laravel","React","HTML & CSS"];
    const [currentType,setCurrentType] = useState("React & Laravel");

    const HtmlCssProjects = [
        {
            image : "/src/assets/images/dashboard_phone_screenshot.png",
            name : "Dashboard",
            description : "I recreated the dashboard design using only HTML and CSS, based on the layout and structure taught by",
            github : "https://github.com/said-gharrouss/dashboard",
            liveLink : "https://said-gharrouss.github.io/dashboard/",
        },
        {
            image : "/src/assets/images/leon_screenshot.png",
            name : "Leon",
            description : "I brought the Leon website design to life using HTML and CSS, inspired by the design and layout techniques",
            github : "https://github.com/said-gharrouss/leon",
            liveLink : "https://said-gharrouss.github.io/leon/",
        },
        {
            image : "/src/assets/images/said_screenshort.png",
            name : "Said",
            description : "I rebuilt the said website using HTML and CSS, applying the design structure and concepts learned from ",
            github : "https://github.com/said-gharrouss/said",
            liveLink : "https://said-gharrouss.github.io/said/",
        },
    ]
    const ReactProject = [
        {
            image : "/src/assets/images/movieapp_screenshot.png",
            name : "Movies App",
            description : "A React.js movies app with CRUD functionality, using an external API and Context API for data management. Clean and responsive design.",
            github : "https://github.com/said-gharrouss/MoviesApp",
            liveLink : "https://my-moviesapp.netlify.app/",
        },
    ]

    const ReactLaravelProjects = [
        {
            image : "/src/assets/images/bookstore-screenshot.png",
            name : "Book Store",
            description : "A React and Laravel bookstore with an admin dashboard for managing books and orders. Users can search for books, sell them, and enjoy a smooth experience.",
            github : "https://github.com/said-gharrouss/BookStore",
        },
        {
            image : "/src/assets/images/gestiondesstages-screenshot.png",
            name : "Internship management",
            description : "A platform built with Laravel and React for managing internships, featuring different user roles, including admin, students, and instructors.",
            github : "https://github.com/said-gharrouss/BookStore",
        }
    ];

    const [currentProjects,setCurrentProjects] = useState([...ReactLaravelProjects]); 


    const handleCurrentType = (type) => {
        setCurrentType(type);
    }

    const ShowProjects = (type) => {
        console.log(type)
        switch(type){
            case "All" :
                setCurrentProjects([...ReactLaravelProjects,...ReactProject,...HtmlCssProjects]);
                break;
            case "React & Laravel" :
                setCurrentProjects([...ReactLaravelProjects]);
                break;
            case "React" :
                setCurrentProjects([...ReactProject]);
                break
            case "HTML & CSS" :
                setCurrentProjects([...HtmlCssProjects]);
                break;
            default : setCurrentProjects([...ReactLaravelProjects]);
        }
    }

    const [projectDetails,setProjectDetails] = useState();

    return (
        <div id="portfolio" className="container px-[20px] mx-auto mb-[100px]">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Portfolio</h2>
            <ul className={`flex flex-wrap justify-center gap-[10px] sm:gap-[30px] mb-[30px] w-fit mx-auto p-[20px] rounded-[6px] text-[10px] sm:text-[14px] ${state === "day" ? "bg-secondary" : "bg-secondary_dark"}`}>
                {
                    types.map((type,key) => (
                        <li key={key} className={`w-[90px] sm:w-[120px] h-[40px] flex justify-center items-center rounded-[6px] font-bold cursor-pointer border-[2px] border-primary transition-[0.3s]
                        ${currentType === type ? "bg-white" : "text-white bg-primary hover:bg-white hover:border-primary hover:text-[#374151]"} ${state !== "day" && currentType === type && "text-[#374151]"} `}
                        onClick={(e) => {handleCurrentType(e.target.textContent);ShowProjects(e.target.textContent)}}>{type}</li>
                    ))
                }
            </ul>
            <div className="flex gap-[20px] items-center justify-center flex-wrap ">
                {
                    currentProjects.map((project,key) => (
                    <div key={key} className={` rounded-[6px] overflow-hidden w-[350px] lg:w-[360px] hover:shadow-md hover:translate-y-[-15px] transition-[0.3s] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  ${state === "day" ? "bg-secondary" : "bg-secondary_dark"}`}>
                        <div className="h-[180px] w-full">
                            <img src={project.image} alt="" className="h-full w-full bg-cover" />
                        </div>
                        <div className="px-[20px] pt-[20px] flex flex-col gap-[10px]">
                            <h2 className={`font-bold text-[22px] ${state === "night" && "text-primary"}`}>{project.name}</h2>
                            <p className={`${state === "night" && "text-white"} min-h-[130px] sm:max-h-[130px]  text-[17px] text-gray-500`}>{project.description} {(project.name === "Said" || project.name === "Leon" || project.name === "Dashboard") && <a href="https://youtube.com/@elzerowebschool?si=C-yza1R6laz4DJSK" target="_blank" className="underline">Elzero Web School</a>} 
                            {(project.name === "Book Store" || project.name === "Internship management" ) && 
                            <button className="ml-[10px] text-white bg-green-500 px-[10px] py-[1px] rounded-[6px] text-[14px]"
                            onClick={() => setProjectDetails(project.name)}>More Details</button>} </p>
                        </div>
                        <ul className={`flex justify-end items-center gap-[10px] p-[20px]`}>
                            <li>
                                <a href={project.github} target="_blank" className="text-[10px] sm:text-[14px] flex items-center gap-[5px] bg-primary px-[10px] py-[3px] rounded-[6px] cursor-pointer text-white border-[2px] border-transparent hover:bg-white hover:border-primary hover:text-[#374151] transition-[0.3s]">
                                    <span className="text-[10px] sm:text-[14px]">Code on</span>
                                    <span className="text-[12px] sm:text-[16px]">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                </a>
                            </li>
                            <li>
                                {
                                    project.liveLink &&
                                    <a href={project.liveLink} target="_blank" className="text-[10px] sm:text-[14px] flex items-center gap-[5px] bg-primary px-[10px] py-[3px] rounded-[6px] cursor-pointer text-white border-[2px] border-transparent hover:bg-white hover:border-primary hover:text-[#374151] transition-[0.3s]">
                                        <span className="">Live site</span>
                                        <span className="text-[12px] sm:text-[16px] ">
                                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                                        </span>
                                    </a>
                                }
                                {
                                    project.name === "Book Store" &&
                                    <a href={project.liveLink} target="_blank" className=" text-[10px] sm:text-[14px] flex items-center gap-[5px] bg-primary px-[10px] py-[3px] rounded-[6px] cursor-pointer text-white border-[2px] border-transparent hover:bg-white hover:border-primary hover:text-[#374151] transition-[0.3s]">
                                    <span className="">Overview video on</span>
                                    <span className="text-[12px] sm:text-[16px]">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </span>
                                </a>
                                }
                            </li>
                        </ul>
                    </div>
                    ))
                }
            </div>
            {
                projectDetails === "Book Store" && <BookStoreDetails setProjectDetails={setProjectDetails}/>
            }
            {
                projectDetails === "Internship management" && <InternshipmanagementDetails setProjectDetails={setProjectDetails} />
            }
        </div>
    )
}

export default Portfolio;