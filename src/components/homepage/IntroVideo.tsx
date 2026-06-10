import { flexCenter, px, py } from '@/layout/styles/classes';
import bottomShapeDesktop from '@a/images/bottom-shape-desktop.png';
import bottomShape from '@a/images/bottom-shape.png';
import topShapeDesktop from '@a/images/top-shape-desktop.png';
import topShape from '@a/images/top-shape.png';
import styled from '@emotion/styled';

const Section = styled.section`
    ${px};
    ${py};

    > h3 {
        margin: 0 0 24px;
        text-align: center;
    }

    @media (min-width: 1024px) {
        > h3 {
            margin-bottom: 56px;
        }
    }

    @media (min-width: 1440px) {
        > h3 {
            margin-bottom: 80px;
        }
    }
`;

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 32px;
    max-width: 630px;
    margin: 0 auto;

    ::before {
        content: url(${topShape});
        position: absolute;
        top: -24px;
        right: -16px;
        filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(3443%)
            hue-rotate(171deg) brightness(94%) contrast(90%);
    }

    ::after {
        content: url(${bottomShape});
        position: absolute;
        bottom: 0;
        left: 0;
        filter: brightness(0) saturate(100%) invert(47%) sepia(8%) saturate(3443%)
            hue-rotate(171deg) brightness(94%) contrast(90%);
    }

    > p {
        width: 86%;
        background-color: ${({ theme }) => theme.colors.secondary};
        padding: 16px;
        border-radius: 24px;
        box-shadow: 0px 6px 64px 10px rgba(177, 33, 30, 0.1);
        color: ${({ theme }) => theme.colors.white};
        margin: -16px auto 0;
        position: relative;
    }

    @media (min-width: 1024px) {
        ${flexCenter};
        max-width: unset;
        padding-bottom: 0;

        ::before {
            top: -40px;
            right: -24px;
        }

        ::after {
            bottom: -24px;
        }

        > p {
            line-height: 137.5%;
            font-size: 1.125rem;
            border-radius: 48px;
            padding: 32px;
            margin: 0 -16px 0 0;
            order: -1;
            flex-basis: calc(38% + 16px);
            max-width: 500px;
        }

        > button {
            flex-basis: 62%;
            max-width: 1000px;
        }
    }

    @media (min-width: 1280px) {
        > p {
            font-size: 1.25rem;
            padding: 48px;
        }

        ::before {
            content: url(${topShapeDesktop});
            right: -48px;
            top: -64px;
        }

        ::after {
            content: url(${bottomShapeDesktop});
            left: -50px;
        }
    }

    @media (min-width: 1440px) {
        max-width: 1600px;

        > p {
            flex-basis: unset;
            font-size: 1.5rem;
        }

        > button {
            flex-basis: unset;
        }
    }

    @media (min-width: 1600px) {
        > p {
            font-size: 1.75rem;
        }
    }
`;

const Video = styled.iframe`
    border: none;
    overflow: hidden;
    border-radius: 32px;
    width: 100%;
    height: 100%;
    max-width: 1000px;
    max-height: 563px;
    aspect-ratio: 1000 /563;
`;

export const IntroVideo = () => {
    return (
        <Section>
            <h3>Watch The Video to Learn About MDC Expertise</h3>
            <Wrapper>
                <Video
                    title="Learn About MDC Expertise"
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F1662779963934915%2Fvideos%2F1497532370643093&show_text=false"
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    loading="lazy"
                ></Video>
                <p>
                    At MDC onboarding is the easiest and quickest. We provide many dental procedures
                    to our patients to get rid of the long lasting painful toothache or make it more
                    aesthetically pleasing to look at. We ensure they leave with a big smile on
                    their face, quite literally.
                </p>
            </Wrapper>
        </Section>
    );
};
