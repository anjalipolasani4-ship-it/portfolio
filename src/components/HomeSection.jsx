import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 10vw 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 9rem 6vw 5rem;
  }
`;

const GridBg = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.03;
  background-image:
    linear-gradient(var(--text) 1px, transparent 1px),
    linear-gradient(90deg, var(--text) 1px, transparent 1px);
  background-size: 60px 60px;
`;

const GlowOrb = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(232, 197, 71, 0.06) 0%, transparent 70%);
  pointer-events: none;
`;

const HeroTag = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    background: var(--accent);
  }
`;

const HeroName = styled.h1`
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  line-height: 1.05;
  margin-bottom: 1.75rem;

  em {
    font-style: italic;
    color: var(--accent);
  }
`;

const HeroDesc = styled.p`
  font-size: 1rem;
  color: var(--muted);
  max-width: 520px;
  line-height: 1.9;
  margin-bottom: 3rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const Stats = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Stat = styled.div``;

const StatNum = styled.span`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text);
  display: block;
`;

const StatLabel = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
`;

const HomeSection = () => {
  return (
    <HomeContainer id="home">
      <GridBg />
      <GlowOrb />

      <FadeIn delay={0}>
        <HeroTag>Full Stack Developer · Fort Wayne, USA</HeroTag>
      </FadeIn>

      <FadeIn delay={120}>
        <HeroName>
          Anjali<br /><em>Polasani</em>
        </HeroName>
      </FadeIn>

      <FadeIn delay={240}>
        <HeroDesc>
          I build thoughtful, scalable web applications — from clean React frontends
          to robust Node.js backends. Passionate about data-driven products, seamless
          UX, and writing code that actually makes a difference.
        </HeroDesc>
      </FadeIn>

      <FadeIn delay={360}>
        <Actions>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </Actions>
      </FadeIn>

      <FadeIn delay={480}>
        <Stats>
          <Stat>
            <StatNum>4+</StatNum>
            <StatLabel>Projects Built</StatLabel>
          </Stat>
          <Stat>
            <StatNum>2</StatNum>
            <StatLabel>Internships</StatLabel>
          </Stat>
          <Stat>
            <StatNum>MERN</StatNum>
            <StatLabel>Stack</StatLabel>
          </Stat>
        </Stats>
      </FadeIn>
    </HomeContainer>
  );
};

export default HomeSection;
