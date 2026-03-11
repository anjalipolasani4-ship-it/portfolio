import React from 'react';
import styled from 'styled-components';
import FadeIn from './FadeIn';

const ProjectsContainer = styled.section`
  padding: 7rem 10vw;
  background: var(--surface);

  @media (max-width: 768px) {
    padding: 5rem 6vw;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  cursor: default;

  &:hover {
    border-color: rgba(232, 197, 71, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid rgba(232, 197, 71, 0.3);
  padding: 0.2rem 0.65rem;
  border-radius: 2px;
  margin-bottom: 1rem;
  width: fit-content;
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
`;

const CardDesc = styled.ul`
  list-style: none;
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.85;
  flex: 1;
  margin-bottom: 1.25rem;

  li {
    padding-left: 1rem;
    position: relative;
    margin-bottom: 0.35rem;

    &::before {
      content: '·';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
`;

const TechPill = styled.span`
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: var(--surface2);
  color: var(--muted);
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent2);
  text-decoration: none;
  margin-top: 1.25rem;
  transition: gap 0.2s;

  &:hover {
    gap: 0.8rem;
  }
`;

const projects = [
  {
    badge: 'React · Vite · Tailwind CSS',
    name: 'Job Tracker App',
    desc: [
      'Career pipeline dashboard with four application stages — Applied, Interview, Offer, and Rejected — each with colour-coded status badges.',
      'StatsBar component renders a live donut chart (Recharts) showing pipeline breakdown by status alongside response-rate, interview, and offer count cards.',
      'Toolbar provides real-time search across company, role, and location fields plus pill-filter buttons per status and three sort modes (newest, oldest, A–Z).',
      'JobCard supports inline status switching, confirm-on-click delete, expandable notes panel, and direct link to the job listing.',
      'JobForm modal captures company, role, location, salary, status, applied date, URL, and free-text notes with full add/edit/save support.',
      'Custom useJobs hook manages state with useMemo-powered filtering, sorting, and stats; persists all data to localStorage automatically.',
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Lucide React', 'localStorage'],
    link: null,
  },
  {
    badge: 'React · TypeScript · Framer Motion',
    name: 'UniEvents Platform',
    desc: [
      'Campus event app with role-based access — students browse and RSVP, admins create events, view attendees, and monitor analytics.',
      'EventsPage delivers multi-filter search across title, description, and venue with category pills (Academic, Cultural, Sports, Tech, Social, Workshop), status toggle, free/paid filter, and sort by date, popularity, or seats remaining.',
      'EventDetailPage shows a full event hero, speaker list, schedule, live capacity progress bar, and one-click RSVP that decrements real-time seat count.',
      'Admin panel includes CreateEventPage with a structured form, AttendeesPage with check-in tracking, and AnalyticsPage with bar, pie, and line charts via Recharts.',
      'Animated Sidebar switches nav items based on role; page transitions handled by Framer Motion AnimatePresence for smooth enter/exit.',
      'useApp context hook drives shared state — login/logout, event CRUD, RSVP registration, unread notification count, and active page routing.',
    ],
    tech: ['React', 'TypeScript', 'Framer Motion', 'Recharts', 'Lucide React', 'date-fns', 'Vite'],
    link: null,
  },
  {
    badge: 'AI · Full Stack · React + Flask',
    name: 'Resume Builder with Google Gemini Pro',
    desc: [
      'AI-powered resume tailoring platform built for Purdue University Fort Wayne Career Development Center — helps students align their resume to any job description using Google Gemini Pro.',
      'Upload a resume (.docx or .pdf) and a target job description; Gemini Pro rewrites the resume to emphasise the most relevant skills, experiences, and achievements for that specific role.',
      'Similarity scoring (0–100%) compares the tailored resume against the JD so students can immediately gauge alignment before applying.',
      'Flask backend handles API endpoints, file parsing (PyPDF2, docx2txt, python-docx), TensorFlow-based text preprocessing, and DOCX/PDF export via headless LibreOffice.',
      'Live deployment accessible on Google Cloud — used by career advisors and students to adapt a single master resume across multiple job applications.',
    ],
    tech: ['React', 'Flask', 'Google Gemini Pro', 'TensorFlow', 'PyPDF2', 'python-docx', 'Google Cloud'],
  },
  {
    badge: 'Portfolio · React',
    name: 'This Portfolio',
    desc: [
      'Designed and built from scratch with a minimal dark aesthetic using styled-components for fully scoped, theme-driven styling.',
      'React SPA with IntersectionObserver-powered fade-in animations via a reusable FadeIn component and custom useFadeIn hook.',
      'Responsive layout across all viewports with a fixed navbar, mobile hamburger menu, and section-by-section smooth scroll navigation.',
      'Component-based architecture — each section (Home, About, Skills, Experience, Projects, Education, Contact) lives in its own isolated file.',
    ],
    tech: ['React', 'styled-components', 'JavaScript', 'HTML5', 'CSS3'],
    link: null,
  },
  {
    badge: 'UX Research · Figma',
    name: 'DoorDash Usability Study',
    desc: [
      'Conducted structured user interviews on the DoorDash mobile app to map real-world usage patterns and pain points.',
      'Collected qualitative feedback through task-based questions focused on navigation, search, and checkout flow.',
      'Identified usability issues reported by ~60–70% of participants, including unclear navigation and friction in checkout.',
      'Proposed UX improvements — simplified CTAs, reduced checkout steps — targeting a ~20–25% improvement in task completion rate.',
    ],
    tech: ['UX Research', 'User Interviews', 'Figma', 'Usability Testing', 'Task Analysis'],
    link: null,
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsContainer id="projects">
      <FadeIn>
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I've built</h2>
      </FadeIn>

      <Grid>
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 80}>
            <Card>
              <Badge>{project.badge}</Badge>
              <CardTitle>{project.name}</CardTitle>
              <CardDesc>
                {project.desc.map((d, j) => <li key={j}>{d}</li>)}
              </CardDesc>
              <TechRow>
                {project.tech.map((t) => <TechPill key={t}>{t}</TechPill>)}
              </TechRow>
              {project.link && (
                <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
                  View Live Project →
                </CardLink>
              )}
            </Card>
          </FadeIn>
        ))}
      </Grid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
