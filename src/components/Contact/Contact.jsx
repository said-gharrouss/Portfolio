import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";


function Contact() {
    const state = useSelector(state => state);
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [nameMsgError,setMsgError] = useState();
    const [emailMsgError,setEmailMsgError] = useState();
    const [messageMsgError,setMessageMsgError] = useState();


    const sendemail = (e) => {
        e.preventDefault();
        let isValid = true;
        if (nameRef.current.value.trim().length === 0) {
            setMsgError("Error: Name is required");
            isValid = false;
        }

        if (emailRef.current.value.trim().length === 0) {
            setEmailMsgError("Error: Email is required");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
            setEmailMsgError("Error: Invalid email format");
            isValid = false;
        }

        if (messageRef.current.value.trim().length === 0) {
            setMessageMsgError("Error: Message is required");
            isValid = false;
        }

        if(isValid){
            const full_name = nameRef.current.value;
            const email = emailRef.current.value;
            const message = messageRef.current.value;
            emailjs
            .send('service_tc845cm', 'template_day1fn9', {full_name,email,message}, {
                publicKey: 'qUgXRySma0K4QssGW',
            })
            .then(
                () => {
                    nameRef.current.value = "";
                    emailRef.current.value = "";
                    messageRef.current.value = "";
                    alert("Message sent successfully");
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );   
        }

    }

    return (
        <div id="contact" className="container sm:px-[20px] mx-auto mb-[100px] ">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Contact Me</h2>
            <div className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"} flex flex-col sm:flex-row justify-between gap-[0px] sm:gap-[30px] items-center rounded-[4px]`}>
                <div className="min-w-[250px] sm:flex-1">
                    <img src="/assets/contact_img.svg" alt="" />
                </div>
                <form onSubmit={(e) => sendemail(e)} className={`${state === "day" ? "bg-secondary" : "bg-secondary_dark"}  flex-1 p-[20px] `}>
                    <div className="w-full">
                        <input type="text" ref={nameRef} className="text-primary_dark border-[1px] border-transparent outline-none w-full px-[10px] py-[5px]  border-secondary_dark" placeholder="Name"/>
                    </div>
                    <span className="text-red-500 text-[14px]">{nameMsgError}</span>
                    <div className="w-full my-[15px]">
                        <input type="email" ref={emailRef} className="text-primary_dark border-[1px] border-transparent outline-none w-full px-[10px] py-[5px] border-secondary_dark" placeholder="Email"/>
                    </div>
                    <span className="text-red-500 text-[14px]">{emailMsgError}</span>
                    <div className="w-full">
                        <textarea ref={messageRef} className="text-primary_dark border-[1px] border-transparent w-full h-[150px] sm:h-[200px] resize-none outline-none px-[10px] py-[10px] border-secondary_dark" placeholder="Message"></textarea>
                    </div>
                    <span className="text-red-500 text-[14px]">{messageMsgError}</span>
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
