import React from 'react';
import gdscLogo from '../../assets/Google_for_Developers_logomark_color.png';
import dashlabsLogo from '../../assets/dashlabs-logo.jpg';
import ctuLogo from '../../assets/ctu-logo.png';
import '../Experience/experience.css'

function Experience() {
    return (
        <section id='experience' className='experience'>
            <h2 className='header2'>Experience</h2>
            <section className='expContainer'>
                <div className='expLeft'>
                    <h3 className='header3'>Lead <span className='expSpan'>Aug 2023 - present</span></h3>
                    <p>Google Developer Student Clubs - CTU</p>
                    <p className='expDetails'>Leading a student tech community on campus, interested in Google Developer technologies and even non-Google products that are industry trend and must haves in development.</p>
                </div>
                <div class='expRight'>
                    <img className='gdscLogo' src={gdscLogo} alt='GDSC Logo' />
                </div>
            </section>
            {/* <div className='verticalLine'></div> */}
            <section class='expContainer'>
                <div className='expLeft'>
                    <h3 className='header3'>Client Success Intern <span className='expSpan'>Aug 2023 - Sep 2023</span></h3>
                    <p>Dashlabs.ai</p>
                    <p className='expDetails'>Led the Sales department's lead generation efforts, managed client inquiries via email and messenger, and initiated daily company-wide standup meetings.</p>
                </div>
                <div className='expRight'>
                    <img className='dashlabsLogo' src={dashlabsLogo} alt='Dashlabs.ai Logo' />
                </div>


            </section>
            <section class='expContainer'>
                <div className='expLeft'>
                    <h3 className='header3'>Student <span className='expSpan'>September 2021 - present</span></h3>
                    <p>Cebu Technological University - Main Campus</p>
                    <p className='expDetails'>Studies BS in Computer Engineering (BSCpE) in a state technological university in Cebu City, Philippines. This 4-year program encompasses the software and hardware aspects.</p>
                </div>

                <div className='expRight'>
                    <img className='ctuLogo' src={ctuLogo} alt='CTU Logo' />
                </div>
            </section>
            <div className='dividerBottomDashed expDivider'></div>
        </section>
    );
}

export default Experience;