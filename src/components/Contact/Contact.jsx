import { useSelector } from "react-redux"

function Contact() {
    const state = useSelector(state => state);
    return (
        <div id="contact" className="container  sm:px-[20px] mx-auto mb-[100px] ">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Contact Me</h2>
            <form className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} w-[100%] sm:w-[60%] mx-auto p-[20px] rounded-[4px]`}>
                <div className="w-full">
                    <label htmlFor="" className="block mb-[5px] font-semibold">Name</label>
                    <input type="text" className="border-[2px] border-transparent outline-none w-full px-[10px] py-[5px] rounded-[4px] focus:border-primary" />
                </div>
                <div className="w-full my-[15px]">
                    <label htmlFor="" className="block mb-[5px]  font-semibold">Email</label>
                    <input type="email" className="border-[2px] border-transparent outline-none w-full px-[10px] py-[5px] rounded-[4px] focus:border-primary" />
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block mb-[5px] font-semibold">Message</label>
                    <textarea className="border-[2px] border-transparent w-full h-[150px] sm:h-[200px] resize-none outline-none px-[10px] py-[10px] rounded-[4px] focus:border-primary"></textarea>
                </div>
                <div className="mt-[15px] text-white font-bold flex justify-end">
                    <input type="submit" value={"Send Message"} className="bg-primary px-[20px] py-[10px] rounded-[4px] cursor-pointer hover:bg-white hover:text-[#374151]
                    transition-[0.3s] hover:shadow-md" />
                </div>
            </form>
        </div>
    )
}

export default Contact