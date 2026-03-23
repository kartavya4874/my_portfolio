"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certImages = [
  {
    title: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    year: 2025,
    image: "/certs/microsoft.PNG",
    description:
      "Validates expertise in building, managing, and deploying AI solutions leveraging Azure Cognitive Services, Azure Bot Service, and Azure Machine Learning. Demonstrates proficiency in designing and implementing AI workloads on Microsoft Azure.",
  },
  {
    title: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    issuer: "Oracle",
    year: 2024,
    image: "/certs/oracle.png",
    description:
      "Certifies foundational knowledge of AI and machine learning concepts on Oracle Cloud Infrastructure (OCI), including deep learning, NLP, computer vision, and OCI AI services for building intelligent applications.",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    year: 2025,
    image: "/certs/oracle.png",
    description:
      "Demonstrates expertise in implementing vector-based similarity search using Oracle Database, enabling semantic search capabilities for AI-powered applications and RAG workflows.",
  },
  {
    title: "Google AI Professional",
    issuer: "Google",
    year: 2024,
    image: "/certs/google.png",
    description:
      "Recognizes professional-level proficiency in Google AI technologies, including TensorFlow, machine learning pipelines, and deploying AI solutions on Google Cloud Platform for real-world applications.",
  },
  {
    title: "Neo4j Certified Professional",
    issuer: "Neo4j",
    year: 2024,
    image: "/certs/neo4j.PNG",
    description:
      "Validates deep knowledge of graph database fundamentals, Cypher query language, data modeling, and graph algorithms using Neo4j for building connected data applications.",
  },
  {
    title: "Neo4j Graph Data Science Certification",
    issuer: "Neo4j",
    year: 2024,
    image: "/certs/neo4j2.PNG",
    description:
      "Certifies advanced skills in graph data science including community detection, centrality algorithms, link prediction, and graph embeddings using the Neo4j Graph Data Science library.",
  },
  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    year: 2024,
    image: "/certs/salesforce.PNG",
    description:
      "Demonstrates understanding of AI fundamentals within the Salesforce ecosystem, including Einstein AI capabilities, predictive analytics, and ethical AI practices in enterprise CRM environments.",
  },
  {
    title: "NVIDIA - Generative AI Explained",
    issuer: "NVIDIA",
    year: 2024,
    image: "/certs/nvidia.png",
    description:
      "Validates understanding of generative AI concepts including large language models, transformer architectures, diffusion models, and the applications of generative AI in enterprise and creative workflows.",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div
              className="p-3 rounded-2xl"
              style={{
                background: "rgba(0,245,255,0.08)",
                border: "1px solid rgba(0,245,255,0.2)",
              }}
            >
              <Award size={28} style={{ color: "var(--accent)" }} />
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-orbitron)", color: "var(--text)" }}
            >
              Certifications
            </h1>
          </div>
          <p className="text-lg max-w-2xl" style={{ color: "var(--muted)" }}>
            Professional credentials validating expertise in AI, cloud platforms, graph databases, and enterprise technologies.
          </p>
        </motion.div>

        {/* Diagonal layout with descriptions */}
        <div className="relative flex flex-col gap-20 md:gap-28">
          {certImages.map((cert, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={cert.title + idx}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                className={`flex flex-col gap-8 ${
                  isEven
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
                style={{
                  marginLeft: isEven ? "0" : "auto",
                  marginRight: isEven ? "auto" : "0",
                  maxWidth: "100%",
                }}
              >
                {/* Image side */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden shrink-0 md:w-[55%]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {/* Accent top bar */}
                  <div
                    className="h-1"
                    style={{
                      background: isEven
                        ? "linear-gradient(90deg, var(--accent), var(--secondary))"
                        : "linear-gradient(90deg, var(--secondary), var(--highlight))",
                    }}
                  />
                  <div className="relative w-full overflow-hidden" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={680}
                      height={480}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      style={{ display: "block" }}
                    />
                  </div>
                </motion.div>

                {/* Description side */}
                <div
                  className={`flex flex-col justify-center md:w-[45%] ${
                    isEven ? "md:pl-4" : "md:pr-4"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(0,245,255,0.1)",
                        border: "1px solid rgba(0,245,255,0.2)",
                      }}
                    >
                      <Award size={18} style={{ color: "var(--accent)" }} />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--muted)" }}>
                      <span>{cert.issuer}</span>
                      <span>·</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  <h3
                    className="font-bold text-xl sm:text-2xl md:text-2xl mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-space)", color: "var(--text)" }}
                  >
                    {cert.title}
                  </h3>

                  <p
                    className="text-sm sm:text-base leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {cert.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className="mt-6 h-px w-24"
                    style={{
                      background: isEven
                        ? "linear-gradient(90deg, var(--accent), transparent)"
                        : "linear-gradient(90deg, var(--secondary), transparent)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center"
        >
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "var(--accent)" }}
          >
            <ArrowLeft size={14} />
            Back to homepage
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
