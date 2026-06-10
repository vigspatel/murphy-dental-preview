import { PrimaryBtn, SecondaryBtn } from '@/buttons';
import CLink from '@/CLink';
import { CommonHero } from '@/CommonHero';
import { flexCenter, px, py } from '@/layout/styles/classes';
import { h1, lgTxt, smTxt } from '@/layout/styles/Typography';
import { Video } from '@/Video';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment, useEffect, useRef, useState } from 'react';

const Hero = styled(CommonHero)`
    > div:first-of-type {
        max-width: 550px;

        > h1 {
            margin: 32px 0 0;
        }
    }

    @media (min-width: 1280px) {
        ${flexCenter};

        > div:first-of-type {
            max-width: 720px;
            flex-shrink: 1.5;
        }
    }
`;
const videoStyles = css`
    margin-top: 40px;
    box-shadow: 0px 6px 64px 10px rgba(43, 97, 84, 0.2);
    border-radius: 24px;
    max-width: 550px;
    aspect-ratio: 934/526;

    video {
        aspect-ratio: 934/526;
    }

    @media (min-width: 1280px) {
        max-width: 934px;
        border-radius: 48px;
        margin-top: 0;
        margin-left: 3.33vw; //64px at 1920
    }
`;

const Section = styled.section`
    ${px};
    ${py};
    background-color: ${({ theme }) => theme.colors.bg};

    > div:first-of-type {
        max-width: 450px;
        margin: 0 0 32px;

        > .gatsby-image-wrapper {
            width: 30px;
            height: 39.13px;
        }

        > h2 {
            ${h1};
            color: ${({ theme }) => theme.colors.primary};
            margin: 24px 0;
        }
    }

    @media (min-width: 1024px) {
        ${flexCenter};

        > div:first-of-type {
            margin-right: 3.33vw; //64px at 1920
            max-width: 900px;

            > .gatsby-image-wrapper {
                width: 46px;
                height: 60px;
            }

            > h2 {
                margin: 48px 0;
            }
        }
    }
`;

const Calculator = styled.form`
    box-shadow: 0px 8px 36px rgba(128, 138, 159, 0.25);
    border-radius: 48px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 32px;
    max-width: 360px;
    flex-shrink: 0;

    > h3 {
        margin: 0 0 32px;
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;

        + p {
            ${lgTxt};
            margin: 0 0 24px;
        }
    }

    > button {
        margin: 32px auto 0;
        max-width: max-content;
        display: block;
    }

    @media (min-width: 1024px) {
        max-width: unset;
        width: 450px;
        padding: 64px 48px;

        > h3 {
            margin-bottom: 48px;

            + p {
                font-size: 1.5rem;
                margin-bottom: 32px;
            }
        }

        > button {
            ${lgTxt};
            margin-top: 48px;
        }
    }
`;

const InputAmount = styled.div`
    padding-bottom: 8px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.gray};
    display: flex;

    ::before {
        ${lgTxt};
        content: '$';
        color: ${({ theme }) => theme.colors.textBlack};
    }

    > input {
        ${lgTxt};
        border: none;
        outline: none;
        align-items: center;
        background-color: ${({ theme }) => theme.colors.white};
        margin-left: 16px;
        width: 100%;
    }
`;

const Article = styled.article`
    ${px};
    ${py};
    box-sizing: content-box;
    padding-top: 0 !important;
    background-color: ${({ theme }) => theme.colors.bg};

    a {
        color: ${({ theme }) => theme.colors.primary};
        transition: color 0.3s ease-in-out;

        :hover,
        :focus {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    > p {
        max-width: 770px;

        :first-of-type {
            margin-top: 0;
        }

        :last-of-type {
            ${smTxt};
            color: ${({ theme }) => theme.colors.textBlack};
            margin: 0;
        }
    }

    @media (min-width: 1024px) {
        > p {
            max-width: 1400px;
            margin-left: auto !important;
            margin-right: auto !important;
        }
    }
`;
const CareCredit: Page = () => {
    const videoEl = useRef<HTMLVideoElement>(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error('Error attempting to play', error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    const [amount, setAmount] = useState('');

    const handleAmount = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        setAmount(target.value);
    };

    return (
        <Fragment>
            <Hero>
                <div>
                    <StaticImage
                        src="../../../assets/images/care-credit/logo.png"
                        width={300}
                        height={123}
                        alt="care credit, making care possible today"
                    />
                    <h1>The Convenient Healthcare Financing Solution</h1>
                </div>
                <Video
                    css={videoStyles}
                    image={
                        <StaticImage
                            src="../../../assets/images/care-credit/hero.jpg"
                            alt="happy family"
                            width={934}
                            height={526}
                        />
                    }
                >
                    <video
                        autoPlay
                        controls
                        playsInline
                        style={{ width: '100%', height: '100%' }}
                        ref={videoEl}
                    >
                        <source src="/carecredit.mp4" type="video/mp4" />
                        <track
                            label="English"
                            kind="captions"
                            srcLang="en"
                            src="/carecredit-subtitles.vtt"
                        ></track>
                    </video>
                </Video>
            </Hero>
            <Section>
                <div>
                    <StaticImage
                        src="../../../assets/images/care-credit/calculator.svg"
                        alt="calculator"
                    />
                    <h2>CareCredit Healthcare Credit Card For Dental Procedure Financing</h2>
                    <SecondaryBtn
                        as={CLink}
                        to="https://www.carecredit.com/go/632NKM/?dtc=DS7X&sitecode=CCCAPDS7X/"
                    >
                        Apply Now
                    </SecondaryBtn>
                </div>
                <Calculator
                    method="post"
                    action={`https://www.carecredit.com/payment_calculator/template.html?amount=${amount}&keys=`}
                    target="_blank"
                >
                    <h3>Payment Calculator</h3>
                    <p>Estimated Procedure Amount</p>
                    <InputAmount>
                        <input
                            type="number"
                            value={amount}
                            onChange={handleAmount}
                            required
                            min="200"
                        />
                    </InputAmount>
                    <PrimaryBtn>Calculate Amount Payable</PrimaryBtn>
                </Calculator>
            </Section>
            <Article>
                <p>
                    We are pleased
                    to accept the CareCredit healthcare, credit card. CareCredit lets you say
                    &ldquo;Yes&rdquo; to recommended surgical and non-surgical dental procedures
                    like crowns, oral surgery or even a general checkup, and pay for them in
                    convenient monthly payments that fit your financial situation. <br /> <br />
                    CareCredit is a credit card that helps you pay for treatments and procedures for
                    you or your family that may not be covered by insurance. With special financing
                    options,* you can use your CareCredit card again and again for your dental
                    needs, as well as at thousands of other healthcare providers, including
                    optometrists, veterinarians, ophthalmologists and hearing specialists. <br />
                    <br />
                    It’s free and easy to apply and you’ll receive a decision immediately. If you’re
                    approved, you can schedule your procedures even before you receive your card.
                    With more than 21 million accounts opened since CareCredit began nearly 30 years
                    ago, they are the trusted source for healthcare credit cards. <br /> <br />
                    Learn more by visiting{' '}
                    <CLink to="https://carecredit.com">www.carecredit.com</CLink> or contacting our
                    office. Ready to apply? Apply online for your CareCredit healthcare credit card
                    today. <br />
                    <br />
                    You’ll be smiling brighter in no time!
                </p>
                <p>
                    *Subject to credit approval. Minimum monthly payments required. Visit{' '}
                    <CLink to="https://carecredit.com">www.carecredit.com</CLink> for details.
                </p>
            </Article>
        </Fragment>
    );
};
export default CareCredit;
