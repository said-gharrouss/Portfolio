import { useSelector } from "react-redux"

function Skills() {
    const state = useSelector(state => state);
    return (
        <div id="skills" className="container px-[20px] mx-auto mt-[120px] mb-[120px]">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Skills</h2>
            <div className="flex flex-wrap gap-[20px] justify-center">
                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"}  w-[350px] h-[280px] sm:h-[320px] p-[20px] rounded-[4px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:translate-y-[-15px] transition-[0.3s]`}>
                    <h3 className="text-white bg-primary py-[6px] text-center font-bold rounded-[4px] mb-[20px]">Frontend</h3>
                    <div className="flex gap-[10px] justify-center flex-wrap ">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/html-5.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-red-500 font-semibold left-[50%] translate-x-[-50%]">HTML</span>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] pb-[30px] rounded-[4px]  cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/css-3.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-blue-500 font-semibold left-[50%] translate-x-[-50%]">CSS</span>
                        </a>

                        <a href="https://tailwindcss.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] pb-[30px] rounded-[4px]  cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/tailwindcss-icon.svg" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-green-500 w-[100%] text-center font-semibold left-[50%] translate-x-[-50%]">Tailwind CSS</span>
                        </a>

                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center  p-[15px] pb-[30px] rounded-[4px]  cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/js.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-yellow-500 font-semibold left-[50%] translate-x-[-50%]">Javascript</span>
                        </a>
                        <a href="https://react.dev/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center p-[15px] pb-[30px] rounded-[4px]  cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/react.svg" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-blue-500 w-[100%] text-center font-semibold left-[50%] translate-x-[-50%]">React Js</span>
                        </a>
                    </div>
                </div>


                
                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"}  w-[350px] h-[280px] sm:h-[320px]  p-[20px] rounded-[4px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:translate-y-[-15px] transition-[0.3s]`}>
                    <h3 className="text-white bg-primary py-[5px] text-center font-bold rounded-[4px] mb-[20px]">Backend</h3>
                    <div className="flex gap-[10px] flex-wrap justify-center">
                        <a href="https://www.php.net/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/php.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-purple-600 font-semibold left-[50%] translate-x-[-50%]">PHP</span>                            
                        </a>
                        <a href="https://laravel.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/laravel.svg" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-red-500 font-semibold left-[50%] translate-x-[-50%]">Laravel</span>                            
                        </a>
                        <a href="https://dev.mysql.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/mysql.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-blue-500 font-semibold left-[50%] translate-x-[-50%]">Mysql</span>                            
                        </a>
                    </div>
                </div>

                <div  className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"}  w-[350px] h-[280px] sm:h-[320px]   p-[20px] rounded-[4px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] hover:translate-y-[-15px] transition-[0.3s]`}>
                    <h3 className="text-white bg-primary py-[5px] text-center font-bold rounded-[4px] mb-[20px]">Collaboration Tools</h3>
                    <div className="flex gap-[10px] flex-wrap justify-center">
                        <a href="https://git-scm.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/social.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-orange-500 font-semibold left-[50%] translate-x-[-50%]">Git</span>                            
                        </a>
                        <a href="https://docs.github.com/" target="_blank" className={`${state === "day" ? "border-white border-[1.5px] hover:bg-gray-100" : "border-[1px] hover:bg-gray-100" } w-[30%] flex justify-center items-center   p-[15px] pb-[30px] rounded-[4px] cursor-pointer transition-[0.3s] relative`}>
                            <img src="/src/assets/images/github.png" alt="" />
                            <span className="absolute bottom-[5px] text-[10px] sm:text-[14px] text-black-500 font-semibold left-[50%] translate-x-[-50%]">Github</span>                            
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills