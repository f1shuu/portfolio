import { Link } from 'react-scroll';
import { AiFillFilePdf } from 'react-icons/ai';

const handleDownloadCV = () => {
    const pdfFilePath = 'CV.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'CV-Filip-Szulżycki.pdf';
    link.click();
};

const buttonsData = [
    { link: '#home', text: 'Home' },
    { link: '#portfolio', text: 'Portfolio' },
    { link: '#experience', text: 'Experience' },
    { link: '#skills', text: 'Skills' }
];

export default function Header() {
    return (
        <>
            <div className='flex lg:justify-end justify-center items-center w-[100vw] lg:h-[10vh] md:h-[10vh] sm:h-[10vh] bg-[#F0F6F6] lg:px-20 md:px-10 sm:px-6 fixed shadow-lg'>
                {buttonsData.map((element, index) => (
                    <button key={index} className='inline-flex items-center whitespace-nowrap relative border-none transition ease-in-out overflow-hidden lg:px-5 md:px-4 sm:px-3 px-2 py-3 group'>
                        <Link to={element.link} spy={true} smooth={true} duration={500} className='cursor-pointer breeze-bold lg:text-xl md:text-lg sm:text-base text-xs text-[#2A2D34]'>{element.text}</Link>
                        <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-[#376DEC] transition-all duration-500 ease-in-out group-hover:w-full' />
                    </button>
                ))}
                <button onClick={handleDownloadCV} className='inline-flex items-center whitespace-nowrap relative border-none transition ease-in-out overflow-hidden lg:px-5 md:px-4 sm:px-3 px-2 py-3 group'>
                    <span className='cursor-pointer breeze-bold lg:text-xl md:text-lg sm:text-base text-xs text-[#2A2D34]'>Download CV</span>
                    <AiFillFilePdf className='ml-2 lg:text-3xl md:text-3xl sm:text-2xl text-lg text-[#2A2D34]' />
                    <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-[#376DEC] transition-all duration-500 ease-in-out group-hover:w-full' />
                </button>
            </div>
        </>
    )
}