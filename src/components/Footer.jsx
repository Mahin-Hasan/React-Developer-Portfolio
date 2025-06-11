import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram,FaLinkedin,FaGithub,FaTwitter  } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-bg px-4 divide-y-2 divide-purple-500 mt-24">
            <div className="hidden">

            </div>
            <div>
                <h2 className="text-center mt-5 font-sans text-2xl font-semibold tracking-widest">Connect With Me</h2>
                <ul className="mt-4 flex justify-center gap-6 md:gap-8">
                    <li>
                        <Link
                            to="https://www.facebook.com/mahin.hasan.750/"
                            target="blank"
                            className="text-blue-700 transition hover:text-blue-700/75 text-3xl"
                        >
                            <FaFacebook />
                        </Link>
                    </li>
                    {/* instagram */}
                    <li>
                        <Link
                            to="https://www.instagram.com/mahin_clicks/"
                            target="blank"
                            className="text-pink-700 transition hover:text-pink-700/75 text-3xl"
                        >
                            <FaInstagram />

                        </Link>
                    </li>

                    {/* linkedin */}
                    <li>
                        <Link
                            to="https://www.linkedin.com/in/mahin-hasan-/"
                            target="blank"
                            className="text-sky-700 transition hover:text-sky-700/75 text-3xl"
                        >
                            <FaLinkedin />
                        </Link>
                    </li>

                    {/* github */}
                    <li>
                        <Link
                            to="https://github.com/Mahin-Hasan"
                            target="blank"
                            className="text-white-700 transition hover:text-white-700/75 text-3xl"
                        >
                            <FaGithub />
                        </Link>
                    </li>
                    {/* Twitter */}
                    <li>
                        <Link
                            to="https://twitter.com/Mahin_hsn"
                            target="blank"
                            className="text-blue-600 transition hover:text-blue-600/75 text-3xl"
                        >
                            <FaTwitter  />

                        </Link>
                    </li>
                </ul>
                <div className="py-6 text-sm text-center">© All rights reserved <span className="text-purple-500 font-bold text-xl">|</span> Mahin Hasan {new Date().getFullYear()}</div>
            </div>
        </footer>
    );
};

export default Footer;