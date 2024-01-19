import { Link } from 'react-scroll';
import { AiOutlineArrowDown, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import '../fonts.css';

const rotatingTexts = [
    'computer science student',
    'programming passionate',
    'React learner',
    'aspiring developer',
];

const handleEmailClick = () => {
    window.location.href = 'mailto:szulzyckifilip@gmail.com';
};

export default function Home() {
    return (
        <>
            <div id='#home' className='bg-gradient-to-r from-[#000] to-[#376DEC] h-[100vh] px-[15%] text-left'>
                <div className='h-[100%] flex flex-col items-center justify-center'>
                    <span className='type-hello lg:text-6xl md:text-6xl sm:text-5xl text-3xl font-mono text-[#F0F6F6]' />
                    <div className='wrapper flex breeze-regular md:h-10 h-8 lg:text-3xl md:text-3xl sm:text-2xl text-xl lg:my-10 md:my-10 sm:my-5 my-3'>
                        <div className='texts'>
                            {rotatingTexts.map((text, index) => (
                                <span key={index} className='text'>
                                    {text}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='cursor-pointer flex lg:mb-10 md:mb-10 sm:mb-5 mb-3 lg:text-4xl md:text-4xl sm:text-2xl text-xl text-[#F0F6F6]'>
                        <AiOutlineMail onClick={handleEmailClick} className='mx-1' />
                        <a href='https://linkedin.com/in/fszulzycki/' className='mx-1'>
                            <AiOutlineLinkedin />
                        </a>
                        <a href='https://github.com/f1shuu' className='mx-1'>
                            <AiOutlineGithub />
                        </a>
                    </div>
                    <Link to='#contact' smooth={true} duration={500} className='link cursor-pointer flex justify-center overflow-hidden border-[#F0F6F6] border-2 rounded-full breeze-bold lg:text-lg md:text-base text-[#F0F6F6] hover:bg-[#F0F6F6] hover:text-[#2A2D34] active:bg-[#F0F6F6] active:border-[#F0F6F6] active:text-[#2A2D34] lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 pt-2 pb-1 text-xs uppercase'>
                        Learn more
                        <div className='arrows inline-block'>
                            <AiOutlineArrowDown className='upper-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                            <AiOutlineArrowDown className='lower-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}