import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const SkillsContainer = styled.section`
  padding: 7rem 10vw;
  background: var(--surface);

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border);
`;

const SkillGroup = styled.div`
  background: var(--surface);
  padding: 2rem;
  transition: background 0.2s;

  &:hover {
    background: var(--surface2);
  }
`;

const GroupTitle = styled.p`
  font-size: 0.65rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
`;

const SkillList = styled.ul`
  list-style: none;

  li {
    font-size: 0.85rem;
    color: var(--muted);
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--border);
    transition: color 0.2s;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      color: var(--text);
    }
  }
`;

const skills = [
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Responsive Design', 'Figma / UI-UX'],
  },
  {
    title: 'Backend & Database',
    items: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'SQL', 'Python'],
  },
  {
    title: 'Data & Analytics',
    items: ['Power BI', 'Tableau', 'EDA & Feature Eng.', 'Machine Learning', 'A/B Testing', 'Cohort Analysis'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git & GitHub', 'VS Code', 'Jira', 'Jupyter Notebook', 'Google Analytics', 'Agile / Scrum'],
  },
  {
    title: 'SEO & Marketing',
    items: ['On-Page SEO', 'Keyword Research', 'Content Optimization', 'Digital Marketing', 'Funnel Analysis'],
  },
  {
    title: 'Soft Skills',
    items: ['Analytical Thinking', 'Problem-Solving', 'Communication', 'Attention to Detail', 'Collaboration'],
  },
];

const SkillsSection = () => {
  return (
    <SkillsContainer id="skills">
      <FadeIn>
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">What I work with</h2>
      </FadeIn>
      <FadeIn delay={100}>
        <Grid>
          {skills.map(({ title, items }) => (
            <SkillGroup key={title}>
              <GroupTitle>{title}</GroupTitle>
              <SkillList>
                {items.map((item) => <li key={item}>{item}</li>)}
              </SkillList>
            </SkillGroup>
          ))}
        </Grid>
      </FadeIn>
    </SkillsContainer>
  );
};

export default SkillsSection;
