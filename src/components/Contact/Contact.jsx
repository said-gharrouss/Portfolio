import { useSelector } from "react-redux";


function Contact() {
    const state = useSelector(state => state);
    return (
        <div id="contact" className="container sm:px-[20px] mx-auto mb-[100px] ">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Contact Me</h2>
            <div className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} flex flex-col sm:flex-row justify-between gap-[0px] sm:gap-[30px] items-center rounded-[4px]`}>
                <div className="min-w-[250px] sm:flex-1">
                    <img src="/src/assets/images/contact_img.svg" alt="" />
                </div>
                <form className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"}  flex-1 p-[20px] `}>
                    <div className="w-full">
                        <input type="text" className="border-[1px] border-transparent outline-none w-full px-[10px] py-[5px]  border-secondary_dark" placeholder="Name"/>
                    </div>
                    <div className="w-full my-[15px]">
                        <input type="email" className="border-[1px] border-transparent outline-none w-full px-[10px] py-[5px] border-secondary_dark" placeholder="Email"/>
                    </div>
                    <div className="w-full">
                        <textarea className="border-[1px] border-transparent w-full h-[150px] sm:h-[200px] resize-none outline-none px-[10px] py-[10px] border-secondary_dark" placeholder="Message"></textarea>
                    </div>
                    <div className="mt-[15px] text-white font-bold flex justify-end">
                        <input type="submit" value={"Send"} className="bg-primary px-[30px] py-[8px] rounded-[4px] cursor-pointer hover:bg-white hover:text-[#374151]
                        transition-[0.3s] hover:shadow-md" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact