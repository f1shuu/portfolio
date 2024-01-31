import { Link } from 'react-scroll';
import { AiFillFilePdf } from 'react-icons/ai';
import '../fonts.css'
import f from '../images/f.png';

const handleDownloadCV = () => {
    const pdfFilePath = 'CV.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'CV-Filip-Szulżycki.pdf';
    link.click();
};

const buttonsData = [
    { text: 'Home', link: '#home' },
    { text: 'About', link: '#about' },
    { text: 'Portfolio', link: '#portfolio' },
    { text: 'Contact', link: '#contact' }
];

export default function Header() {
    return (
        <div className='flex justify-between items-center w-[100vw] lg:h-20 md:h-20 sm:h-16 bg-[#C6C6C6] lg:px-20 md:px-10 sm:px-6 px-2 fixed shadow-lg z-40'>
            <Link to='#home' spy={true} smooth={true} duration={500} className='cursor-pointer flex items-center lg:w-16 lg:h-16 md:w-16 md:h-16 sm:w-10 sm:h-10 w-8 h-8' >
                <img alt='logo' src={f} />
            </Link>
            <div className='flex items-center'>
                {buttonsData.map((element, index) => (
                    <Link key={index} to={element.link} spy={true} smooth={true} duration={500} className='cursor-pointer relative transition ease-in-out overflow-hidden lg:px-5 md:px-4 sm:px-3 px-2 py-3 group sf lg:text-xl md:text-lg sm:text-base text-xs text-[#101010]'>
                        {element.text}
                        <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-[#101010] transition-all duration-500 ease-in-out group-hover:w-full' />
                    </Link>
                ))}
                <button onClick={handleDownloadCV} className='inline-flex items-center whitespace-nowrap relative border-none text-[#101010] transition ease-in-out overflow-hidden lg:px-5 md:px-4 sm:px-3 px-2 py-3 group'>
                    <span className='cursor-pointer sf lg:text-xl md:text-lg sm:text-base text-xs'>Download CV</span>
                    <AiFillFilePdf className='ml-2 lg:text-3xl md:text-3xl sm:text-2xl text-lg' />
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-[#101010] transition-all duration-500 ease-in-out group-hover:w-full' />
                </button>
            </div>
        </div>
    )
}