import close from '@a/icons/close.svg';
import open from '@a/icons/down-arrow.svg';
import styled from '@emotion/styled';
import { AccordionButton, AccordionItem as Item, useAccordionItemContext } from '@reach/accordion';
import '@reach/accordion/styles.css';
import AnimateHeight from 'react-animate-height';

const AccordionItem = styled(Item)`
    margin: 16px auto;
    border-radius: 16px;
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.bg};

    > h3 {
        margin: 0;
    }

    > div {
        > div {
            padding: 8px 24px 16px;

            text-align: left;
            transform: translateY(-16px);
            opacity: 0;
            transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
            color: ${({ theme }) => theme.colors.textBlack};

            > p {
                :first-of-type {
                    margin-top: 0;
                }
                :last-of-type {
                    margin-bottom: 0;
                }
            }

            li {
                margin: 8px 0;
            }

            strong {
                font-weight: 600;
            }
        }
    }

    &[data-state='open'] {
        > div {
            > div {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }

    @media (min-width: 1024px) {
        > div {
            > div {
                padding: 0px 32px 20px;
            }
        }
    }

    @media (min-width: 1280px) {
        margin: 0;
        > div {
            > div {
                padding: 0px 32px 20px;
            }
        }
    }

    @media (min-width: 1600px) {
        > div {
            > div {
                padding: 0px 48px 48px;
            }
        }
    }
`;

const Question = styled(AccordionButton)`
    text-align: left;
    position: relative;
    padding: 16px 62px 16px 24px; //padding right includes button 22px width + 16px margin
    color: ${({ theme }) => theme.colors.black};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 8px;
    border: 1px solid transparent;
    outline: none;
    transition: border 0.3s ease-in-out, border-radius 0.3s ease-in-out;
    border-radius: 16px;

    ::before,
    ::after {
        position: absolute;
        right: 24px;
        top: 16px;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    ::before {
        content: url(${open});
        opacity: 1;
        transform: translateY(0);
    }

    ::after {
        content: url(${close});
        opacity: 0;
        transform: translateY(5px) scale(0.8);
    }

    :hover {
        cursor: pointer;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    :focus-visible {
        cursor: pointer;
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &[data-state='open'] {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid transparent;

        ::before {
            opacity: 0;
            transform: translateY(-5px);
        }

        ::after {
            opacity: 1;
            transform: translateY(0) scale(0.8);
        }
    }

    @media (min-width: 1024px) {
        padding: 20px 70px 20px 32px;

        ::before,
        ::after {
            right: 32px;
            top: 20px;
        }
    }
    @media (min-width: 1280px) {
        padding: 24px 78px 24px 40px;

        ::before,
        ::after {
            right: 40px;
            top: 24px;
        }
    }

    @media (min-width: 1600px) {
        padding: 48px 86px 48px 48px;

        ::before,
        ::after {
            right: 48px;
            top: 48px;
        }
    }
`;

type AccordionItemProps = {
    children: React.ReactNode;
    question: string;
};

const AnimatedPanel = ({ children }: { children: React.ReactNode }) => {
    const { isExpanded } = useAccordionItemContext();

    return (
        <AnimateHeight duration={300} easing="ease-in-out" height={isExpanded ? 'auto' : 0}>
            {children}
        </AnimateHeight>
    );
};

export const SingleQ = ({ question, children }: AccordionItemProps) => {
    return (
        <AccordionItem>
            <h3>
                <Question>{question}</Question>
            </h3>

            <AnimatedPanel>{children}</AnimatedPanel>
        </AccordionItem>
    );
};
