import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const AboutContainer = styled.section`
  padding: 7rem 10vw;

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 6rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const AsideLabel = styled.p`
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 2rem;
`;

const QuickFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const QFItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.1rem 0;
  border-bottom: 1px solid var(--border);

  &:first-child {
    border-top: 1px solid var(--border);
  }
`;

const QFKey = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
`;

const QFVal = styled.span`
  font-size: 0.9rem;
  color: var(--text);
`;

const Body = styled.div`
  p {
    color: var(--muted);
    margin-bottom: 1.3rem;
    font-size: 0.97rem;
    line-height: 1.95;

    strong {
      color: var(--text);
      font-weight: 500;
    }

    em {
      color: var(--accent);
      font-style: italic;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Tag = styled.span`
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 0.3rem 0.85rem;
  border-radius: 100px;
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const quickFacts = [
  ['Based In', 'Fort Wayne, Indiana, USA'],
  ['Degree', 'MS Computer Science · Purdue'],
  ['Focus', 'Front-End · UI/UX Design'],
  ['Stack', 'React · TypeScript · MERN'],
  ['Projects', '4+ Shipped'],
  ['Hobbies', 'Art · Travel · Photography'],
  ['Status', 'Open to Opportunities'],
];

const tags = [
  'React.js',
  'TypeScript',
  'UI/UX Design',
  'Node.js',
  'MongoDB',
  'Figma',
  'Data Analytics',
  'Art & Design',
  'Travel',
  'Photography',
  'Open Source',
  'Product Thinking',
];

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Grid>
        <FadeIn>
          <div>
            <AsideLabel>Quick Facts</AsideLabel>
            <QuickFacts>
              {quickFacts.map(([key, val]) => (
                <QFItem key={key}>
                  <QFKey>{key}</QFKey>
                  <QFVal>{val}</QFVal>
                </QFItem>
              ))}
            </QuickFacts>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building at the intersection of code &amp; craft
            </h2>
            <Body>
              <p>
                I'm <strong>Anjali Polasani</strong>, a Master of Science in Computer Science
                student at Purdue University Fort Wayne (2024–2026), and a full-stack developer
                who genuinely loves the front end. For me, building a product isn't just about
                making it work — it's about making it <em>feel</em> right.
              </p>
              <p>
                My sweet spot is the overlap between <strong>front-end engineering and UI/UX
                design</strong>. I think in components, design systems, and user flows. Whether
                I'm wiring up a React context hook, fine-tuning a Framer Motion animation, or
                running a usability study, I'm always asking: does this feel intuitive?
                Does this <em>delight</em>?
              </p>
              <p>
                I've shipped <strong>4+ projects</strong> across the full stack — from an
                AI-powered resume builder deployed live on Google Cloud to a campus events
                platform with role-based access and real-time RSVP. I bring data intuition
                alongside every UI I build: A/B testing, cohort analysis, and product metrics
                are part of how I think about what to build next.
              </p>
              <p>
                I hold a Bachelor's in Computer Science from SR University (2020–2024) and
                certifications in <strong>PMP® and Digital Marketing</strong> — because great
                products live at the intersection of technology, people, and strategy.
              </p>
              <p>
                Outside of code, I'm drawn to <strong>art and visual design</strong> — the same
                principles that make a great UI (balance, hierarchy, colour, rhythm) show up
                everywhere in creative work. I love <strong>travelling</strong> and capturing
                the world through my camera; photography has genuinely sharpened how I see
                layout and composition in everything I design.
              </p>
            </Body>
            <Tags>
              {tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </Tags>
          </div>
        </FadeIn>
      </Grid>
    </AboutContainer>
  );
};

export default AboutSection;