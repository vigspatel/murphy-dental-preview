import { CommonHero } from '@/CommonHero';
import { flexCenter, px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

const Article = styled.article`
    ${px};
    ${py};

    > div {
        :first-of-type {
            box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.2);
            border-radius: 24px;
            opacity: 0.9999; //safari border radius bug fix
        }

        :last-of-type {
            margin-top: 32px;
            max-width: 600px;

            > h2 {
                margin: 0;
            }

            > p {
                margin: 16px 0 24px;
            }
        }
    }

    @media (min-width: 1024px) {
        ${flexCenter};

        > div:last-of-type {
            margin-top: 0;
            flex-shrink: 2;
            margin-left: 3.3vw; //64px at 1920

            > p {
                margin: 24px 0 48px;
            }
        }
    }
`;

const NewPatientForm: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>New Patient Form</h1>
            <p>
                If you are a new patient to our office, below contains our new patient forms that
                will need to be filled out before you arrive at our office. Filling them out will
                allow us to attend to your medical needs more quickly than completing them on your
                arrival
            </p>
        </CommonHero>
        <Article>
            <StaticImage
                src="../../../assets/images/new-patient-form-hero.jpg"
                alt="dentist treating patient"
                width={600}
                height={560}
            />
            <div>
                <h2>First Visit For a Patient</h2>
                <p>
                    Prepare yourself mentally for the appointment before hand. Take care of your
                    oral hygiene. Bring an attendant if you feel its necessary to bring one. Thank
                    you and please call our office if you have any questions at all.
                </p>
                {/* <PrimaryBtn
                    as={CLink}
                    to="https://murphydentalcenter.dentalsymphony.com/Patient/NewPatient.aspx"
                >
                    Click Here for New Patient Form
                </PrimaryBtn> */}
            </div>
        </Article>
    </Fragment>
);

export default NewPatientForm;
