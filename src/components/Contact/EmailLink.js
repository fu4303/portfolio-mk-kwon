import React from 'react';

// Validates the first half of an email address.
const validateText = (text) => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const message = [
  'info',
];

const EmailLink = () => (
  <a href={validateText(message) ? `mailto:${message}@gmail.com` : ''}>
    <span>{message}</span>
    <span>@minkyungkwon.com</span>
  </a>
);

export default EmailLink;
