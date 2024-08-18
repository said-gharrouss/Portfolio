import { useSelector } from "react-redux"

function Skills() {
    const state = useSelector(state => state);
    return (
        <div id="skills" className="container px-[20px] mx-auto mt-[120px] mb-[120px]">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Skills</h2>
            <div className="flex flex-wrap gap-[20px] justify-center">
                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} shadow-sm w-[350px] h-[240px] sm:h-[290px] p-[20px] rounded-[4px]`}>
                    <h3 className="text-white bg-primary py-[6px] text-center font-bold rounded-[4px] mb-[20px]">Frontend</h3>
                    <div className="flex gap-[10px] justify-center flex-wrap">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/html-5.png" alt="" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] rounded-[4px]  cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/css-3.png" alt="" />
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] rounded-[4px]  cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/tailwindcss-icon.svg" alt="" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center  p-[15px] rounded-[4px]  cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/js.png" alt="" />
                        </a>
                        <a href="https://react.dev/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] rounded-[4px]  cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/react.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} shadow-sm w-[350px] h-[240px] sm:h-[290px]  p-[20px] rounded-[4px]`}>
                    <h3 className="text-white bg-primary py-[5px] text-center font-bold rounded-[4px] mb-[20px]">Backend</h3>
                    <div className="flex gap-[10px] flex-wrap justify-center">
                        <a href="https://www.php.net/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/php.png" alt="" />
                        </a>
                        <a href="https://laravel.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/laravel.svg" alt="" />
                        </a>
                        <a href="https://dev.mysql.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/mysql.png" alt="" />
                        </a>
                    </div>
                </div>
                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} shadow-sm w-[350px] h-[240px] sm:h-[290px]   p-[20px] rounded-[4px]`}>
                    <h3 className="text-white bg-primary py-[5px] text-center font-bold rounded-[4px] mb-[20px]">Collaboration Tools</h3>
                    <div className="flex gap-[10px] flex-wrap justify-center">
                        <a href="https://git-scm.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/social.png" alt="" />
                        </a>
                        <a href="https://docs.github.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] rounded-[4px] cursor-pointer transition-[0.3s]`}>
                            <img src="/src/assets/images/github.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills