export default function DevopsTerminalPortfolio() {

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
      period: "2020–Present",
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
      period: "2018–2020",
      points: [
        "Built CI/CD platform from scratch using Jenkins, Bitbucket and Ansible",
        "Implemented Git‑flow integrated with CI",
        "Docker containerization",
        "Monitoring stack (Grafana, ELK, Nagios)",
        "Proposed and implemented platform improvements and automation ideas across the engineering environment"
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
      period: "2016–2018",
      points: [
        "Maintained CI/CD pipelines for Java and Python microservices",
        "Infrastructure automation and environment configuration using Ansible",
        "Built and deployed Docker containers across staging and production",
        "Implemented monitoring and reporting with Grafana, ELK, New Relic and Graphite",
        "Managed MySQL environments including replication, backups and monitoring",
        "Operated Linux infrastructure and load balancers"
      ]
    },
    {
      company: "Head‑On Computer Systems",
      role: "Senior Monitoring Solution Engineer",
      period: "2005–2016",
      points: [
        "Designed and implemented end‑to‑end monitoring solutions for enterprise customers",
        "Implemented IBM Tivoli Netcool monitoring platforms",
        "Integrated production systems, applications and infrastructure into monitoring",
        "Analyzed event flows and monitoring architecture across complex environments"
      ]
    },
    {
      company: "Ness",
      role: "Monitoring Solution Engineer",
      period: "2001–2005",
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

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#e2e8f0",
      fontFamily: "monospace",
      display: "flex",
      justifyContent: "center",
      padding: "40px 20px"
    }}>

      <div style={{width:"100%",maxWidth:"900px"}}>

        <header style={{marginBottom:40}}>
          <h1 style={{color:"#4ade80",fontSize:32,fontWeight:"bold"}}>Gennady Davidov</h1>
          <div style={{marginTop:10,fontSize:18}}>
            Senior DevOps / Platform Engineer
          </div>
          <div style={{color:"#4ade80",marginTop:6}}>
            Kubernetes • GitOps • CI/CD • Automation • Observability
          </div>
        </header>

        <section style={{marginBottom:35}}>
          <h2 style={{color:"#4ade80",marginBottom:10}}>About</h2>
          <p>
            Senior DevOps / Platform Engineer with 20+ years of experience in infrastructure,
            monitoring and DevOps engineering. Currently working at Intel (Habana Labs)
            focusing on Kubernetes operations, CI/CD platforms and infrastructure automation.
          </p>
        </section>

        <section style={{marginBottom:35}}>
          <h2 style={{color:"#4ade80",marginBottom:10}}>Skills</h2>
          <ul style={{lineHeight:1.8,listStyle:"none",paddingLeft:0}}>
            {skills.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </section>

        <section style={{marginBottom:35}}>
          <h2 style={{color:"#4ade80",marginBottom:15}}>Experience</h2>

          <div style={{display:"flex",flexDirection:"column",gap:18}}>

          {experience.map((job) => (
            <div key={job.company} style={{
              background:"#111827",
              border:"1px solid #1f2937",
              borderRadius:10,
              padding:18
            }}>

              <div style={{color:"#4ade80",fontWeight:"bold"}}>
                {job.company}
              </div>

              <div style={{color:"#9ca3af",fontSize:14,marginBottom:10}}>
                {job.role} ({job.period})
              </div>

              <ul style={{fontSize:14,lineHeight:1.7,listStyle:"none",paddingLeft:0}}>
                {job.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>

            </div>
          ))}

          </div>

        </section>

        <section style={{marginBottom:35}}>
          <h2 style={{color:"#4ade80",marginBottom:10}}>Blog</h2>
          <ul style={{lineHeight:1.8,listStyle:"none",paddingLeft:0}}>
            {blog.map((post) => (
              <li key={post}>• {post}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 style={{color:"#4ade80",marginBottom:10}}>Contact</h2>
          <div style={{lineHeight:1.8}}>
            <div>
              LinkedIn: <a style={{color:"#4ade80"}} href="https://www.linkedin.com/in/gennadyd/">linkedin.com/in/gennadyd</a>
            </div>
            <div>
              GitHub: <a style={{color:"#4ade80"}} href="https://github.com/gennadyd">github.com/gennadyd</a>
            </div>
            <div>
              Email: <a style={{color:"#4ade80"}} href="mailto:gennady.davidov@gmail.com">gennady.davidov@gmail.com</a>
            </div>
            <div>
              WhatsApp: <a style={{color:"#4ade80"}} href="https://wa.me/9726325557">+972 63 255 57</a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
