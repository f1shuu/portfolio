import { Link } from 'react-scroll';
import { AiFillFilePdf } from 'react-icons/ai';

export default function Header() {
    const handleDownload = () => {
        const pdfFilePath = 'CV.pdf';
        const link = document.createElement('a');
        link.href = pdfFilePath;
        link.download = 'CV-Filip-Szulżycki.pdf';
        link.click();
    };

    return (
        <>
            <div className='flex justify-end items-center bg-[#F0F6F6] lg:w-[100vw] h-[10vh] pr-20 fixed shadow-lg'>
                <div>
                    <Link to='#home' spy={true} smooth={true} duration={500} className='cursor-pointer px-5 py-2 breeze-bold text-[18px] text-[#2A2D34] hover:border-b-4 hover:border-[#376dec]'>Home</Link>
                    <Link to='#portfolio' spy={true} smooth={true} duration={500} className='cursor-pointer px-5 py-2 breeze-bold text-[18px] text-[#2A2D34] hover:border-b-4 hover:border-[#376dec]'>Portfolio</Link>
                    <Link to='#experience' spy={true} smooth={true} duration={500} className='cursor-pointer px-5 py-2 breeze-bold text-[18px] text-[#2A2D34] hover:border-b-4 hover:border-[#376dec]'>Experience</Link>
                    <Link to='#skills' spy={true} smooth={true} duration={500} className='cursor-pointer px-5 py-2 breeze-bold text-[18px] text-[#2A2D34] hover:border-b-4 hover:border-[#376dec]'>Skills</Link>
                    <Link to='#contact' spy={true} smooth={true} duration={500} className='cursor-pointer px-5 py-2 breeze-bold text-[18px] text-[#2A2D34] hover:border-b-4 hover:border-[#376dec]'>Contact</Link>
                    <button onClick={handleDownload} className='inline-flex items-center cursor-pointer text-[18px] text-[#2A2D34] breeze-bold px-5 py-3 border-4 border-[#376DEC] ml-10 rounded-xl'>
                        Download CV
                        <AiFillFilePdf className='ml-2 text-3xl text-[#2A2D34]' />
                    </button>
                </div>
            </div>
        </>
    )
}