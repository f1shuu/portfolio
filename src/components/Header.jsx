import { Link } from 'react-scroll';
import { AiFillFilePdf } from 'react-icons/ai';

const handleDownload = () => {
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
    { link: '#skills', text: 'Skills' },
    { link: '#contact', text: 'Contact' },
    { link: '', text: 'Download CV', action: handleDownload }
];

export default function Header() {
    return (
        <>
            <div className='flex lg:justify-end justify-center items-center w-[100vw] h-[10vh] bg-[#F0F6F6] lg:px-20 md:px-10 sm:px-6 fixed shadow-lg'>
                {buttonsData.map((element, index) => (
                    <button key={index} onClick={element.action} className='inline-flex items-center whitespace-nowrap relative border-none transition ease-in-out overflow-hidden lg:px-5 md:px-4 sm:px-3 px-2 py-3 group'>
                        <Link to={element.link} spy={true} smooth={true} duration={500} className='cursor-pointer breeze-bold lg:text-xl md:text-lg sm:text-base text-sm text-[#2A2D34]'>{element.text}</Link>
                        {element.link === '' && <AiFillFilePdf className='ml-2 text-3xl text-[#2A2D34]' />}
                        <span className='absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-1 bg-[#376DEC] transition-all duration-500 ease-in-out group-hover:w-full' />
                    </button>
                ))}
            </div>
        </>
    )
}