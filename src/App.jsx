import { useState } from "react";

const SECTIONS = ["about", "skills", "experience", "blog", "contact"];

export default function DevopsTerminalPortfolio() {
  const [collapsed, setCollapsed] = useState(
    Object.fromEntries(SECTIONS.filter((s) => s !== "about" && s !== "skills").map((s) => [s, true]))
  );

  const toggle = (id) =>
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));

  const skills = [
    "Kubernetes",
    "GitOps (FluxCD)",
    "CI/CD (Jenkins, Groovy)",
    "Infrastructure as Code (Terraform, Packer)",
    "AWS (EKS, EC2, AMIs)",
    "Docker / Containerization",
    "Automation (Ansible, AWX)",
    "Scripting (Bash, Python, Go)",
    "Monitoring & Observability (Prometheus, Grafana, ELK, Nagios, Zabbix)",
    "Linux / Systems"
  ];

  const experience = [
    {
      company: "Intel / Habana Labs",
      role: "Senior DevOps Engineer",
      period: "2020-Present",
      points: [
        "Kubernetes operations with KubeVirt",
        "Led release management and environment provisioning",
        "Designed and maintained CI/CD pipelines using Jenkins and Groovy",
        "AWS infrastructure automation using Terraform and Packer",
        "Automated image pipelines using Vagrant and Packer",
        "Implemented vulnerability scanning"
      ]
    },
    {
      company: "Verint",
      role: "DevOps Tech Lead",
      period: "2018-2020",
      points: [
        "Built CI/CD platform from scratch using Jenkins, Bitbucket and Ansible",
        "Implemented Git-flow integrated with CI",
        "Docker containerization",
        "Monitoring stack (Grafana, ELK, Nagios)",
        "Proposed and implemented platform improvements and automation ideas"
      ]
    },
    {
      company: "BlueVine",
      role: "DevOps Engineer",
      period: "2018",
      points: [
        "Managed AWS infrastructure (EC2, S3, RDS)",
        "Optimized ELK & Zabbix monitoring stacks",
        "Automated deployments using Chef",
        "Migrated ELK to Elastic Cloud"
      ]
    },
    {
      company: "SolarEdge",
      role: "DevOps Engineer",
      period: "2016-2018",
      points: [
        "Maintained CI/CD pipelines for Java and Python microservices",
        "Infrastructure automation using Ansible",
        "Built and deployed Docker containers across staging and production",
        "Implemented monitoring with Grafana, ELK, New Relic and Graphite",
        "Managed MySQL environments including replication and backups",
        "Operated Linux infrastructure and load balancers"
      ]
    },
    {
      company: "Head-On Computer Systems",
      role: "Senior Monitoring Solution Engineer",
      period: "2005-2016",
      points: [
        "Designed end-to-end monitoring solutions for enterprise customers",
        "Implemented IBM Tivoli Netcool monitoring platforms",
        "Integrated production systems and infrastructure into monitoring",
        "Analyzed event flows and monitoring architecture"
      ]
    },
    {
      company: "Ness",
      role: "Monitoring Solution Engineer",
      period: "2001-2005",
      points: [
        "Implemented enterprise monitoring solutions",
        "Designed automated issue detection and alerting",
        "Maintained availability and performance monitoring systems"
      ]
    }
  ];

  const blog = [
    "PCI Passthrough with KVM and Libvirt",
    "Automated VM Image Pipeline with Packer and Ansible"
  ];

  const Section = ({ id, title, children }) => {
    const open = !collapsed[id];
    return (
      <div id={id} style={{ marginBottom: 28 }}>
        <div
          onClick={() => toggle(id)}
          style={{
            color: "#4ade80",
            fontWeight: "bold",
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: open ? 12 : 0,
            borderBottom: "1px solid #1f2937",
            paddingBottom: 6,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none"
          }}
        >
          <span>{title}</span>
          <span className="section-toggle" style={{ fontSize: 11, opacity: 0.7 }}>{open ? "[-]" : "[+]"}</span>
        </div>
        <div className="section-body" style={{ display: open ? "block" : "none" }}>{children}</div>
      </div>
    );
  };

  const scrollTo = (id) => {
    setCollapsed((prev) => ({ ...prev, [id]: false }));
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
    <style>{`
      @media print {
        .section-body { display: block !important; }
        .section-toggle { display: none !important; }
        button { display: none !important; }
      }
    `}</style>
    <div style={{
      minHeight: "100vh",
      background: "#0d1117",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "40px 20px",
      fontFamily: "'Courier New', Courier, monospace"
    }}>
      <div style={{ width: "100%", maxWidth: "860px" }}>

        <div style={{
          background: "#161b22",
          borderRadius: 10,
          border: "1px solid #30363d",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)"
        }}>

          {/* Title bar */}
          <div style={{
            background: "#21262d",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 8,
            borderBottom: "1px solid #30363d",
            flexWrap: "wrap"
          }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block", flexShrink: 0 }} />
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block", flexShrink: 0 }} />
            <span style={{ color: "#8b949e", fontSize: 13, marginLeft: 4, marginRight: 16, flexShrink: 0 }}>gennady@portfolio: ~</span>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/gennadyd/" },
                { label: "GitHub", href: "https://github.com/gennadyd" },
                { label: "Email", href: "mailto:gennady.davidov@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/9726325557" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ color: "#4ade80", fontSize: 12, textDecoration: "none", opacity: 0.85 }}>
                  {label}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.print()}
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "1px solid #30363d",
                color: "#4ade80",
                fontSize: 11,
                padding: "3px 10px",
                borderRadius: 4,
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              ↓ PDF
            </button>
          </div>

          {/* Content */}
          <div style={{ padding: "28px 32px", fontSize: 14, color: "#cbd5e1", lineHeight: 1.8 }}>

            <div style={{ marginBottom: 32 }}>
              <div style={{ color: "#4ade80", fontWeight: "bold", fontSize: 22 }}>Gennady Davidov</div>
              <div style={{ marginTop: 4 }}>Senior DevOps / Platform Engineer</div>
              <div style={{ color: "#64748b", marginTop: 4 }}>Kubernetes • GitOps • CI/CD • Automation • Observability</div>
            </div>

            <Section id="about" title="About">
              Senior DevOps / Platform Engineer with 20+ years of experience in infrastructure,
              monitoring and DevOps engineering. Currently working at Intel (Habana Labs)
              focusing on Kubernetes operations, CI/CD platforms and infrastructure automation.
            </Section>

            <Section id="skills" title="Skills">
              {skills.map((s, i) => (
                <div key={i}>• {s}</div>
              ))}
            </Section>

            <Section id="experience" title="Experience">
              {experience.map((job) => (
                <div key={job.company} style={{ marginBottom: 20 }}>
                  <div>
                    <span style={{ color: "#4ade80", fontWeight: "bold" }}>{job.company}</span>
                    <span style={{ color: "#64748b" }}> — {job.role} ({job.period})</span>
                  </div>
                  {job.points.map((p, i) => (
                    <div key={i} style={{ paddingLeft: 16 }}>• {p}</div>
                  ))}
                </div>
              ))}
            </Section>

            <Section id="blog" title="Blog">
              {blog.map((post, i) => (
                <div key={i}>• {post}</div>
              ))}
            </Section>

            <Section id="contact" title="Contact">
              <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                <a style={{ color: "#4ade80" }} href="https://www.linkedin.com/in/gennadyd/">LinkedIn</a>
                <a style={{ color: "#4ade80" }} href="https://github.com/gennadyd">GitHub</a>
                <a style={{ color: "#4ade80" }} href="mailto:gennady.davidov@gmail.com">Email</a>
                <a style={{ color: "#4ade80" }} href="https://wa.me/9726325557">WhatsApp</a>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
