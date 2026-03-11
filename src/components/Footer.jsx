import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--muted);
  border-top: 1px solid var(--border);
  background: var(--bg);
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Anjali Polasani · Built with React &amp; styled-components
    </FooterContainer>
  );
};

export default Footer;
