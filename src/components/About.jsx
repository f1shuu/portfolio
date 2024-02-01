import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About() {
    return (
        <div id='#about' className='flex flex-col justify-center items-start bg-[#c6c6c6] h-[110vh] px-[15%]'>
            <span data-aos='fade-right' data-aos-duration='1000' className='sf lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#101010]'>about me</span>
            <span data-aos='fade-right' data-aos-duration='1000' className='sf text-justify w-[100%] lg:text-3xl md:text-xl sm:text-lg text-base text-[#101010] lg:my-16 md:my-12 sm:my-8 my-4'>
                I'm a third year student at the University of Silesia in Katowice, Poland.
                I love learning new technologies and creating awesome stuff.
                After hours I spend some time on both playing and creating video games.
                I am currently discovering the power of <b> React, React Native</b> and <b>Tailwind.</b>
            </span>
            <Link
                to='#portfolio'
                smooth={true}
                duration={500}
                data-aos='fade-right' data-aos-duration='1000'
                className='link cursor-pointer flex items-center overflow-hidden whitespace-nowrap border-[#101010] border-2 rounded-xl sf lg:text-lg md:text-base text-sm text-[#101010] hover:bg-[#101010] hover:text-[#c6c6c6] active:bg-[#101010] active:text-[#c6c6c6] lg:px-8 lg:py-4 md:px-8 md:py-4 px-6 py-3 shadow-xl transform transition-transform hover:scale-110'>
                see portfolio
                <div className='arrows inline-block'>
                    <AiOutlineArrowDown className='upper-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                    <AiOutlineArrowDown className='lower-arrow ml-2 lg:text-2xl md:text-xl sm:text-lg text-base' />
                </div>
            </Link>
        </div>
    );
}