import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { FlexGroup, Form, Input, InputGroup, Label, Thanks } from './FormComponents';
import { PrimaryBtn } from './buttons';

const StyledForm = styled(Form)`
    background-color: ${({ theme }) => theme.colors.bg};
    position: relative;
    box-shadow: none !important;
    max-width: 1024px;
    margin: 0 auto;

    > h3 {
        margin: 0 0 16px;
        color: ${({ theme }) => theme.colors.textBlack};

        :not(:first-of-type) {
            margin-top: 32px;
        }
    }

    textarea,
    input {
        background-color: ${({ theme }) => theme.colors.white};
    }

    > ${Thanks} {
        background-color: ${({ theme }) => theme.colors.bg};
    }

    @media (min-width: 1024px) {
        padding: 64px;

        > h3 {
            margin-bottom: 24px;

            :not(:first-of-type) {
                margin-top: 40px;
            }
        }
    }

    @media (min-width: 1280px) {
        padding: 64px 80px;

        > h3:not(:first-of-type) {
            margin-top: 48px;
        }
    }
`;

const Flex = styled.div`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;

        > div {
            flex-grow: 1;

            :not(:last-of-type) {
                margin-right: 16px;
            }
        }
    }

    @media (min-width: 1024px) {
        > div:not(:last-of-type) {
            margin-right: 32px;
        }
    }

    @media (min-width: 1280px) {
        > div:not(:last-of-type) {
            margin-right: 48px;
        }
    }
`;

export const AppointmentForm = () => {
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        data['preferredDay'] = formData.getAll('preferredDay').join(', ');
        data['preferredTime'] = formData.getAll('preferredTime').join(', ');

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
        <StyledForm onSubmit={handleSubmit}>
            <h3>Patient Information</h3>

            <Flex>
                <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div>
                    <Label htmlFor="email">Email address *</Label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        required
                    />
                </div>
                <div>
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
                </div>
            </Flex>

            <Label as="p">Are you a current patient?</Label>

            <FlexGroup bottomMargin>
                <InputGroup>
                    <Input type="radio" id="patient-yes" name="currentPatient" value="Yes" />
                    <Label htmlFor="patient-yes">Yes</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="radio" id="patient-no" name="currentPatient" value="No" />
                    <Label htmlFor="patient-no">No</Label>
                </InputGroup>
            </FlexGroup>

            <h3>Patient Availability</h3>

            <Label as="p">Preferred day(s) of the week for an appointment?</Label>

            <FlexGroup>
                <InputGroup>
                    <Input type="checkbox" id="any-day" name="preferredDay" value="any" />
                    <Label htmlFor="any-day">Any</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="tuesday" name="preferredDay" value="tuesday" />
                    <Label htmlFor="tuesday">Tuesday</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="wednesday" name="preferredDay" value="wednesday" />
                    <Label htmlFor="wednesday">Wednesday</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="thursday" name="preferredDay" value="thursday" />
                    <Label htmlFor="thursday">Thursday</Label>
                </InputGroup>
            </FlexGroup>

            <Label as="p">Preferred time(s) for an appointment?</Label>

            <FlexGroup bottomMargin>
                <InputGroup>
                    <Input type="checkbox" id="any-time" name="preferredTime" value="any" />
                    <Label htmlFor="any-time">Any</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="morning" name="preferredTime" value="morning" />
                    <Label htmlFor="morning">Morning</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="noon" name="preferredTime" value="noon" />
                    <Label htmlFor="noon">Noon</Label>
                </InputGroup>

                <InputGroup>
                    <Input type="checkbox" id="evening" name="preferredTime" value="evening" />
                    <Label htmlFor="evening">Evening</Label>
                </InputGroup>
            </FlexGroup>

            <h3>Reason For Visit</h3>

            <Label htmlFor="message">Please describe the nature of your appointment?</Label>
            <Input
                as="textarea"
                id="message"
                name="message"
                rows="8"
                placeholder="e.g: consultation, check-up etc."
            ></Input>

            <PrimaryBtn
                css={css`
                    margin-top: 16px;

                    @media (min-width: 1024px) {
                        margin-top: 32px;
                        padding: 16px 48px;
                    }
                `}
            >
                Send Request
            </PrimaryBtn>
            <Thanks submit={submit}>
                <h1>Thank you</h1>
                <p>Someone will be right with you shortly!</p>
            </Thanks>
        </StyledForm>
    );
};
