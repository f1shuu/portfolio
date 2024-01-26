import { Link } from 'react-scroll';
import { AiOutlineArrowDown, AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';
import me from '../images/me.png';

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
            <div id='#home' className='bg-[#101010] h-[100vh]'>
                <div className='h-[100%] px-[15%] flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <span className='type-hello lg:text-6xl md:text-5xl sm:text-4xl text-3xl sf text-[#C6C6C6]' />
                        <div className='wrapper flex sf lg:h-9 md:h-9 sm:h-6 h-4 lg:text-3xl md:text-2xl sm:text-base text-xs lg:my-10 md:my-10 sm:my-5 my-3'>
                            <div className='texts'>
                                {rotatingTexts.map((text, index) => (
                                    <span key={index} className='text'>{text}</span>
                                ))}
                            </div>
                        </div>
                        <div className='cursor-pointer flex lg:mb-10 md:mb-10 sm:mb-5 mb-3 lg:text-4xl md:text-4xl sm:text-2xl text-xl text-[#C6C6C6]'>
                            <AiOutlineMail onClick={handleEmailClick} className='mx-1' />
                            <a href='https://linkedin.com/in/fszulzycki/' className='mx-1'>
                                <AiOutlineLinkedin />
                            </a>
                            <a href='https://github.com/f1shuu' className='mx-1'>
                                <AiOutlineGithub />
                            </a>
                        </div>
                        <Link
                            to='#about'
                            smooth={true}
                            duration={500}
                            className='link cursor-pointer flex justify-center overflow-hidden border-[#C6C6C6] border-2 rounded-xl sf lg:text-lg md:text-base text-[#C6C6C6] hover:bg-[#C6C6C6] hover:text-[#101010] active:bg-[#C6C6C6] active:text-[#101010] lg:px-8 lg:py-4 md:px-8 md:py-4 px-4 pt-2 pb-1 text-xs transform transition-transform hover:scale-110'>
                            learn more
                            <div className='arrows inline-block'>
                                <AiOutlineArrowDown className='upper-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                                <AiOutlineArrowDown className='lower-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                            </div>
                        </Link>
                    </div>
                    <img src={me} alt='image' title={'yup, that\'s me :)'} className='w-2/5 rounded-full' />
                </div>
            </div>
        </>
    );
}