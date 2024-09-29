import { faThumbtack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function InternshipmanagementDetails({setProjectDetails}) {
    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh]  bg-[#37415152] z-[200] overflow-y-auto">
        <div className="w-[90%] md:w-[50%] mx-auto bg-white p-[20px] my-[20px] rounded-[4px]">
            <ul className="flex flex-col gap-[10px]">
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I used <span className="font-bold">Tailwind CSS</span> to style the application in a modern and responsive way.
                    </p>
                </li>
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I developed the frontend with <span className="font-bold">React</span>, using <span className="font-bold">Context API</span> to manage global states and <span className="font-bold">Axios</span> to perform API calls to the backend.
                    </p>
                </li>
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I implemented frontend form validation with <span className="font-bold">React Hook Form</span> and <span className="font-bold">Zod</span>, while ensuring backend validation with <span className="font-bold">Laravel</span> requests.
                    </p>
                </li>
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I developed the backend with <span className="font-bold">Laravel</span>, implementing route security and data management
                    </p>
                </li>
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I handled user authentication with <span className="font-bold">Sanctum</span>, defining three distinct roles: student, administrator, and instructor.
                    </p>
                </li>
                <li className="flex gap-[10px]">
                    <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                    <p>
                        I used <span className="font-bold">MySQL</span> for database management, ensuring efficient storage and handling of information.
                    </p>
                </li>
            </ul>
            <div className="flex justify-end">
                <button className="bg-red-500 text-white font-bold mt-[15px]  w-[100px] py-[5px] rounded-[4px]"
                onClick={() => setProjectDetails("")}>close</button>
            </div>
        </div>
    </div>
    )
}

export default InternshipmanagementDetails