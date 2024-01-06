import { FaCheckCircle } from "react-icons/fa";import { useEffect, useState } from 'react';

const SuccessMessage = ({ msg, close, action, btnMsg, isCompleted }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 50);
    }, []);

    function nextActionSuccessMsg() {
        if (action) {
            action();
            close();
        } else {
            close();
        }
    }

    return (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
            <div className={`flex flex-col items-center w-1/3 border-[#522b5b] bg-white z-20 p-5 rounded overflow-hidden ${isVisible ? 'transform translate-y-0 transition-transform duration-500' : 'transform translate-y-[-300%]'}`}>
                <FaCheckCircle color="#522b5b" size={'80'} />
                <p className='text-xl mb-3'>{msg}</p>
                <button onClick={nextActionSuccessMsg} className="bg-white border border-[#522b5b] hover:bg-purple-600 hover:text-white transition-all w-1/2 rounded-lg text-[#522b5b] font-medium py-1">{btnMsg}</button>
            </div>
        </div>
    );
}

export default SuccessMessage;