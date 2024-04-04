import { useEffect, useState } from "react";
import {Link} from 'react-scroll'
import {animateScroll} from 'react-scroll'
import './Navbar.css'

function classNames(...classes){
    return classes.filter(Boolean).join(" ");
}

function Navbar(){


    const [navigation, setNavigation] = useState(
        [
            {id: 1,name: "Home", href: "Home", current: true},
            {id: 2,name: "About", href: "About", current: false},
            {id: 3, name: "Projects", href: "Projects", current: false},
            // {id: 4, name: "Experience", href: "Experience", current: false},
            {id: 5, name: "Skills", href: "Skills", current: false},
            {id: 6, name: "Contact", href: "Contact", current: false},
        ]
    )

    const handleSetActive = (to) => {
        console.log(to);
        const newNav = [
            {name: "Home", href: "Home", current: false},
            {name: "About", href: "About", current: false},
            {name: "Projects", href: "Projects", current: false},
            // {name: "Experience", href: "Experience", current: false},
            {name: "Skills", href: "Skills", current: false},
            {name: "Contact", href: "Contact", current: false},


        ]
        let index = newNav.findIndex((el) => el.name === to);
        newNav[index].current = true;
        setNavigation(newNav);
    }
    return(
        <div className="w-full m-auto bg-[#1F2125] fixed top-0 z-20">

            <nav className="p-4 bg-[#1F2125] w-max m-auto">
                <ul className="flex flex-row gap-2">

                    {navigation.map((item) => (
                         <Link className={classNames(item.current ? "bg-black/50 text-white cursor-pointer font-semibold px-3 py-2 rounded-md" : "text-gray-300 hover:bg-black/75 px-3 py-2 cursor-pointer rounded-md font-semibold")} 
                            activeClass="active" 
                            smooth={true} isDynamic={true} duration={500} offset={-80} 
                            to={item.href}
                            spy={true}
                            onSetActive={handleSetActive} 
                            >{item.name}
                            </Link>
                    ))}


                </ul>
            </nav>

        </div>
    );
}

export default Navbar;