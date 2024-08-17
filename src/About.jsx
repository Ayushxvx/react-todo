import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
export default function About(){

    useEffect(()=>{
        AOS.init({
            offset:70,
            delay:30,
            duration:700
        });
    },[])

    return(
        <div  className="p-2 m-2 text-green-400 text-center text-2xl">
            <h1>
                Ayush Verma
            </h1> 
            <figure className="w-10/12 sm:w-8/12 md:w-6/12 border-2 border-solid border-white rounded-xl block mx-auto p-2 m-2">
                <img data-aos="fade-left" src="./my_photo.jpg"  alt="My Image" className="w-6/12 block mx-auto rounded-lg border-2 border-solid border-white outline-2 outline-offset-4 outline-solid outline-white"/>
            </figure><br />
            <div className="p-2 m-2 border-solid border-2 border-white rounded-lg w-10/12 block mx-auto flex justify-evenly">
                <div className="p-2 cursor-pointer hover:opacity-70">
                <a href="http://www.linkedin.com/in/ayush-verma-a31050293" target="_blank">
                <img data-aos="flip-up" src="./linkedin.png" alt="Linkedin" className="h-12 md:h-14 border-4 border-solid border-white rounded-xl"/>
                </a>
                </div>
                <div className="p-2 cursor-pointer hover:opacity-70">
                <a href="http://www.github.com/ayushxvx" target="_blank">
                <img data-aos="flip-up" src="./github.png" alt="Github" className="h-12 md:h-14 border-4 border-solid border-white rounded-xl"/>
                </a>
                </div>
                <div className="p-2 cursor-pointer hover:opacity-70">
                <a href="https://www.instagram.com/_ayushxv_" target="_blank">
                <img data-aos="flip-up" src="./instagram.png" alt="Instagram" className="h-12 md:h-14 border-4 border-solid border-white rounded-xl"/>
                </a>
                </div>
            </div>
        </div>
    )
}