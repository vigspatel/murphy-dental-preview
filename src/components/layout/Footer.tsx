import CLink from '@/CLink';
import { footerNavLinks, info } from '@/layout/NavLinks';
import { flexCenter, px, py } from '@/layout/styles/classes';
import { ReactComponent as Facebook } from '@a/icons/facebook.svg';
import { ReactComponent as Google } from '@a/icons/google.svg';
import { ReactComponent as Yelp } from '@a/icons/yelp.svg';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const TheFooter = styled.footer`
    ${py};
    ${px};
    background-color: ${({ theme }) => theme.colors.primary};

    > a {
        display: block;
        margin: 0 auto 32px;
        max-width: max-content;

        > .gatsby-image-wrapper {
            filter: brightness(0) invert(1);
            max-width: 100px;
        }
    }

    > p {
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        margin: 0;
    }

    @media (min-width: 1024px) {
        padding-top: 50px;
        padding-bottom: 50px;

        > a {
            margin-bottom: 48px;

            > .gatsby-image-wrapper {
                max-width: 196px;
            }
        }
    }
`;

const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11ch, max-content));
    gap: 24px 72px;
    justify-content: center;
    margin-bottom: 32px;

    > a {
        color: ${({ theme }) => theme.colors.white};
        transition: color 0.3s ease-in-out;
        text-transform: capitalize;

        :hover,
        :focus {
            color: ${({ theme }) => theme.colors.tertiary};
        }
    }

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        gap: 0;
        max-width: 730px;
        margin: 0 auto 32px;

        > a {
            flex-shrink: 0;
        }
    }

    @media (min-width: 1024px) {
        margin-bottom: 48px;
    }

    @media (min-width: 1280px) {
        max-width: 780px;
    }
`;

const Social = styled.div`
    ${flexCenter};
    margin-bottom: 32px;

    > a {
        height: 25px;

        > svg {
            width: 25px;
            height: 25px;

            path {
                transition: fill 0.3s ease-in-out;
                fill: ${({ theme }) => theme.colors.bg};
            }
        }

        :not(:last-of-type) {
            margin-right: 32px;
        }

        :hover,
        :focus {
            path {
                fill: ${({ theme }) => theme.colors.tertiary};
            }
        }
    }

    @media (min-width: 1024px) {
        margin-bottom: 48px;

        > a {
            height: 35px;

            > svg {
                width: 35px;
                height: 35px;
            }

            :not(:last-of-type) {
                margin-right: 48px;
            }
        }
    }
`;

export const Footer = () => {
    return (
        <TheFooter>
            <CLink to="/">
                <StaticImage
                    src="../../../assets/images/layout/logo.svg"
                    alt="murphy dental center"
                    width={191}
                    height={101}
                />
            </CLink>
            <FooterLinks>
                {footerNavLinks.map((link, i) => (
                    <CLink key={i} to={link.link}>
                        {link.text}
                    </CLink>
                ))}
            </FooterLinks>
            <Social>
                <CLink to={info.social.google} aria-label="review us at google">
                    <Google />
                </CLink>
                <CLink to={info.social.facebook} aria-label="follow us at facebook">
                    <Facebook />
                </CLink>
                <CLink to={info.social.yelp} aria-label="check our yelp page">
                    <Yelp />
                </CLink>
            </Social>
            <p>All Rights Reserved MDC © {new Date().getFullYear()}</p>
        </TheFooter>
    );
};
