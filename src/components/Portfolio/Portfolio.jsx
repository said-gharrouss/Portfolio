import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";

function Portfolio() {
    const imgsPaths = ["html-5.png","css-3.png","js.png","php.png","laravel.svg"];
    const [currentImg,setCurrentImg] = useState(0);
    const state = useSelector(state => state);
    const handelRight = () => {
        setCurrentImg(prevState => prevState + 1 === imgsPaths.length ? prevState = 0 : prevState += 1);
    }
    const handelLeft = () => {
        setCurrentImg(prevState => prevState === 0 ? prevState += imgsPaths.length - 1  : prevState -= 1);
    }
    return (
        <div id="portfolio" className="container px-[20px] mx-auto mb-[100px]">
            <h2 className={`${state === "night" && "before:bg-white"} main-title`}>Portfolio</h2>
            <div className="flex justify-center items-center gap-[40px]">
                <button className="text-[30px] text-primary"
                onClick={() => handelLeft()}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <div className="w-[250px] h-[250px] bg-secondary p-[20px] rounded-[4px]">
                    <img src={`/src/assets/images/${imgsPaths[currentImg]}`} alt="" className="w-full h-full"/>
                </div>
                <button
                onClick={() => handelRight()} className="text-[30px] text-primary"><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <div className="flex justify-center items-center gap-[10px] mt-[20px]">
                {imgsPaths.map((e,key)=>{
                    if(currentImg === key){
                        return <span key={key} className="w-[12px] h-[12px] bg-secondary block rounded-[50%] cursor-pointer transition-[0.3s]"
                        onClick={() => setCurrentImg(key)}></span>
                    } else {
                        return <span key={key} className="w-[12px] h-[12px] bg-primary block rounded-[50%] cursor-pointer transition-[0.3s]"
                        onClick={() => setCurrentImg(key)}></span>
                    }
                })}
            </div>
        </div>
    )
}

export default Portfolio;