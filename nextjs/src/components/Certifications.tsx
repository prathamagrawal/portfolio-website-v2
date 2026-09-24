"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import ScrollReveal from "./ScrollReveal";

const CERT_DATA = {
  title: "AWS Certified Data Engineer – Associate",
  code: "DEA-C01",
  issuer: "Amazon Web Services (AWS)",
  division: "AWS Training and Certification",
  issueDate: "July 25, 2026",
  expirationDate: "July 25, 2029",
  credentialId: "d2f78d86511148d89e01d977e84c03bd",
  credlyUrl: "https://www.credly.com/badges/d2f78d86-5111-48d8-9e01-d977e84c03bd",
  awsVerifyUrl: "https://aws.amazon.com/verification",
  image: "/aws-certified-data-engineer.png",
  skills: [
    "Data Engineering",
    "Data Analysis",
    "ETL & ELT Pipelines",
    "Batch & Streaming Ingestion",
    "Distributed Storage & Lakes",
    "Pipeline Security & IAM",
  ],
  summary:
    "Validates comprehensive expertise in architecting, automating, and securing end-to-end data pipelines on AWS. Proves domain mastery across distributed data ingestion, lakehouse architectures, schema migration, performance monitoring, and fault-tolerant compute workloads.",
};

export default function Certifications() {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCopyId = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(CERT_DATA.credentialId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API not permitted
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <SectionLabel label="certifications" id="certifications">
      <ScrollReveal duration={600}>
        <div className="project-card cert-card-wrapper">
          <div className="project-card-grid">

            {/* ── Left Column: Certificate Showcase (Window Frame) ── */}
            <div className="project-card-visual">
              <div className="project-window-frame" style={{ cursor: "pointer" }} onClick={() => setModalOpen(true)}>

                {/* Window Header */}
                <div className="project-window-header">
                  <div className="project-window-dots" aria-hidden="true">
                    <span className="project-window-dot red" />
                    <span className="project-window-dot yellow" />
                    <span className="project-window-dot green" />
                  </div>
                  <span className="project-window-title">
                    aws / data-engineer-associate.cert
                  </span>
                  <span className="project-window-badge" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        backgroundColor: "#3fb950",
                        display: "inline-block",
                        boxShadow: "0 0 6px #3fb950",
                      }}
                      aria-hidden="true"
                    />
                    VERIFIED
                  </span>
                </div>

                {/* Canvas with Certificate Image */}
                <div className="project-window-canvas" style={{ position: "relative", minHeight: "300px" }}>
                  <Image
                    src={CERT_DATA.image}
                    alt={`${CERT_DATA.title} issued to Pratham Agrawal`}
                    fill
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "16px",
                    }}
                    sizes="(max-width: 900px) 100vw, 550px"
                    quality={100}
                    priority
                  />

                  {/* Hover overlay hint */}
                  <div className="cert-canvas-hint" aria-hidden="true">
                    <span>Click to expand certificate ⤢</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ── Right Column: Credential Dossier & Verification ── */}
            <div className="project-card-info">
              <div>

                {/* Category & Status Bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                  <span className="project-category-tag" style={{ margin: 0 }}>
                    AWS TRAINING &amp; CERTIFICATION // {CERT_DATA.code}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10.5px",
                      color: "#3fb950",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "2px 8px",
                      background: "rgba(63, 185, 80, 0.12)",
                      border: "1px solid rgba(63, 185, 80, 0.25)",
                      borderRadius: "3px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#3fb950",
                        boxShadow: "0 0 8px #3fb950",
                      }}
                      aria-hidden="true"
                    />
                    <span>ACTIVE · 2026 – 2029</span>
                  </div>
                </div>

                {/* Certification Title */}
                <h3 style={{ margin: "4px 0 6px 0", fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
                  <a
                    href={CERT_DATA.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    {CERT_DATA.title}
                  </a>
                </h3>

                {/* Issuer subtitle */}
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)", marginBottom: "16px" }}>
                  Issued by <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{CERT_DATA.issuer}</span> to <span style={{ color: "var(--text-primary)" }}>Pratham Agrawal</span>
                </p>

                {/* Summary */}
                <div className="project-desc-panel" style={{ marginBottom: "16px" }}>
                  <p>{CERT_DATA.summary}</p>
                </div>

                {/* Verification Telemetry Grid */}
                <div
                  style={{
                    backgroundColor: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "4px",
                    padding: "12px 14px",
                    marginBottom: "16px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                  }}
                >
                  {/* Credential ID row with copy button */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", paddingBottom: "8px", borderBottom: "1px solid var(--border-muted)" }}>
                    <span style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>credential id</span>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                      <code style={{ color: "var(--metric)", fontSize: "11.5px", background: "var(--accent-dim)", padding: "1px 6px", borderRadius: "2px" }}>
                        {CERT_DATA.credentialId}
                      </code>
                      <button
                        type="button"
                        onClick={handleCopyId}
                        style={{
                          background: "none",
                          border: "1px solid var(--border)",
                          borderRadius: "2px",
                          color: copied ? "#3fb950" : "var(--text-secondary)",
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          padding: "2px 6px",
                          cursor: "pointer",
                          transition: "all 120ms ease",
                        }}
                        aria-label="Copy Credential ID"
                      >
                        {copied ? "COPIED ✓" : "COPY"}
                      </button>
                    </div>
                  </div>

                  {/* Dates Row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", paddingTop: "8px" }}>
                    <span style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>validity window</span>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {CERT_DATA.issueDate} — {CERT_DATA.expirationDate}
                    </span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {CERT_DATA.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "12px", paddingTop: "8px" }}>
                <a
                  href={CERT_DATA.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-primary"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>Show Credential (Credly) ↗</span>
                </a>

                <a
                  href={CERT_DATA.awsVerifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-btn-secondary"
                >
                  <span>AWS Verification Portal ↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="cert-btn-text"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    padding: "4px 8px",
                  }}
                >
                  Preview Certificate ⤢
                </button>
              </div>

            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* ── Certificate Lightbox Modal ── */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Image Preview"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "960px",
              width: "100%",
              backgroundColor: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0, 0, 0, 0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                borderBottom: "1px solid var(--border)",
                backgroundColor: "var(--surface-2)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-primary)", fontWeight: 600 }}>
                  AWS Certified Data Engineer – Associate
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#3fb950" }}>
                  ● VERIFIED
                </span>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-secondary)",
                  fontSize: "18px",
                  cursor: "pointer",
                  padding: "4px 8px",
                  fontFamily: "var(--font-mono)",
                }}
                aria-label="Close Preview"
              >
                ✕
              </button>
            </div>

            {/* Modal image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1121/865", maxHeight: "78vh" }}>
              <Image
                src={CERT_DATA.image}
                alt="AWS Certificate full view"
                fill
                style={{ objectFit: "contain", padding: "16px" }}
                quality={100}
                priority
              />
            </div>

            {/* Modal footer */}
            <div
              style={{
                padding: "10px 16px",
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-muted)",
              }}
            >
              <span>Validation ID: {CERT_DATA.credentialId}</span>
              <a
                href={CERT_DATA.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none" }}
              >
                Verify on Credly ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </SectionLabel>
  );
}
