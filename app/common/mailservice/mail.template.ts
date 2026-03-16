export interface MailTemplate {
  subject: string;
  body: string;
}

export const WELCOME_MAIL_TEMPLATE: MailTemplate = {
  subject: 'Welcome',
  body: 'Hello QA user',
};
