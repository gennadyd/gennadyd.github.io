import { useState } from "react";

export default function DevopsTerminalPortfolio() {
  const prompt = "gennady@master:~$";

  const skills = `Kubernetes
GitOps (FluxCD)
CI/CD (Jenkins, Groovy)
Infrastructure as Code (Terraform, Packer)
AWS (EKS, EC2, AMIs)
Docker / Containerization
Automation (Ansible, AWX, Bash, Python)
Monitoring & Observability (Prometheus, Grafana, ELK, Nagios, Zabbix)
Linux / Systems`;

  const experience = `Intel / Habana Labs — Senior DevOps Engineer (2020–Present)
- Kubernetes operations with KubeVirt
- Led release management and environment provisioning
- Designed and maintained CI/CD pipelines using Jenkins and Groovy
- AWS infrastructure automation (EKS, EC2, AMIs) using Terraform and Packer
- Automated image pipelines using Vagrant and Packer
- Implemented vulnerability scanning

Verint — DevOps Tech Lead (2018–2020)
- Built CI/CD platform from scratch using Jenkins, Bitbucket and Ansible
- Implemented Git-flow integrated with CI
- Docker containerization
- Monitoring stack (Grafana, ELK, Nagios)

SolarEdge — DevOps Engineer (2017–2018)
- CI/CD pipelines for Java and Python microservices
- Automation using Ansible
- Docker deployments
- Monitoring (Grafana, ELK, New Relic, Graphite)`;

  const projects = `kubernetes-platform
cicd-platform
image-pipelines`;

  const blog = `pci-passthrough-kvm-libvirt
packer-ansible-vagrant-libvirt-infrastructure-labs`;

  const help = `Available commands:
whoami
about
skills
experience
projects
blog
contact
clear`;

  const contact = `LinkedIn: linkedin.com/in/gennadyd
GitHub: github.com/gennadyd
Email: gennady.davidov@gmail.com`;

  const about = `Senior DevOps / Platform Engineer with 20+ years in infrastructure, monitoring and DevOps engineering.
Currently working at Intel (Habana Labs) focusing on Kubernetes operations, CI/CD platforms, infrastructure automation and cloud environments.`;

  const commands = {
    whoami: "Senior DevOps / Platform Engineer\nKubernetes • GitOps • CI/CD • Automation • Observability",
    about,
    skills,
    experience,
    projects,
    blog,
    contact,
    help
  };

  const [history, setHistory] = useState([
    `${prompt} whoami`,
    commands.whoami,
    `${prompt} help`,
    help
  ]);

  const [input, setInput] = useState("");

  function runCommand(e) {
    e.preventDefault();

    const cmd = input.trim();

    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[cmd] || `command not found: ${cmd}`;

    setHistory((h) => [...h, `${prompt} ${cmd}`, output]);
    setInput("");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#22c55e",
        fontFamily: "monospace",
        display: "flex",
        justifyContent: "center",
        padding: "40px 20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          borderRadius: "16px",
          border: "1px solid #1e293b",
          background: "#111",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "#1e293b",
            padding: "12px 16px",
            fontSize: "14px",
            color: "#94a3b8"
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
          <div style={{ marginLeft: 8 }}>gennady@master:~</div>
        </div>

        <div style={{ padding: "32px", lineHeight: 1.6 }}>
          {history.map((line, i) => (
            <div
              key={i}
              style={{
                color: line.startsWith(prompt) ? "#4ade80" : "#cbd5e1",
                whiteSpace: "pre-line"
              }}
            >
              {line}
            </div>
          ))}

          <form onSubmit={runCommand} style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            <span style={{ color: "#4ade80" }}>{prompt}</span>
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#e2e8f0",
                fontFamily: "monospace",
                fontSize: "16px"
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}