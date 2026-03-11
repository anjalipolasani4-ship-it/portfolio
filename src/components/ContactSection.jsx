import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const ContactContainer = styled.section`
  padding: 7rem 10vw;
  background: var(--surface);

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const Inner = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const ContactSectionLabel = styled.p`
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }
`;

const Desc = styled.p`
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 2.5rem;
`;

const EmailLink = styled.a`
  display: inline-block;
  font-family: var(--font-display);
  font-size: clamp(1rem, 3vw, 1.6rem);
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid rgba(232, 197, 71, 0.35);
  padding-bottom: 0.2rem;
  margin-bottom: 3rem;
  transition: color 0.2s;

  &:hover {
    color: var(--text);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;

  a {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: var(--accent);
    }
  }
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <FadeIn>
        <Inner>
          <ContactSectionLabel>Get In Touch</ContactSectionLabel>
          <h2 className="section-title">Let's build something together</h2>
          <Desc>
            I'm currently open to full-time roles and internships in full stack development,
            frontend engineering, and product analytics. Have a project idea or just want to
            connect? My inbox is always open.
          </Desc>
          <EmailLink href="mailto:anjalipolasani4@gmail.com">
            anjalipolasani4@gmail.com
          </EmailLink>
          <SocialLinks>
            <a href="https://github.com/anjalipolasani4-ship-it" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/anjali-polasani" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:anjalipolasani4@gmail.com">Email</a>
          </SocialLinks>
        </Inner>
      </FadeIn>
    </ContactContainer>
  );
};

export default ContactSection;
