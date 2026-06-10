import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { Form, Input, Label, Thanks } from './FormComponents';
import { PrimaryBtn } from './buttons';

const FormContainer = styled(Form)<{ desktop?: boolean }>`
    display: ${({ desktop }) => (desktop ? 'none' : 'block')};
    width: calc(100vw - 64px);
    max-width: 470px;

    @media (min-width: 1024px) {
        display: ${({ desktop }) => (desktop ? 'block' : 'none')};
        width: 100%;
        margin: -220px 0 0 ${({ theme }) => theme.spacing.lg};
        align-self: flex-start;
        flex-shrink: 3;
    }

    @media (min-width: 1280px) {
        margin-top: -250px;
    }

    @media (min-width: 1600px) {
        margin-left: 96px;
    }
`;

export const ContactForm = ({ desktop }: { desktop?: boolean }) => {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        setSubmit(true);
        await fetch(`https://api.${window.location.host}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    return (
        <FormContainer desktop={desktop} onSubmit={handleSubmit}>
            <h3>Get in Touch</h3>

            <Label htmlFor="name">Name *</Label>
            <Input type="text" id="name" name="name" placeholder="John Doe" required />

            <Label htmlFor="phone">Phone *</Label>
            <PatternFormat
                type="tel"
                format="+1 (###) ###-####"
                customInput={Input}
                placeholder="123 456-7890"
                id="phone"
                name="phone"
                required
            />

            <Label htmlFor="email">Email address *</Label>
            <Input type="email" id="email" name="email" placeholder="example@gmail.com" required />

            <Label htmlFor="message">Message for the Staff/ Doctor *</Label>
            <Input
                as="textarea"
                id="message"
                name="message"
                rows="8"
                placeholder="Write your message here"
                required
            ></Input>

            <PrimaryBtn
                css={css`
                    margin-top: 32px;
                    display: block;
                    width: 100%;

                    @media (min-width: 1024px) {
                        margin-top: 48px;
                    }
                `}
            >
                Submit
            </PrimaryBtn>

            <Thanks submit={submit}>
                <h1>Thank you</h1>
                <h3>Someone will be right with you shortly!</h3>
            </Thanks>
        </FormContainer>
    );
};
