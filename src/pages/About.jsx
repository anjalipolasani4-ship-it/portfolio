import { Link }  from 'react-router-dom'
import './Page.css'

export default function About() {
  return (
    <div className="page page-enter">
      <div className="blob blob-1" /><div className="blob blob-2" />
      <div className="page-inner">
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="page-tag">About Me</div>
        <h1 className="page-title">Hello, I'm <span>Anjali</span></h1>
        <p className="page-subtitle">
          Front-end focused full-stack developer with a sharp eye for UI/UX — I build interfaces
          that feel as good as they look, backed by solid engineering under the hood.
        </p>

        <div className="about-grid">

          {/* Left — Bio */}
          <div className="about-bio">
            <p>
              I'm <strong>Anjali Polasani</strong>, a Master of Science in Computer Science student
              at Purdue University Fort Wayne (2024–2026), and a full-stack developer who genuinely
              loves the front end. For me, building a product isn't just about making it work —
              it's about making it <strong>feel</strong> right.
            </p>
            <p>
              My sweet spot is the overlap between <strong>front-end engineering and UI/UX design</strong>.
              I think in components, design systems, and user flows. Whether I'm wiring up a
              React context hook, fine-tuning a Framer Motion animation, or running a usability
              study, I'm always asking: does this feel intuitive? Does this delight?
            </p>
            <p>
              I've shipped <strong>4+ projects</strong> across the full stack — from an
              AI-powered resume builder deployed live on Google Cloud to a campus events
              platform with role-based access and real-time RSVP. I bring data intuition
              alongside every UI I build: A/B testing, cohort analysis, and product
              metrics are part of how I think about what to build next.
            </p>
            <p>
              I hold a Bachelor's in Computer Science from SR University (2020–2024) and
              certifications in PMP® and Digital Marketing — because great products live
              at the intersection of technology, people, and strategy.
            </p>
            <p>
              Outside of code, I'm drawn to <strong>art and visual design</strong> — the same
              principles that make a great UI (balance, hierarchy, colour, rhythm) show up
              everywhere in creative work. I love <strong>travelling</strong> and capturing
              the world through my camera; photography has genuinely sharpened how I see
              layout and composition in everything I design.
            </p>
          </div>

          {/* Right — Sidebar */}
          <div className="about-sidebar">

            <div className="info-card card">
              <div className="card-accent" style={{ background: '#f472b6' }} />
              <h3>Quick Facts</h3>
              <ul>
                <li><span className="info-key">Degree</span><span>MS CS — Purdue Fort Wayne</span></li>
                <li><span className="info-key">Background</span><span>BS CS — SR University</span></li>
                <li><span className="info-key">Location</span><span>Fort Wayne, Indiana</span></li>
                <li><span className="info-key">Focus</span><span>Front-End · UI/UX</span></li>
                <li><span className="info-key">Projects</span><span>4+ Shipped</span></li>
                <li><span className="info-key">Hobbies</span><span>Art · Travel · Photography</span></li>
                <li><span className="info-key">Status</span><span>Open to opportunities</span></li>
              </ul>
            </div>

            <div className="interests-card card">
              <div className="card-accent" style={{ background: '#34d399' }} />
              <h3>Interests</h3>
              <div className="interests-tags">
                {[
                  'Front-End Dev',
                  'UI/UX Design',
                  'React & TypeScript',
                  'Design Systems',
                  'Full-Stack MERN',
                  'Data Analytics',
                  'AI & ML',
                  'Art & Visual Design',
                  'Travel',
                  'Photography',
                  'Open Source',
                  'Product Thinking',
                ].map(t => (
                  <span key={t} className="interest-tag">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="divider" />

        {/* Stats */}
        <h2 className="section-heading">By the numbers</h2>
        <div className="values-grid" style={{ marginBottom: '2rem' }}>
          {[
            { icon: '🗂️', title: '4+ Projects', desc: 'Shipped across front-end, full-stack, AI integration, and UX research.', color: '#facc15' },
            { icon: '🎓', title: '4+ Credentials', desc: 'MS CS (in progress), BS CS, PMP®, and Digital Marketing certification.', color: '#f472b6' },
            { icon: '🏢', title: '2 Internships', desc: 'Hands-on experience at Code Alpha (Full Stack) and AICTE (Python Dev).', color: '#7c6dfa' },
            { icon: '☁️', title: 'Live Deployment', desc: 'AI resume builder live on Google Cloud — real users, real impact.', color: '#34d399' },
          ].map(v => (
            <div key={v.title} className="value-card card">
              <div className="card-accent" style={{ background: v.color }} />
              <span className="value-icon">{v.icon}</span>
              <h4 style={{ color: v.color }}>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        {/* Values */}
        <h2 className="section-heading">How I work</h2>
        <div className="values-grid">
          {[
            { icon: '🎨', title: 'Design-Driven Dev', desc: 'I start every feature by asking how it should feel to use — then I make the code match that vision.', color: '#f472b6' },
            { icon: '⚡', title: 'Performance First', desc: 'Fast, scalable, and accessible. I build interfaces that hold up under real-world conditions.', color: '#facc15' },
            { icon: '🔍', title: 'User-Obsessed', desc: 'I run usability studies, read analytics, and iterate — because shipping isn\'t the finish line.', color: '#7c6dfa' },
            { icon: '🚀', title: 'Always Shipping', desc: 'From side projects to live deployments, I prefer learning by building over learning by reading.', color: '#34d399' },
          ].map(v => (
            <div key={v.title} className="value-card card">
              <div className="card-accent" style={{ background: v.color }} />
              <span className="value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
