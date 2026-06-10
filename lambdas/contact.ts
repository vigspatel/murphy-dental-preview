import { makeApiHandler, emailSend, stringList } from '@modern-doc/cdk';

exports.handler = makeApiHandler(async ({ body }) => {
    const { CONTACT_EMAIL_TO: to, CONTACT_EMAIL_FROM: from } = process.env;

    if (!to || !from) {
        throw new Error(
            'Missing required environment variable CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM.'
        );
    }

    await emailSend({
        to: to.split(','),
        from: from,
        subject: 'Contact Form Submission',
        body: body ? stringList(body) : '',
    });
    return 'OK';
});
