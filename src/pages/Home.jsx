import { useNavigate } from 'react-router-dom'
import './Home.css'

const cards = [
  { to: '/about',        icon: '✦', label: 'About Me',     desc: 'My story, background & what drives me',    color: '#7c6dfa' },
  { to: '/education',   icon: '◈', label: 'Education',    desc: 'Purdue University & SR University',         color: '#f472b6' },
  { to: '/skills',      icon: '⬡', label: 'Skills',       desc: 'Full-stack tech stack & tools',             color: '#34d399' },
  { to: '/projects',    icon: '◉', label: 'Projects',     desc: 'Things I\'ve built and shipped',            color: '#fb923c' },
  { to: '/achievements',icon: '★', label: 'Achievements', desc: 'Awards, certifications & milestones',       color: '#facc15' },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="home page-enter">
      <div className="blob blob-1" /><div className="blob blob-2" /><div className="blob blob-3" />
      <div className="home-content">
        <div className="home-left">
          <div className="home-tag"><span className="tag-dot" />Full-Stack Developer · MS CS @ Purdue</div>
          <h1 className="home-name">Anjali<br /><span>Polasani</span></h1>
          <p className="home-bio">
            Building scalable, thoughtful software — from backend systems to polished UIs.
            Currently pursuing a Master's in Computer Science at Purdue University.
          </p>
          <div className="home-cta">
            <button className="btn-primary" onClick={() => navigate('/about')}>
              Explore My Work <span>→</span>
            </button>
            <a className="btn-ghost" href="mailto:anjalipolasani@example.com">Get in Touch</a>
          </div>
          <div className="home-meta">
            <span>📍 West Lafayette, IN</span>
            <span>🎓 Purdue University</span>
            <span>💻 Open to Opportunities</span>
          </div>
        </div>

        <div className="home-right">
          <p className="cards-label">// navigate to</p>
          <div className="cards-grid">
            {cards.map((c, i) => (
              <button
                key={c.to}
                className="nav-card"
                onClick={() => navigate(c.to)}
                style={{ '--cc': c.color, animationDelay: `${i * 0.07}s` }}
              >
                <span className="card-icon" style={{ color: c.color }}>{c.icon}</span>
                <div>
                  <div className="card-label">{c.label}</div>
                  <div className="card-desc">{c.desc}</div>
                </div>
                <span className="card-arr">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <span>© 2025 Anjali Polasani</span>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:anjalipolasani@example.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
