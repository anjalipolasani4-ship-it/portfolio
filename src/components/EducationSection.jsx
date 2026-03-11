import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const EduContainer = styled.section`
  padding: 7rem 10vw;

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const EduGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const EduCard = styled.div`
  border: 1px solid var(--border);
  padding: 2rem;
  border-radius: 4px;
  transition: border-color 0.25s;

  &:hover {
    border-color: rgba(232, 197, 71, 0.3);
  }
`;

const Degree = styled.h3`
  font-family: var(--font-display);
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
`;

const School = styled.p`
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.4rem;
`;

const Year = styled.p`
  font-size: 0.8rem;
  color: var(--muted);
`;

const CertLabel = styled.p`
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 1rem;
`;

const CertList = styled.div`
  display: flex;
  flex-direction: column;
`;

const CertItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);

  &:first-child {
    border-top: 1px solid var(--border);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`;

const CertName = styled.span`
  font-size: 0.92rem;
  color: var(--text);
`;

const CertBy = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
`;

const education = [
  {
    degree: "Master's in Computer Science",
    school: 'Purdue University, Fort Wayne',
    year: '2024 – Present',
  },
  {
    degree: "Bachelor's in Computer Science",
    school: 'SR University',
    year: '2020 – 2024',
  },
  {
    degree: 'Full Stack Web Development',
    school: 'MS CS Course · Remote',
    year: '2024',
  },
];

const certifications = [
  {
    name: 'Project Management Professional (PMP)®',
    by: 'UC Irvine · Coursera · 2023',
  },
  {
    name: 'Digital Marketing Certification',
    by: 'Digital Marketing Institute · 2023',
  },
];

const EducationSection = () => {
  return (
    <EduContainer id="education">
      <FadeIn>
        <p className="section-label">Education & Certifications</p>
        <h2 className="section-title">Academic background</h2>
      </FadeIn>

      <FadeIn delay={100}>
        <EduGrid>
          {education.map((e, i) => (
            <EduCard key={i}>
              <Degree>{e.degree}</Degree>
              <School>{e.school}</School>
              <Year>{e.year}</Year>
            </EduCard>
          ))}
        </EduGrid>
      </FadeIn>

      <FadeIn delay={200}>
        <CertLabel>Certifications</CertLabel>
        <CertList>
          {certifications.map((c, i) => (
            <CertItem key={i}>
              <CertName>{c.name}</CertName>
              <CertBy>{c.by}</CertBy>
            </CertItem>
          ))}
        </CertList>
      </FadeIn>
    </EduContainer>
  );
};

export default EducationSection;
