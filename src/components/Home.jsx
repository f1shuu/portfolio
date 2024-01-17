import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import '../fonts.css';

export default function Home() {
    return (
        <>
            <div
                className='bg-gradient-to-r from-[#6430D2] to-[#376dec] h-[100vh] px-[15%] text-left'
                id='#home'
            >
                <div className='h-[100%] flex items-center pb-20'>
                    <div>
                        <h1 className='text-6xl text-[#F0F0F6] breeze-bold h-32'>
                            hi, i'm Filip
                        </h1>
                        <p className='text-3xl text-[#F0F6F6] breeze-regular h-32'>
                            computer science student, programming passionate.
                        </p>
                        <div>
                            <Link to='#contact' smooth={true} duration={500} className='inline-flex cursor-pointer text-2xl text-[#F0F6F6] breeze-bold px-10 py-5 border-2 rounded-xl'>
                                Learn more
                                <AiOutlineArrowDown className='ml-2 text-3xl text-white' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}