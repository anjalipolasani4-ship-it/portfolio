import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const ExpContainer = styled.section`
  padding: 7rem 10vw;

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const ExpItem = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);

  &:first-of-type {
    border-top: 1px solid var(--border);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const ExpDate = styled.div`
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.06em;
  padding-top: 0.3rem;
  line-height: 1.7;
`;

const ExpRole = styled.h3`
  font-family: var(--font-display);
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const ExpCompany = styled.p`
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
`;

const ExpList = styled.ul`
  list-style: none;

  li {
    font-size: 0.88rem;
    color: var(--muted);
    line-height: 1.85;
    margin-bottom: 0.5rem;
    padding-left: 1.1rem;
    position: relative;

    &::before {
      content: '—';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 0.75rem;
      top: 0.1rem;
    }
  }
`;

const experiences = [
  {
    role: 'Full Stack Web Developer Intern',
    company: 'Code Alpha · Remote',
    date: '2023',
    points: [
      'Built responsive web pages and features with HTML, CSS, JavaScript, and React.js.',
      'Developed clean, performant frontend components focused on usability and UI design.',
      'Gained hands-on MERN stack exposure through structured tasks and mini projects.',
      'Used GitHub for version control, code reviews, and collaborative development.',
      'Followed Agile-style workflows with incremental delivery and task breakdowns.',
      'Demonstrated strong attention to detail and problem-solving skills under real project requirements.',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'AICTE · India',
    date: '2023',
    points: [
      'Wrote and improved Python scripts to streamline daily tasks — boosted workflow efficiency by 20%.',
      'Assisted with data cleaning and basic analysis, cutting manual effort significantly.',
      'Debugged and tested features, contributing to more stable and reliable codebases.',
      'Collaborated closely with mentors in real-world agile development workflows.',
    ],
  },
];

const WorkExperienceSection = () => {
  return (
    <ExpContainer id="experience">
      <FadeIn>
        <p className="section-label">Work Experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </FadeIn>

      {experiences.map((exp, i) => (
        <FadeIn key={i} delay={i * 120}>
          <ExpItem>
            <ExpDate>{exp.date}</ExpDate>
            <div>
              <ExpRole>{exp.role}</ExpRole>
              <ExpCompany>{exp.company}</ExpCompany>
              <ExpList>
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ExpList>
            </div>
          </ExpItem>
        </FadeIn>
      ))}
    </ExpContainer>
  );
};

export default WorkExperienceSection;
