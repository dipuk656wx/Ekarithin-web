import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../common/use-click-outside";
import './style.css'
const pages = [
    { label: "Events", value: "events" },
    { label: "Register", value: "register" },
    { label: "Home", value: "home" },
];
const Header = () => {
    const navigate = useNavigate();
    const [isVisible, setisVisible] = useState(false);
    const Slider = useRef<HTMLDivElement>(null);
    useClickOutside(Slider, () => {
        if (isVisible) {
            setisVisible(false)
        }
    })
    const handlePage = (event: React.MouseEvent<HTMLElement>) => {
        let value = event.currentTarget.dataset.value;
        navigate(`/${value}`);
    }
    console.log(isVisible);

    return (
        <div className="relative">
            <div className="text-white flex justify-between p-2 z-10 border-b border-b-gray-light bg-gray-dark">
                <div className="font-bold items-center justify-center flex">
                    <img src="/images/ekarikthin logo.png" className="w-[50px] h-[50px]" alt="Logo" />
                    <span className="pt-2" style={{ fontFamily: 'ekarikthin' }}>
                        karikthin
                    </span>
                </div>
                <div className="flex items-center menu mr-10">
                    {pages.map((page) => (
                        <div
                            className="px-3 py-1 border-b-2 border-gray-dark font-bold hover:border-yellow-400 cursor-pointer text-[17px]"
                            key={page.value}
                            data-value={page.value}
                            onClick={handlePage}
                        >
                            {page.label}
                        </div>
                    ))}
                </div>
                <div ref={Slider} className="toggleMenu relative">
                    <svg
                        onClick={() => setisVisible(!isVisible)}
                        className="mt-2 mr-2"
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M3 7C3 6.44772 3.44772 6 4 6H22C22.5523 6 23 6.44772 23 7C23 7.55228 22.5523 8 22 8H4C3.44772 8 3 7.55228 3 7ZM3 21C3 20.4477 3.44772 20 4 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21ZM4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H24C24.5523 15 25 14.5523 25 14C25 13.4477 24.5523 13 24 13H4Z" fill="white" />
                    </svg>
                    <div
                        className={`bg-black h-[100vh] fixed top-0 right-0 transition-transform duration-300 transform ${isVisible ? 'translate-x-0' : 'translate-x-full'
                            }`}
                        style={{ width: '200px', zIndex: 10000 }}
                    >
                        <div className="gap-3 flex flex-col pt-4 text-[15px]">
                            {pages.map((page) => (
                                <div
                                    className="flex h-[30px] items-center gap-2.5 shrink-0 p-4 hover:cursor-pointer border-b-2 border-gray-dark hover:bg-gray-light hover:text-blue-400"
                                    key={page.value}
                                    data-value={page.value}
                                    onClick={handlePage}
                                >
                                    {page.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;