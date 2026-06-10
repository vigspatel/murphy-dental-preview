import { ContactForm } from '@/ContactForm';
import { px, py } from '@/layout/styles/classes';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useLocationData from '@s/hooks/useLocationData';
import useWindowSize from '@s/hooks/useWindowSize';
import { ContactDetails } from './ContactDetails';

const Section = styled.section<{ contactPage: boolean }>`
    ${px};
    ${py};
    background: ${({ theme }) => theme.colors.white};

    > h1 {
        margin: 0 auto 32px;
        text-align: center;
        color: ${({ theme }) => theme.colors.black};
        max-width: 1600px;

        > br {
            display: none;
        }
    }

    @media (min-width: 1024px) {
        > h1 {
            text-align: left;

            ${({ contactPage }) =>
                !contactPage &&
                css`
                    > br {
                        display: block;
                    }
                `};
        }
    }
`;

const Flex = styled.div`
    @media (min-width: 1024px) {
        ${px};
        display: flex;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.lightBg};
        border-radius: 48px;
        margin: 96px auto 0;
        max-width: 1600px;
    }

    @media (min-width: 1440px) {
        padding-left: 96px;
        padding-right: 96px;
    }
`;

const Hours = styled.div`
    width: calc(100vw - 64px);
    max-width: 470px;
    text-align: center;
    margin: 0 auto 24px;

    > h2 {
        color: ${({ theme }) => theme.colors.primary};
        margin: 0 0 24px;
    }

    @media (min-width: 1024px) {
        text-align: left;
        max-width: 1600px;
        width: unset;
        margin-bottom: -16px;
    }
`;

export const ContactUs = () => {
    const { title } = useLocationData();

    const { width } = useWindowSize();

    return (
        <Section id="contact-us" contactPage={title === 'contact us'}>
            <h1>
                Reach Out To <br /> Us Today
            </h1>
            {title === 'contact us' ? (
                <Hours>
                    <h2>Office Hours</h2>
                    <p>Tuesday: 8:00am - 4:00pm</p>
                    <p>Wednesday: 8:00am - 4:00pm</p>
                    <p>Thursday: 8:00am - 4:00pm</p>
                </Hours>
            ) : (
                ''
            )}
            <Flex>
                {/* I didn't use flex order instead used two forms for accessibility reasons */}
                {width < 1024 ? <ContactForm /> : ''}
                <ContactDetails />
                {width < 1024 ? '' : <ContactForm desktop />}
            </Flex>
        </Section>
    );
};
