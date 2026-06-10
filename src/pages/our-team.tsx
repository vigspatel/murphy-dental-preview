import { CommonHero } from '@/CommonHero';
import { ImageArticle } from '@/ImageArticle';
import { ImageBox } from '@/ImageBox';
import { px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

const Headings = styled.div`
    ${px};
    ${py};
    text-align: center;

    > p {
        margin: 0;
        color: ${({ theme }) => theme.colors.tertiary};
        font-weight: 600;
    }

    > h2 {
        margin: 12px 0 0;
    }

    @media (min-width: 1280px) {
        padding-bottom: 80px;

        > h2 {
            margin-top: 24px;
        }
    }
`;

const OurTeam: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>Meet The Team</h1>
            <p>
                At the core of our dental practice is a friendly team of professionals that are
                dedicated to your utmost comfort and optimal oral health. We view each patient as a
                unique individual, and tailor each treatment to your specific needs.
            </p>
        </CommonHero>
        <Headings>
            <p>Our Doctors</p>
            <h2>Qualified and Experienced Doctors</h2>
        </Headings>
        <ImageArticle right>
            <StaticImage
                src="../../assets/images/our-team/tushar.jpg"
                alt="doctor tushar bulsara"
                width={550}
                height={550}
            />
            <div>
                <p>Doctor of Dental Medicine, DMD</p>
                <h3>Dr. Tushar Bulsara</h3>
                <p>
                    Dr. Tushar Bulsara DMD grew up in Gastonia, North Carolina. He completed his
                    undergraduate studies in Biology from the University of North Carolina in Chapel
                    Hill and went on to earn a Doctor of Dental Medicine from ECU School of Dental
                    Medicine. Dr. Bulsara stayed with ECU School of Dental Medicine and completed a
                    one year Advanced Education in General Dentistry at the Community Service
                    Learning Center in Sylva, NC.
                    <br /> <br />
                    Dr. Bulsara joined the team at Murphy Dental Center to continue providing dental
                    care for patients in the Western NC, North Georgia, and Eastern Tennessee
                    communities. He looks forward to helping patients improve their dental health
                    and quality of life. Dr. Bulsara enjoys hiking trails, playing instruments,
                    producing music, and eating at new restaurants. He is the owner since June of
                    2021.
                </p>
            </div>
        </ImageArticle>
        <Headings>
            <p>Our Staff</p>
            <h2>Compassionate & Competent Team</h2>
        </Headings>

        <ImageBox>
            <div>
                <StaticImage
                    src="../../assets/images/our-team/michelle.jpg"
                    alt="Michelle osta"
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <p>Doctor of Dental Medicine, DMD</p>
                <h2>Dr. Michelle Osta</h2>
                <p>
                    Dr. Michelle Osta, DMD, grew up in Greenville, North Carolina. She completed her
                    undergraduate education in economics from the University of North Carolina at
                    Chapel Hill and went on to become a Doctor of Dental Medicine at East Carolina
                    University School of Dental Medicine. Dr. Osta moved to Western North Carolina
                    to complete a one year general practice residency at MAHEC in Asheville, North
                    Carolina, where she continues to teach residents and students part-time.
                    <br />
                    Dr. Osta joined her husband and the team at Murphy Dental Center in June 2023 to
                    continue providing dental care for patients in the Western North Carolina,
                    Northern Georgia, and Eastern Tennessee communities. Helping her patients
                    achieve their dental goals is her passion. Dr. Osta enjoys reading, traveling,
                    spending time with family and friends, and trying new coffee shops and
                    restaurants.
                </p>
            </div>
        </ImageBox>

        <ImageBox right>
            <div>
                <StaticImage
                    src="../../assets/images/our-team/traci.jpg"
                    alt="traci anderson"
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <p>Registered Dental Hygienist</p>
                <h2>Traci Anderson</h2>
                <p>
                    Traci has been a dental hygienist at Murphy Dental Center for 30 years. She
                    started as a patient here at Murphy Dental Center when she moved to Cherokee
                    county at the age of 11, and lucky enough to know what her career path would be
                    at the age of 14. Traci graduated Asheville Buncombe technical college as a
                    dental assistant in 1990 and as a dental hygienist in 1992.
                </p>
            </div>
        </ImageBox>

        <ImageBox>
            <div>
                <StaticImage
                    src="../../assets/images/our-team/jennifer.jpg"
                    alt="jennifer pullium"
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <p>Dental Assistant</p>
                <h2>Jennifer Pullium</h2>
                <p>
                    Jennifer joined Murphy Dental Center in 2006 as a dental assistant and has an
                    Associate of Applied Sciences. The most rewarding part of the job to Jennifer is
                    helping patients overcome their dental anxiety and help them receive the care
                    they need. <br /> Outside of dentistry, she enjoys spending time with her
                    husband and two daughters. Some of her hobbies include gardening, hiking, and
                    camping.
                </p>
            </div>
        </ImageBox>

        <ImageBox right>
            <div>
                <StaticImage
                    src="../../assets/images/our-team/brianne.jpg"
                    alt="Brianne Woods"
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <p>RDH</p>
                <h2>BriAnne Woods</h2>
                <p>
                    BriAnne joined Murphy Dental Center in March 2022, but has been a long time
                    patient with the practice. BriAnne comes from a background in customer service
                    and is excited to be in the dental field helping patients get the care they
                    need. <br />
                    In her spare time, BriAnne loves spending time with family, shopping, and being
                    a cat mom.
                </p>
            </div>
        </ImageBox>

        <ImageBox>
            <div>
                <StaticImage
                    src="../../assets/images/our-team/cheyenne.jpg"
                    alt="cheyenne deRamus"
                    width={300}
                    height={300}
                />
            </div>
            <div>
                <p>Dental Assistant</p>
                <h2>cheyenne deRamus</h2>
                <p>
                    Cheyenne received her Dental Assistant license in 2011 and joined Murphy Dental
                    Center in July 2022. Recently relocating from the West Coast, she is excited to
                    be in Murphy NC and serve the WNC and surrounding communities. She loves
                    spending her free time outdoors and spoiling her two bulldogs.
                </p>
            </div>
        </ImageBox>
    </Fragment>
);

export default OurTeam;
