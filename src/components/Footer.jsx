import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const handleSendEmail = () => {
    window.location.href = 'mailto:szulzyckifilip@gmail.com';
};

export default function Footer() {
    return (
        <div className='w-full lg:h-36 md:h-32 sm:h-24 h-24 flex items-center bg-[#C6C6C6] px-[15%] text-[#C6C6C6] sf justify-between'>
            <span className='flex text-center lg:text-base md:text-sm sm:text-xs text-xs'>
                © 2024 Filip Szulżycki. All rights reserved.
            </span>
            <div className='cursor-pointer flex lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[#C6C6C6]'>
                <AiOutlineMail onClick={handleSendEmail} />
                <a href='https://linkedin.com/in/fszulzycki/'>
                    <AiOutlineLinkedin />
                </a>
                <a href='https://github.com/f1shuu'>
                    <AiOutlineGithub />
                </a>
            </div>
        </div>
    );
}
