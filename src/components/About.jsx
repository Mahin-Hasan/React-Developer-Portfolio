import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { MdEmail } from "react-icons/md";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full z-10'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='card icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
      >
        I am a passionate web developer currently pursuing my Master's in Computer Science at Algoma University. I enjoy building responsive and user-friendly websites and I am proficient in MERN Stack, React, Express, Node, MongoDB, Mongoose, NextJS, JavaScript and TypeScript. Known for my rapid learning abilities, I always keep myself updated by learning new technologies and frameworks. Let's collaborate to transform your ideas into reality!
        
        <span className="block">
        <a href = "mailto: mahinhasan3700@gmail.com"><span className="flex items-center gap-2">
        <span className="hidden sm:block">Send Email</span> <MdEmail className="text-purple-500 text-xl" />:<li className="text-purple-500 underline list-none">mahinhasan3700@gmail.com</li> </span></a>
        
        </span>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* Trying to create a animated ball */}
      <div id="bouncy"></div>

    </>
  );
};

export default SectionWrapper(About, "about");