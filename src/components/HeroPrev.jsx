import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { Link } from 'react-router-dom';
import { IoCall } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />

        </div>
        <div className='z-10'>
          <h1 className={`${styles.heroHeadText}`}>I&apos;m <span className='text-[#915eff]'>Mahin</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a <span className='text-[#915eff] font-semibold'>MERN</span> Stack developer, <br className='sm:block hidden' /> building functional web applicaitons</p>
          <Link to='https://drive.google.com/file/d/12GNKR4q8Bh13_8rvHEEdono8EH-owrXP/view?usp=drive_link' target='black'>
            <button
              className='bg-purple-950 py-2 sm:py-3 px-3 sm:px-6 rounded-xl my-1 sm:my-4 outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              <div className='flex justify-center items-center gap-2'>
                <span>
                  Download Resume
                </span>
                <IoMdDownload />
              </div>
            </button>
          </Link>
          <Link to="tel:+8801628252625">
            <button
              className='bg-purple-950 py-2 sm:py-3 px-3 sm:px-6 rounded-xl my-1 ms-1 sm:ms-2 sm:my-4 outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              <div className='flex justify-center items-center gap-2'>
                <span>Contact</span>
                <IoCall />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <ComputersCanvas />
      {/* add animation for scroll down */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-9 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />


          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero