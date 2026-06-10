import CLink from '@/CLink';
import { info } from '@/layout/NavLinks';
import { flexStart, px, py } from '@/layout/styles/classes';
import { ReactComponent as Email } from '@a/icons/email.svg';
import { ReactComponent as Pin } from '@a/icons/map-pin.svg';
import { ReactComponent as Phone } from '@a/icons/phone.svg';
import styled from '@emotion/styled';
import useLocationData from '@s/hooks/useLocationData';

const Container = styled.div`
    ${px};
    ${py};
    background-color: ${({ theme }) => theme.colors.lightBg};
    border-radius: 24px;
    margin-top: -355px;

    @media (max-width: 1023px) {
        padding-top: 390px !important;
    }

    @media (min-width: 1024px) {
        margin-top: 0;
        background-color: none;
        padding-right: 0 !important;
        padding-left: 0 !important;
        flex-shrink: 0.7;
        flex-grow: 1;
    }

    @media (min-width: 1280px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

const Details = styled.div`
    margin-bottom: 24px;

    @media (min-width: 1024px) {
        margin-bottom: 48px;
    }

    @media (min-width: 1280px) {
        ${flexStart};
    }
`;

const InfoBox = styled.div`
    max-width: 470px;
    margin: 0 auto;

    :first-of-type {
        margin-bottom: 16px;
    }

    > h3 {
        margin: 0 0 8px;
        color: ${({ theme }) => theme.colors.primary};
    }

    @media (min-width: 1024px) {
        max-width: 700px;
        margin: 0;
    }

    @media (min-width: 1280px) {
        :first-of-type {
            margin-bottom: 0;
            max-width: 414px;
            margin-right: 48px;
        }

        :last-of-type {
            flex-shrink: 0;
        }

        > h3 {
            margin-bottom: 24px;
        }
    }
`;

const InfoLink = styled(CLink)`
    margin: 0;
    display: inline-flex;
    align-items: center;
    transition: color 0.3s ease-in-out;

    > svg {
        margin-right: 16px;
        flex-shrink: 0;
        width: 20px;

        > path {
            stroke: ${({ theme }) => theme.colors.secondary};
            transition: stroke 0.3s ease-in-out;
        }
    }

    :hover,
    :focus {
        color: ${({ theme }) => theme.colors.tertiary};

        > svg > path {
            stroke: ${({ theme }) => theme.colors.tertiary};
        }
    }
`;

const Map = styled.iframe`
    border: 0;
    border-radius: 16px;
    width: 100%;
    max-width: 660px;
    aspect-ratio: 311/187;
    margin: 0 auto;
    display: block;

    @supports not (aspect-ratio: 1/1) {
        height: 50vw;
        max-height: 396.87px;
    }

    @media (min-width: 1024px) {
        max-width: 850px;
        border-radius: 48px;
        margin: 0;

        @supports not (aspect-ratio: 1/1) {
            max-height: 400px;
            height: 25vw;
        }
    }

    @media (min-width: 1280px) {
        aspect-ratio: 850/400;
    }
`;

const EmailUs = styled(InfoBox)`
    margin-bottom: 24px;
    margin-top: -8px;

    @media (min-width: 1024px) {
        margin-bottom: 48px;
        margin-top: -24px;
    }
`;

export const ContactDetails = () => {
    const { title } = useLocationData();

    return (
        <Container>
            <Details>
                <InfoBox>
                    <h3>Address</h3>
                    <InfoLink to={info.address.link}>
                        <Pin />
                        {info.address.text}
                    </InfoLink>
                </InfoBox>
                <InfoBox>
                    <h3>Call us</h3>
                    <InfoLink to={info.phone.link}>
                        <Phone />
                        {info.phone.text}
                    </InfoLink>
                </InfoBox>
            </Details>
            {title === 'contact us' ? (
                <EmailUs>
                    <h3>Email Us</h3>
                    <InfoLink to={info.email.link}>
                        <Email />
                        {info.email.text}
                    </InfoLink>
                </EmailUs>
            ) : (
                ''
            )}
            <Map
                id="map"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6528.312025380314!2d-84.020667!3d35.102815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885ee228df1b4705%3A0x388da7be083d6e55!2sMurphy%20Dental%20Center!5e0!3m2!1sen!2sus!4v1664602106981!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
            />
        </Container>
    );
};
