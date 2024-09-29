import { faThumbtack } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BookStoreDetails({setProjectDetails}) {
    // <FontAwesomeIcon icon={faPencil} />
    return (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh]  bg-[#37415152] z-[200] overflow-y-auto">
            <div className="w-[90%] md:w-[50%] mx-auto bg-white p-[20px] my-[20px] rounded-[4px]">
                <ul className="flex flex-col gap-[10px]">
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            I used <span className="font-bold">Tailwind CSS</span> to style the website, creating a modern and responsive user interface.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            I used <span className="font-bold">React</span> to develop the user interface of my online bookstore, integrating <span className="font-bold">Redux Toolkit</span> for efficient data management, <span className="font-bold">Axios</span> for API calls to the backend, and <span className="font-bold">React Router</span> for smooth page navigation.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            For form validation, I combined <span className="font-bold">React Hook Form</span> with <span className="font-bold">Zod</span> to ensure frontend validation, while adding additional backend validation with <span className="font-bold">Laravel</span> requests.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            The backend is built with <span className="font-bold">Laravel</span>, where I implemented security mechanisms to protect routes and ensure data integrity.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            I implemented authentication with <span className="font-bold">Sanctum</span> to manage secure user access. The system distinguishes between normal users and administrators, offering customized access levels based on roles.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            Data management is handled by <span className="font-bold">MySQL</span>, allowing for the storage and management of user and book information.
                        </p>
                    </li>
                    <li className="flex gap-[10px]">
                        <span className="text-[14px]"><FontAwesomeIcon icon={faThumbtack} /></span>
                        <p>
                            I integrated <span className="font-bold">Stripe</span> for online payment management, enabling users to securely complete transactions directly on the site.
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

export default BookStoreDetails
