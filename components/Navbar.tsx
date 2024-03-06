import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className ="max-w-[1440-px] mx-auto
        flex justify-between items-center sm:px-10 px-6 py-4">
            <Link href="/" className='flex justify-center items-center'>
                <Image 
                    src="/nba-6.svg"
                    alt='NBA Logo'
                    width={60}
                    height={1}
                    className='object-contain'>

                </Image>
            </Link>
            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles="text-white
                rounded-full bg-primary-blue min-w-[130px]"></CustomButton>
        </nav>

    </header>
  )
}

export default Navbar