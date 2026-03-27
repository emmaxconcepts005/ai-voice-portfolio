const services = [
  {
    title: "AI Voice Agent Setup",
    description:
      "Inbound and outbound voice agents that answer calls, qualify leads, route conversations, and book appointments without sounding robotic.",
  },
  {
    title: "Booking & Calendar Automation",
    description:
      "Smart booking, rescheduling, cancellation, reminders, and calendar sync flows connected to Google Calendar, Cal.com, or your existing system.",
  },
  {
    title: "CRM & Workflow Integration",
    description:
      "Connect your voice agent to GoHighLevel, Google Sheets, Make, n8n, Twilio, and other tools so every interaction gets logged and acted on.",
  },
];

const tools = [
  "Retell AI",
  "Vapi",
  "Twilio",
  "Make.com",
  "n8n",
  "GoHighLevel",
  "Google Calendar",
  "Google Sheets",
  "ElevenLabs",
  "OpenAI",
];

const projects = [
  {
    title: "AI Receptionist for Appointment Booking",
    summary:
      "Built a voice agent that answers inbound calls, checks availability, books appointments, and sends confirmations automatically.",
      result: "Faster response time and fewer missed booking opportunities.",
  },
  {
    title: "Lead Qualification Voice Flow",
    summary:
      "Created an AI phone agent that collects caller details, qualifies leads, and routes them into CRM workflows for follow-up.",
      result: "Cleaner lead capture and better handoff into sales processes.",
  },
  {
    title: "CRM + Calendar Automation System",
    summary:
      "Connected voice calls with Sheets, calendar events, and automated follow-ups using no-code workflow tools and webhooks.",
      result: "Reduced manual work and improved visibility across the client pipeline.",
  },
];

const faqs = [
  {
    question: "What kind of businesses do you help?",
    answer:
      "I help businesses and agencies that want to automate calls, qualify leads faster, book appointments, and keep CRM records updated in real time.",
  },
  {
    question: "Can the voice agent connect to my CRM or calendar?",
    answer:
      "Yes. I can connect voice agents to tools like GoHighLevel, Google Calendar, Google Sheets, Twilio, Make, and n8n depending on your workflow.",
  },
  {
    question: "Can you build booking, rescheduling, and cancellation flows?",
    answer:
      "Yes. That is one of the main workflows I build for AI voice agents.",
  },
  {
    question: "Do you also handle automation behind the agent?",
    answer:
      "Yes. I build the backend logic, workflow automation, and integrations that make the voice agent actually useful for business operations.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">AI Voice Agent Developer • Automation Specialist</span>
            <h1>AI Voice Agents That Answer Calls, Qualify Leads, and Book Appointments</h1>
            <p className="hero-text">
              I build AI voice agents and automations for businesses that need faster response,
              better lead handling, and smoother booking systems using Retell AI, Vapi,
              Twilio, Make, n8n, and GoHighLevel.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book a Call
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
            </div>
            <div className="trust-row">
              <span>Inbound & outbound call flows</span>
              <span>CRM sync</span>
              <span>Booking automation</span>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">What I help solve</p>
            <ul>
              <li>Missed calls and delayed follow-up</li>
              <li>Manual appointment scheduling</li>
              <li>Disconnected CRM and calendar workflows</li>
              <li>Leads getting lost after the first contact</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container stats-grid">
          <div className="stat-card">
            <strong>24/7</strong>
            <span>Call handling coverage</span>
          </div>
          <div className="stat-card">
            <strong>Faster</strong>
            <span>Lead response and follow-up</span>
          </div>
          <div className="stat-card">
            <strong>Connected</strong>
            <span>CRM, calendar, and automation systems</span>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>What I build for businesses that want smarter call workflows</h2>
            <p>
              I focus on voice systems that do more than talk. They capture information,
              trigger actions, and connect with the tools your business already uses.
            </p>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="info-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="section muted">
        <div className="container">
          <div className="section-heading narrow">
            <span className="eyebrow">Tools & Platforms</span>
            <h2>Built with the tools businesses already use</h2>
          </div>

          <div className="pill-wrap">
            {tools.map((tool) => (
              <span className="pill" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Selected Work</span>
            <h2>Example solutions you can showcase on your site</h2>
            <p>
              Replace these with your actual screenshots, Loom demos, or client project summaries.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <p className="project-result">{project.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-column">
          <div>
            <span className="eyebrow">Why Work With Me</span>
            <h2>I focus on the business result, not just the build</h2>
          </div>
          <div className="bullet-panel">
            <div>
              <h3>Human-sounding conversations</h3>
              <p>Voice flows designed to feel natural, clear, and useful for real callers.</p>
            </div>
            <div>
              <h3>Reliable automation logic</h3>
              <p>Clean workflows for booking, routing, updates, reminders, and follow-up.</p>
            </div>
            <div>
              <h3>System integration</h3>
              <p>Your AI agent should connect to the rest of your business, not live in isolation.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container">
          <div className="section-heading narrow">
            <span className="eyebrow">FAQ</span>
            <h2>Questions clients usually ask</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Let’s Build Your System</span>
            <h2>Need an AI voice agent that actually supports your workflow?</h2>
            <p>
              Tell me what you want to automate and I’ll help you design a voice agent
              setup that fits your business.
            </p>
          </div>

          <form className="contact-card">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>
            <label>
              What do you need?
              <textarea
                rows={5}
                placeholder="Tell me about the voice agent or automation you want to build"
              />
            </label>
            <button className="button primary" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
