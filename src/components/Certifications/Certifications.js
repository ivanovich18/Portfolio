import React, { useEffect } from 'react';
import courseraPic from '../../assets/others/coursera.png';
import harvardPic from '../../assets/others/harvard.png';
import uniOfPhilippinesOU from '../../assets/others/upou.jpg';
import '../Certifications/certifications.css'
import { BiLinkExternal } from "react-icons/bi";

import AOS from "aos";
import 'aos/dist/aos.css';

function Certifications() {

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 2000
        })
    }, [])

    return (
        <section id='certifications' class='certifications'>
            <h2 className='header2 smallerHeader' data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">Certifications</h2>
            <section className='certDiv whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="500">
                <div class='certLeft'>
                    <h3 className='header3'>Meta Front-End Developer Professional Certificate</h3>
                    <p>Coursera</p>
                    <p className='date'>Issued September 2023</p>
                    <p>Skills: Web Development · UI/UX Design · Web Applications </p>
                    <div className='certButtons'>
                        <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/9Q5DRBL3ZBPZ' target='_blank'>
                            <button className='certBtn'>Show Credential <BiLinkExternal /></button>
                        </a>
                    </div>
                </div>
                <div className='certRight'>
                    <img src={courseraPic} alt='Coursera Logo' />
                </div>
            </section>
            <section className='certDiv whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="600">
                <div class='certLeft'>
                    <h3 className='header3'>CS50's Introduction to Computer Science (2023)</h3>
                    <p>CS50, Harvard University</p>
                    <p className='date'>Issued April 2023</p>
                    <p>Skills: Computer Science · Software Development · Programming </p>
                    <div className='certButtons'>
                        <a href='https://certificates.cs50.io/18297bea-a446-47f5-892c-1eeeb1e49905.pdf?size=letter' target='_blank'>
                            <button className='certBtn'>Show Credential <BiLinkExternal /></button>
                        </a>
                    </div>

                </div>
                <div className='certRight'>
                    <img src={harvardPic} alt='Harvard University Logo' />
                </div>
            </section>
            <section className='certDiv whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="700">
                <div class='certLeft'>
                    <h3 className='header3'>Principles of Graphic Design</h3>
                    <p>University of the Philippines Open University</p>
                    <p className='date'>Issued February 2023</p>
                    <p>Skills: Graphics Design · Design Thinking · Product Design </p>
                    <div className='certButtons'>
                        <a href='https://drive.google.com/file/d/17j1YBzKObishuTM0qHTkVP9GIw2hPsqO/view?usp=drive_link' target='_blank'>
                            <button className='certBtn'>Show Credential <BiLinkExternal /></button>
                        </a>
                    </div>
                </div>
                <div className='certRight'>
                    <img src={uniOfPhilippinesOU} alt='University of the Philippines Open University Logo' />
                </div>
            </section >
            <section className='otherCerts whiteSelection' data-aos="flip-left" data-aos-duration="600" data-aos-delay="800">
                <div className='otherLeft'>
                    <div className='other'>
                        <h3>
                            AWS Community Day - Cebu 2023
                            <span>
                                <a href='https://drive.google.com/file/d/1tZ_ssTlnqUGq9HZ5HvSTT0ZDlogXrnO6/view?usp=drive_link' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Amazon Web Services - Volunteer</p>
                    </div>
                    <div className='other'>
                        <h3>WordPress with Divi Workshop<span>
                            <a href='https://drive.google.com/file/d/1jSocaHcTxqb9iSiipKc0I0SK8eKprp6c/view?usp=drive_link' target='_blank'>
                                <button><BiLinkExternal class='otherLink' /></button>
                            </a>
                        </span>
                        </h3>
                        <p>Proweaver</p>
                    </div>
                    <div className='other'>
                        <h3>Crash Course on Python
                            <span>
                                <a href='https://coursera.org/share/6fd2daae0095adf89c37f3aa3e9284e6' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Google</p>
                    </div>
                    <div className='other'>
                        <h3>Computer Hardware Basics
                            <span>
                                <a href='https://www.credly.com/badges/88af6997-9bb3-4943-ac4a-94162ca30ad9/linked_in_profile' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Cisco</p>
                    </div>
                    <div className='other'>
                        <h3>Version Control
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/KNRFP3XNNYLY' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Introduction to Frontend Development
                            <span>
                                <a href='https://coursera.org/verify/WUCM6P22GTVC' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Programming with JavaScript
                            <span>
                                <a href='https://coursera.org/verify/NTKX6FU7WN39' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                </div>
                <div className='otherRight'>
                    <div className='other'>
                        <h3>Coding Interview Preparation
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/HWCX2PSTY8VJ' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Front-End Developer Capstone
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/YQJLAM29SGKF' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Advanced React
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/VUHKAVP6VGH3' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>React Basics
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/HX5Z2PSR47KC' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Principles of UX/UI Design
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/VQNFDPVJL76X' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>HTML and CSS in depth
                            <span>
                                <a href='https://www.coursera.org/account/accomplishments/certificate/XKRZG5WR6Z57' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>Meta</p>
                    </div>
                    <div className='other'>
                        <h3>Responsive Web Design
                            <span>
                                <a href='https://freecodecamp.org/certification/ivansuralta/responsive-web-design' target='_blank'>
                                    <button><BiLinkExternal class='otherLink' /></button>
                                </a>
                            </span>
                        </h3>
                        <p>freeCodeCamp</p>
                    </div>
                </div>
            </section>
            <div className='dividerBottomDashed divCertifications'></div>
        </section>
    );
}

export default Certifications;