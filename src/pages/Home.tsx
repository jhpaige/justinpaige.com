import { Section } from '../components/Section'
import { Timeline } from '../components/Timeline'

const email = 'you@justinpaige.com'
const linkedin = 'https://www.linkedin.com/in/justin-paige/'

export function Home() {
  const contactHref = `mailto:${email}?subject=${encodeURIComponent('Hey Justin')}`

  return (
    <>
      <header className="hero">
        <div className="heroGrid" aria-hidden />

        <div className="heroContent">
          <p className="kicker">Senior Software Engineer • React • SvelteKit • TypeScript</p>

          <h1 className="headline">
            Building responsive, scalable systems across the full stack.
          </h1>

          <p className="subhead">
            At DraftKings, I contribute as a Senior Software Engineer integrating the Railbird Exchange
            infrastructure after our acquisition. As a founding engineer at Railbird, I was a core contributor to
            the platform&apos;s full stack development, collaborating with UX/UI teams and integrating APIs for
            seamless functionality.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href="#contact">
              Contact
            </a>
            <a className="btn" href="#experience">
              Experience
            </a>
            <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="miniNav">
            <a className="miniLink" href="#about">
              about
            </a>
            <a className="miniLink" href="#experience">
              experience
            </a>
            <a className="miniLink" href="#contact">
              contact
            </a>
          </div>
        </div>

        <div className="heroSide">
          <div className="card3d">
            <div className="card3dInner">
              <div className="cardTop">
                <div className="pill">Now</div>
                <div className="mono">DraftKings • NYC</div>
              </div>

              <div className="cardMain">
                <div className="stat">
                  <div className="statNum">Platform Integration</div>
                  <div className="statLabel">Railbird Exchange → DraftKings</div>
                </div>
                <div className="stat">
                  <div className="statNum">Frontend Systems</div>
                  <div className="statLabel">React, SvelteKit, UI infrastructure</div>
                </div>
                <div className="stat">
                  <div className="statNum">Full Stack</div>
                  <div className="statLabel">APIs, data mapping, operational alignment</div>
                </div>
              </div>

              <div className="cardBottom">
                <a className="chip" href={linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="chip" href={contactHref}>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section id="about" title="About">
        <div className="twoCol">
          <div>
            <h3 className="h3">Background</h3>
            <p className="p">
              A graduate of the University of Southern California with a Bachelor of Science in Mechanical
              Engineering and a minor in Computer Programming, I bring a structured approach to software
              development. My work reflects a commitment to building responsive, scalable solutions while
              fostering alignment across engineering and operations teams.
            </p>

            <div className="tags">
              {['TypeScript', 'React', 'SvelteKit', 'Node.js', 'PostgreSQL', 'NestJS', 'Storybook', 'D3'].map(
                (t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="quoteBox">
            <div className="quoteMark">“</div>
            <p className="quote">
              I focus on building performant, reliable systems while keeping engineering decisions aligned with
              product and operational needs.
            </p>
            <div className="quoteByline">Justin Paige</div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <Timeline
          items={[
            {
              period: 'Oct 2025 – Present',
              title: 'Senior Software Engineer',
              org: 'DraftKings',
              bullets: [
                'Integrating Railbird Exchange infrastructure following acquisition.',
                'Building production-critical React components and frontend infrastructure.',
                'Designing serialization and data-mapping layers between backend services and UI systems.',
                'Contributing to system investigations and architectural improvements to support operational efficiency.',
              ],
              tech: ['React', 'TypeScript', 'Platform Integration'],
            },
            {
              period: 'Apr 2023 – Oct 2025',
              title: 'Founding Engineer / Software Engineer',
              org: 'Railbird',
              bullets: [
                'Built multiple frontends from scratch using SvelteKit, including consumer platform and internal control panel.',
                'Developed advanced UI components including animated modules, dynamic data tables, and charting with D3.',
                'Collaborated with UX/UI teams and integrated APIs for seamless product functionality.',
                'Implemented analytics instrumentation to measure user behavior and inform product decisions.',
              ],
              tech: ['SvelteKit', 'Storybook', 'D3', 'Amplitude', 'NestJS'],
            },
            {
              period: 'Jul 2022 – Apr 2023',
              title: 'Engineer',
              org: 'Canopy (Open Source)',
              bullets: [
                'Built a Chrome Manifest V3 developer tool for Svelte enabling time-travel debugging and component visualization.',
                'Implemented extension messaging architecture for reliable state capture.',
                'Used TypeScript to enforce type safety and maintainability.',
              ],
              tech: ['Svelte', 'TypeScript', 'Chrome MV3'],
            },
            {
              period: 'Jun 2021 – Mar 2022',
              title: 'Software Engineer',
              org: 'Kwil',
              bullets: [
                'Developed reusable React components for a scalable social platform.',
                'Built Node.js backend integrations for decentralized storage systems.',
                'Refactored legacy codebases for modularity and testability; added Jest testing.',
              ],
              tech: ['React', 'Node.js', 'Jest'],
            },
          ]}
        />
      </Section>

      <Section id="contact" title="Contact">
        <div className="contactGrid">
          <div>
            <h3 className="h3">Say hello.</h3>
            <p className="p">
              Interested in collaborating or discussing opportunities. Reach out directly.
            </p>

            <div className="contactRow">
              <a className="btn" href={contactHref}>
                Email
              </a>
              <a className="btn" href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault()
              const fd = new FormData(e.currentTarget)
              const name = String(fd.get('name') ?? '')
              const from = String(fd.get('from') ?? '')
              const message = String(fd.get('message') ?? '')
              const body = `Name: ${name}\nEmail: ${from}\n\n${message}`
              window.location.href = `mailto:${email}?subject=${encodeURIComponent(
                'Website message',
              )}&body=${encodeURIComponent(body)}`
            }}
          >
            <label className="field">
              <span>Name</span>
              <input name="name" placeholder="Your name" required />
            </label>

            <label className="field">
              <span>Email</span>
              <input name="from" type="email" placeholder="you@example.com" required />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea name="message" placeholder="Your message" required rows={5} />
            </label>

            <button className="btn primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </Section>

      <footer className="footer">
        <div className="footerInner">
          <span>© {new Date().getFullYear()} Justin Paige</span>
          <span className="sep">•</span>
          <span className="mono">All Rights Reserved</span>
        </div>
      </footer>
    </>
  )
}