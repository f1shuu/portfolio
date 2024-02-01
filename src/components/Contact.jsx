import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const handleEmailClick = () => {
    window.location.href = 'mailto:szulzyckifilip@gmail.com';
};

export default function Contact() {
    return (
        <div id='#contact' className='flex flex-col justify-center items-start bg-[#c6c6c6] h-[110vh] px-[15%]'>
            <span data-aos='fade-right' data-aos-duration='1000' className='sf lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#101010]'>how to reach me</span>
            <span data-aos='fade-right' data-aos-duration='1000' className='sf text-justify w-[100%] lg:text-3xl md:text-xl sm:text-lg text-base text-[#101010] lg:my-16 md:my-12 sm:my-8 my-4'>
                I'm a quick learner eager to collaborate with <b>your</b> team to achieve <b>your</b> goals.
                If you wish to contact me, please do so by emailing me at <span className='cursor-pointer underline' onClick={handleEmailClick}>szulzyckifilip@gmail.com</span>.
                You can also connect with me on my socials:
            </span>
            <div data-aos='fade-right' data-aos-duration='1000' className='cursor-pointer flex lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-[#101010]'>
                <a href='https://linkedin.com/in/fszulzycki/' className='mr-1'>
                    <AiOutlineLinkedin />
                </a>
                <a href='https://github.com/f1shuu' className='mx-1'>
                    <AiOutlineGithub />
                </a>
                <a href='https://twitter.com/xf1shu' className='ml-1'>
                    <AiOutlineTwitter />
                </a>
            </div>
        </div>
    );
}