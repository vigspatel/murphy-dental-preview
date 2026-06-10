import { IconBtn, OutlineBtn, PrimaryBtn } from '@/buttons';
import CLink from '@/CLink';
import { getNavLink, info } from '@/layout/NavLinks';
import { flexCenter, ml } from '@/layout/styles/classes';
import { lgTxt } from '@/layout/styles/Typography';
import pin from '@a/icons/map-pin.svg';
import { ReactComponent as Phone } from '@a/icons/phone.svg';
import shapeDesktop from '@a/images/homepage/hero/shape-desktop.svg';
import shape from '@a/images/homepage/hero/shape.svg';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData, withArtDirection } from 'gatsby-plugin-image';

const Section = styled.section`
    display: grid;
    height: 100vh;
    min-height: 500px;
    overflow: hidden;

    > * {
        grid-area: 1/1;
    }

    > .gatsby-image-wrapper {
        ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        :first-of-type {
            img {
                object-position: top;
            }
        }

        :not(:first-of-type) {
            display: none;
        }
    }

    > img {
        z-index: 2;
        place-self: end;

        :last-of-type {
            display: none;
        }
    }

    @media (min-width: 500px) {
        min-height: 400px;
    }

    @media (min-width: 768px) {
        min-height: 460px;

        > img {
            display: none;

            :last-of-type {
                display: block;
                max-width: 64.6vw;
            }
        }
    }

    @media (min-width: 1024px) {
        min-height: 630px;

        > .gatsby-image-wrapper {
            :first-of-type {
                display: none;
            }

            :not(:first-of-type) {
                display: block;
            }
        }
    }

    @media (min-width: 1280px) {
        min-height: 700px;
    }

    @media (min-width: 1600px) {
        min-height: 760px;
    }

    @media (min-width: 1900px) {
        min-height: 840px;
    }
`;

const TextBox = styled.div`
    padding: 0 16px;
    align-self: end;
    justify-self: center;
    text-align: center;
    margin-bottom: 5vh;
    color: ${({ theme }) => theme.colors.white};
    z-index: 3;

    > h1 {
        color: ${({ theme }) => theme.colors.white};
        margin: 0 auto;
        max-width: 470px;
    }

    > h3 {
        margin: 8px auto 24px;
        max-width: 94%;
    }

    @media (min-height: 700px) and (max-width: 767px) {
        margin-bottom: 10vh;
    }

    @media (min-width: 768px) {
        align-self: center;
        margin-bottom: 0;
        margin-top: 83px; //navbar

        > h3 {
            margin: 24px auto 48px;
        }
    }

    @media (min-width: 1024px) {
        ${ml};
        padding: 0;
        justify-self: start;
        text-align: left;
        margin-top: calc(4.3vh + 141px); //navbar

        > h1 {
            max-width: 711px;
        }

        > h3 {
            margin-left: 0;
            margin-right: 0;
            max-width: unset;
        }
    }

    @media (min-width: 1280px) {
        margin-left: 7.9vw;
    }

    @media (min-width: 2000px) {
        margin-left: calc(12vw);
    }
`;

const Address = styled(CLink)`
    ${flexCenter};
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.white};

    :hover,
    :focus {
        color: ${({ theme }) => theme.colors.secondary};

        > span {
            background-color: ${({ theme }) => theme.colors.secondary};
            box-shadow: 0px 4px 32px rgba(227, 49, 45, 0.25);
        }
    }

    > span {
        margin-right: 16px;
        flex-shrink: 0;
        width: 44px;
        height: 44px;

        > img {
            width: 25px;
            height: 25px;
        }
    }

    @media (min-width: 1024px) {
        ${lgTxt};
        justify-content: flex-start;

        > span {
            margin-right: 24px;
            width: 60px;
            height: 60px;

            > img {
                width: 36px;
                height: 36px;
            }
        }
    }
`;

const Flex = styled.div`
    ${flexCenter};
    flex-direction: column;
    margin-top: 32px;

    > a:first-of-type {
        margin-bottom: 24px;
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    @media (min-width: 500px) {
        flex-direction: row;

        > a:first-of-type {
            margin-bottom: 0;
            margin-right: 48px;
        }
    }

    @media (min-width: 768px) {
        margin-top: 48px;
    }

    @media (min-width: 1024px) {
        justify-content: flex-start;
        margin-top: 72px;
    }
`;

export const Hero = () => {
    const data = useStaticQuery(graphql`
        query homepageHeroBg {
            mobile: file(relativePath: { eq: "homepage/hero/bg.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 95, placeholder: NONE)
                }
            }
            desktop: file(relativePath: { eq: "homepage/hero/bg-desktop.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 95, placeholder: NONE)
                }
            }
            dummy: file(relativePath: { eq: "homepage/hero/dummy.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, quality: 95, placeholder: NONE)
                }
            }
        }
    `);

    const bgMob = withArtDirection(getImage(data.dummy) as IGatsbyImageData, [
        {
            media: '(max-width: 1023px)',
            image: getImage(data.mobile) as IGatsbyImageData,
        },
    ]);

    const bgDesktop = withArtDirection(getImage(data.desktop) as IGatsbyImageData, [
        {
            media: '(max-width: 1023px)',
            image: getImage(data.dummy) as IGatsbyImageData,
        },
    ]);

    return (
        <Section>
            <GatsbyImage image={bgMob} alt="girl smiling" loading="eager" />
            <GatsbyImage image={bgDesktop} alt="girl smiling" loading="eager" />
            <TextBox>
                <h1>The smile you’ve always wanted can be yours today.</h1>
                <h3>Get an appointment with our dental experts</h3>
                <Address to={info.address.link}>
                    <IconBtn as="span">
                        <img src={pin} alt="" />
                    </IconBtn>
                    {info.address.text}
                </Address>
                <Flex>
                    <PrimaryBtn as={CLink} to={getNavLink('appointment')}>
                        Get an Appointment
                    </PrimaryBtn>
                    <OutlineBtn as={CLink} to={info.phone.link}>
                        <Phone />
                        {info.phone.text}
                    </OutlineBtn>
                </Flex>
            </TextBox>
            <img src={shape} alt="" />
            <img src={shapeDesktop} alt="" />
        </Section>
    );
};
