import CLink from '@/CLink';
import { CommonHero } from '@/CommonHero';
import { PrimaryBtn } from '@/buttons';
import { px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';

const Article = styled.article`
    ${px};
    ${py};
    max-width: 1000px;
    box-sizing: content-box;
    margin: 0 auto;

    > .gatsby-image-wrapper {
        max-width: 768px;
        display: block;
        margin: 0 auto;
    }

    > ul {
        margin: 40px 0;
    }

    > a {
        display: block;
        max-width: max-content;
        margin: 0 auto;
    }
`;

const ProceedFinancing: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>Proceed Financing</h1>
            <p>
                Proceed Finance specializes in patient financing. Their mission is making
                life-changing treatments possible for more people, giving you access to financing
                that&apos;s fast, affordable, and fair.
            </p>
        </CommonHero>
        <Article>
            <StaticImage
                src="../../../assets/images/proceed-finance.jpg"
                alt="proceed finance"
                width={768}
                height={268}
            />
            <ul>
                <li>
                    Long terms and competitive rates create affordable payments that fully cover
                    most treatment plans
                </li>
                <li>Pre-qualify instantly without affecting your credit score</li>
                <li>Full-amount approvals for a wide range of credit quality</li>
                <li>No hidden fees, and fixed-rate loans with easy-to-understand terms</li>
                <li>
                    Visit <CLink to="https://www.proceedfinance.com">www.proceedfinance.com </CLink>{' '}
                    or click the button below to learn more. Subject to qualification, terms and
                    conditions apply.
                </li>
            </ul>
            <PrimaryBtn as={CLink} to="https://www.proceedfinance.com">
                Learn More About Proceed Finance
            </PrimaryBtn>
        </Article>
    </Fragment>
);

export default ProceedFinancing;
