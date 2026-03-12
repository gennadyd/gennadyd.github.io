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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 font-mono flex justify-center px-6 py-12">

      <div className="w-full max-w-4xl">

        <header className="mb-12">
          <h1 className="text-3xl text-green-400 font-bold">Gennady Davidov</h1>
          <p className="mt-3 text-lg">
            Senior DevOps / Platform Engineer
          </p>
          <p className="text-green-400 mt-2">
            Kubernetes • GitOps • CI/CD • Automation • Observability
          </p>
        </header>


        <section className="mb-10">
          <h2 className="text-xl text-green-400 mb-3">About</h2>
          <p>
            Senior DevOps / Platform Engineer with 20+ years of experience in infrastructure,
            monitoring and DevOps engineering. Currently working at Intel (Habana Labs)
            focusing on Kubernetes operations, CI/CD platforms and infrastructure automation.
          </p>
        </section>


        <section className="mb-10">
          <h2 className="text-xl text-green-400 mb-3">Skills</h2>
          <ul className="space-y-1">
            {skills.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </section>


        <section className="mb-10">
          <h2 className="text-xl text-green-400 mb-4">Experience</h2>

          <div className="grid gap-5 md:grid-cols-2">

          {experience.map((job) => (
            <div key={job.company} className="rounded-xl border border-slate-800 bg-[#111827] p-5">
              <div className="text-green-400 font-semibold">
                {job.company}
              </div>
              <div className="text-sm text-slate-400 mb-2">
                {job.role} ({job.period})
              </div>

              <ul className="space-y-1 text-sm">
                {job.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}

          </div>

        </section>




        <section className="mb-10">
          <h2 className="text-xl text-green-400 mb-3">Blog</h2>
          <ul className="space-y-1">
            {blog.map((post) => (
              <li key={post}>• {post}</li>
            ))}
          </ul>
        </section>


        <section>
          <h2 className="text-xl text-green-400 mb-3">Contact</h2>
          <div className="space-y-1">
            <div>
              LinkedIn: <a className="text-green-400" href="https://www.linkedin.com/in/gennadyd/">linkedin.com/in/gennadyd</a>
            </div>
            <div>
              GitHub: <a className="text-green-400" href="https://github.com/gennadyd">github.com/gennadyd</a>
            </div>
            <div>
              Email: <a className="text-green-400" href="mailto:gennady.davidov@gmail.com">gennady.davidov@gmail.com</a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
