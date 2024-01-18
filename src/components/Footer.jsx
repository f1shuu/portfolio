import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <div
            className='w-full h-[20vh] flex bg-[#F0F6F6] px-[15%] text-[#2A2D34] breeze-regular justify-between'
            id='#contact'
        >
            <p className='flex items-center text-center'>
                © 2024 Filip Szulżycki. All rights reserved.
            </p>
            <div className='flex items-center text-5xl text-[#2A2D34]'>
                <a href='https://linkedin.com/in/fszulzycki/'>
                    <AiFillLinkedin />
                </a>
                <a href='https://github.com/f1shuu'>
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
}
