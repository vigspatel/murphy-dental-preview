import { CommonHero } from '@/CommonHero';
import { flexCenter, px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

const Section = styled.section`
    ${px};
    ${py};

    > h2 {
        text-align: center;
        margin: 0 0 40px;
    }

    @media (min-width: 1024px) {
        > h2 {
            margin-bottom: 80px;
        }
    }
`;

const Image = styled.div`
    :not(:last-of-type) {
        margin-bottom: 48px;
    }

    > div {
        max-width: 375px;
        margin: 0 auto;

        :first-of-type {
            margin-bottom: 16px;
        }

        > .gatsby-image-wrapper {
            border-radius: 24px;
            opacity: 0.9999; //safari border radius bug fix
        }

        > p {
            margin: 8px auto 0;
            max-width: max-content;
        }
    }

    @media (min-width: 768px) {
        ${flexCenter};

        > div {
            margin: 0;

            :first-of-type {
                margin: 0 16px 0 0;
            }
        }
    }

    @media (min-width: 1024px) {
        :not(:last-of-type) {
            margin-bottom: 64px;
        }

        > div {
            :first-of-type {
                margin-right: 32px;
            }
        }
    }
`;

const SmileGallery: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>Smile Gallery</h1>
            <p>
                Welcome to our Smile Gallery. <br />
                Please enjoy some of our amazing smile transformations. <br />
                View the before and after photos of our patients who achieved astonishing results
                post their treatment at Murphy Dental Care
            </p>
        </CommonHero>
        <Section>
            <h2>Patient Photos Before & After Getting Crowns (Caps)</h2>
            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/01-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/01-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>

            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/02-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/02-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>

            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/03-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/03-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>

            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/04-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/04-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>

            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/05-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/05-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>

            <Image>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/06-1.jpg"
                        alt="before patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>Before</p>
                </div>
                <div>
                    <StaticImage
                        src="../../../assets/images/smile-gallery/06-2.jpg"
                        alt="after patient photo"
                        width={375}
                        height={190}
                        transformOptions={{
                            cropFocus: 'center',
                        }}
                    />
                    <p>After</p>
                </div>
            </Image>
        </Section>
    </Fragment>
);

export default SmileGallery;
