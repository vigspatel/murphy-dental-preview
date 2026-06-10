import { px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { Accordion } from '@reach/accordion';
import Masonry from 'react-masonry-css';

const StyledAccordion = styled(Accordion)`
    ${px};
    ${py};

    @media (min-width: 1280px) {
        margin: 0 auto;
        max-width: 1770px;

        .faq-masonry-grid {
            display: flex;
            margin-left: -32px; /* gutter size offset */
        }
        .faq-masonry-grid_column {
            padding-left: 32px; /* gutter size */
            background-clip: padding-box;
        }

        .faq-masonry-grid_column > div {
            margin-bottom: 32px;

            :last-of-type {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 1600px) {
        .faq-masonry-grid {
            margin-left: -64px; /* gutter size offset */
        }
        .faq-masonry-grid_column {
            padding-left: 64px; /* gutter size */
        }

        .faq-masonry-grid_column > div {
            margin-bottom: 64px;
        }
    }
`;

type FaqProps = {
    children: React.ReactNode;
    homepage?: boolean;
};

export const Faq = ({ children }: FaqProps) => {
    return (
        <StyledAccordion collapsible multiple>
            <Masonry
                breakpointCols={{ default: 2, 1279: 1 }}
                className="faq-masonry-grid"
                columnClassName="faq-masonry-grid_column"
            >
                {children}
            </Masonry>
        </StyledAccordion>
    );
};
