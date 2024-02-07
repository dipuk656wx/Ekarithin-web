import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../../common/use-click-outside";

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

    return (
        <div>
            <div className="text-white flex justify-between p-2 z-10 border-b border-b-gray-light bg-gray-dark">
                <div className="font-bold items-center justify-center flex" >
                    <img src="/images/ekarikthin logo.png" className="w-[50px] h-[50px]" alt="Logo" />
                    <span className="pt-2" style={{ fontFamily: "ekarikthin" }}>karikthin</span>
                </div>
                <div className="flex items-center">
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
                <div ref={Slider} className="toggleMenu" >
                    <svg onClick={() => setisVisible(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z" fill="white" />
                    </svg>
                    <div

                        className={`bg-black h-[100vh] absolute top-[-7px] left-[-7px] transition-transform duration-300 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'
                            }`}
                        style={{ width: '200px', zIndex: 10_000 }}
                    >
                        <div className="gap-3 flex flex-col pt-4 text-[15px]">
                            {pages.map((page) => (
                                <div
                                    className="flex h-[30px] items-center gap-2.5 shrink-0 p-4 hover:cursor-pointer border-b-2 border-gray-dark hover:bg-gray-light hover:text-blue-400 "

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