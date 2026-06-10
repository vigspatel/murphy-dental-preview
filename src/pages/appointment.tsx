import { AppointmentForm } from '@/AppointmentForm';
import { CommonHero } from '@/CommonHero';
import { px, py } from '@/layout/styles/classes';
import styled from '@emotion/styled';
import { Fragment } from 'react';

const Section = styled.section`
    ${px};
    ${py};

    > div:first-of-type {
        max-width: 1024px;
        margin: 0 auto 32px;

        h2 {
            color: ${({ theme }) => theme.colors.primary};
            margin: 0 0 24px;
        }
    }

    @media (min-width: 1024px) {
        > div:first-of-type {
            margin-bottom: 80px;
        }
    }
`;

const Appointment: Page = () => (
    <Fragment>
        <CommonHero>
            <h1>Appointment Request</h1>
            <p>
                The first step towards a beautiful, healthy smile is to schedule an appointment.
                Please contact our office by phone or complete the appointment request form below.
                Our scheduling coordinator will contact you to confirm your appointment.
            </p>
        </CommonHero>
        <Section>
            <div>
                <h2>Office Hours</h2>
                <p>Tuesday: 8:00am - 4:00pm</p>
                <p>Wednesday: 8:00am - 4:00pm</p>
                <p>Thursday: 8:00am - 4:00pm</p>
            </div>
            <AppointmentForm />
        </Section>
    </Fragment>
);

export default Appointment;
