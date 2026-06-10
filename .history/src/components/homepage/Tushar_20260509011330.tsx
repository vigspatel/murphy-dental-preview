import { PrimaryBtn, TextBtn } from '@/buttons';
import CLink from '@/CLink';
import { ImageArticle } from '@/ImageArticle';
import { getNavLink } from '@/layout/NavLinks';
import { flexStart } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const Flex = styled.div`
    ${flexStart};
    flex-direction: column;
    margin-top: 32px;

    > a:first-of-type {
        margin-bottom: 24px;
    }

    @media (min-width: 500px) {
        flex-direction: row;
        align-items: center;

        > a:first-of-type {
            margin-bottom: 0;
            margin-right: 48px;
        }
    }
`;

export const Tushar = () => {
    return (
        <ImageArticle>
            <StaticImage
                src="../../../assets/images/our-team/tushar.jpg"
                alt="doctor tushar bulsara"
                width={550}
                height={550}
                placeholder="none"
                quality={95}
            />
            <div>
                <p>Meet MDC Owner and Doctor of Dental Medicine</p>
                <h3>Dr. Tushar Bulsara</h3>
                <p>
                    Dr. Tushar completed his undergraduate studies in Biology and went on to earn a
                    Doctor of Dental Medicine from ECU School of Dental Medicine. <br />
                    He stayed with ECU School of Dental Medicine and completed a one year Advanced
                    Education in General Dentistry at the Community Service Learning Center in
                    Sylva, NC.
                </p>
                <Flex>
                    <PrimaryBtn as={CLink} to={getNavLink('appointment')}>
                        Get an Appointment
                    </PrimaryBtn>
                    <TextBtn as={CLink} to={getNavLink('our team')}>
                        Learn More About Team
                    </TextBtn>
                </Flex>
            </div>
        </ImageArticle>
    );
};
