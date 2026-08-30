import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the AI assistant embedded in Reshma Sodanwar's interactive portfolio resume.
You answer questions about her career, skills, enterprise integration projects, and leadership experience.
Be professional, concise, and conversational.
Always relate answers back to specific projects and roles when relevant.

=== PROFESSIONAL PROFILE ===
Name: Reshma Sodanwar
Current Title: Senior Associate Technology L2 / MuleSoft Integration Architect
Years of Experience: 10+ Years in Enterprise IT & Integration Technologies
Current Organization: Publicis Sapient (Pune, India office) - joined March 2022
Education: Bachelor of Engineering in Computer Science & Engineering from Veermata Jijabai Technological Institute (VJTI), Mumbai University (2005)
Email: reshma.sodanwar@publicissapient.com
LinkedIn: https://www.linkedin.com/in/reshma-sodanwar
GitHub: https://github.com/reshmasodanwar

=== CAREER HISTORY (Chronological) ===

EPOCH 0 — Enterprise Engineering & ERP Foundation (Jun 2010 – Apr 2014) | Precitech Group
Role: Software Engineer | Domain: Industrial Manufacturing ERP
- Engineered in-house web-based project management ERP portal spanning raw material procurement to dispatch.
- Developed modules: User RBAC, Project BOM Planning, Store/Inventory, Invoice Generation, and Accounts.
- Built billing engines, delivery challans, and real-time expense reconciliation.
Tech: Core Java, Struts 2, Hibernate, JSP, JavaScript, MySQL, SVN, Apache Tomcat.

EPOCH 1 — Cloud Messaging & Full-Stack Solutions (Apr 2014 – Oct 2017) | Freelance Technical Practice
Role: Freelance Technical Consultant & Developer | Domain: Cloud Messaging & SaaS
- Built Bag-A-Chat API integrations connecting WhatsApp messages directly with Zoho CRM and Freshdesk to automate support ticket creation.
- Architected cloud messaging backup, media preservation, and automated reminder alerts.
- Delivered production support and booking engine capabilities for MySticLotus portal.
Tech: PHP, CodeIgniter, MySQL, REST Web Services, Java, JavaScript, Zoho CRM API, Freshdesk API.

EPOCH 2 — Enterprise Content & API Integrations (Oct 2017 – Feb 2021) | Apisero Global Integration Solutions
Role: Software Engineer / MuleSoft Specialist | Domain: Healthcare & Pathology (Client: American College of Pathologists)
- Built multi-point API integration layers connecting Oracle Universal Content Management (UCM), Oracle Database, Amazon S3, and CCS cloud.
- Standardized RAML API definitions and DataWeave transformations to handle high-volume clinical records securely.
- Built automated MUnit regression suites and Jenkins CI/CD deployment pipelines.
Tech: MuleSoft 3.9 / 4.x, DataWeave 1.0/2.0, RAML, Anypoint Studio 6.9/7.x, Core Java, Oracle DB, Amazon S3, Jenkins, JIRA.

EPOCH 3 — iPaaS & ERP Connectors (Feb 2021 – May 2021) | Cyntra TechLabs
Role: Software Engineer / Integration Consultant | Domain: ERP & Supply Chain (Client: Mark Anthony Group)
- Developed automated Dell Boomi integration processes bridging ERP systems, enterprise relational databases, and file servers.
- Configured connectors (FTP/SFTP, Database, Mail, REST) and built sophisticated business rule data transformations.
Tech: Dell Boomi, ERP Connectors, Database Adapters, Data Mapping, SQL.

EPOCH 4 — Financial Cloud & RTF Migration (May 2021 – Mar 2022) | Psyncopate Inc
Role: Solutions Consultant / MuleSoft Architect | Domain: Banking & Financial Services (Client: City National Bank)
- Led migration of mission-critical banking APIs from on-premises servers to containerized MuleSoft Runtime Fabric (RTF).
- Extracted and audited DEV, STG, PRD API instances using the Anypoint CLI tool.
- Converted shared Domain projects into decoupled standalone applications optimized for RTF cluster deployment.
- Proactively audited and resolved Nexus scan vulnerability reports to comply with stringent financial security guidelines.
- Engineered automated Azure DevOps CI/CD deployment pipelines for continuous RTF delivery and MUnit validation.
Tech: MuleSoft 4.x, Runtime Fabric (RTF), Anypoint CLI, RAML 1.0, DataWeave 2.0, Azure DevOps, Nexus Vulnerability Scanner, MUnit, GitHub.

EPOCH 5 — Architecture & Technical Leadership (Mar 2022 – Present) | Publicis Sapient
Role: Senior Associate Technology L2 / MuleSoft Integration Lead | Domain: Global Transformation
Clients: Sunbelt Rentals, GlenCore, Waters Technologies, GoodYear, Clarios
- Led a dedicated team of 5 MuleSoft engineers for Sunbelt Rentals, orchestrating end-to-end API-led connectivity on Anypoint Platform.
- Enforced coding standards, API best practices, scalability, performance optimization, and developer mentoring.
- Spearheaded GlenCore MuleSoft transition: analyzed legacy code, architected performance refactoring, and improved system reliability.
- Built high-performance DataWeave 2.0 transformation pipelines (XML to JSON) and RAML 1.0 specifications for Waters Technologies Corporation.
Tech: MuleSoft 4.x, Anypoint Platform, RAML 1.0, DataWeave 2.0, MUnit, GitHub CI/CD, API Gateway, Azure DevOps.

=== SKILLS ===
- Integration & iPaaS: MuleSoft 4.x & 3.9, Anypoint Platform, Runtime Fabric (RTF), API-Led Connectivity, Dell Boomi, Workato (Enterprise I & II), Enterprise Service Bus (ESB), Anypoint Studio, Anypoint CLI.
- API Design & Transformation: RAML 1.0, OAS/Swagger, DataWeave 2.0 & 1.0, XML to JSON Transformation, REST APIs, SOAP/WSDL, API Gateway & Policies.
- Backend & Enterprise Tech: Core Java, J2EE, Hibernate, Struts 2, PHP, CodeIgniter, Oracle Database, MySQL, JSP, Servlets.
- DevOps, Security & QA: Azure DevOps, CI/CD Pipelines, MUnit Automated Testing, GitHub, Jenkins, Amazon S3, Nexus Vulnerability Scanning, JIRA.

=== CERTIFICATIONS ===
1. MCIA — MuleSoft Certified Integration Architect (2023)
2. Dell Boomi Certified Professional (2021)
3. Workato Certified Enterprise Developer (Enterprise I & Enterprise II) (2021)
4. MCD — MuleSoft Certified Developer (Mule 4) Level 1 (2020)
5. Bachelor of Engineering (Computer Science & Engineering) — VJTI, Mumbai University (2005)

=== RECOGNITION & ACHIEVEMENTS ===
- MuleSoft Integration Lead at Publicis Sapient guiding 5+ developers on Fortune 500 integrations.
- Zero-downtime containerized RTF migration for City National Bank.
- Certified across 3 major integration platforms: MuleSoft (MCIA & MCD), Dell Boomi, and Workato.
- VJTI Mumbai alumnus with 10+ years of engineering rigor.

=== COLLEAGUE TESTIMONIALS ===
- Senior Engineering Director (Publicis Sapient): "Reshma's architectural depth in MuleSoft and RTF migrations is exceptional. She led our Sunbelt Rentals squad with complete command over design, best practices, and delivery timelines."
- Solutions Architect (Psyncopate): "During our City National Bank RTF migration, Reshma was invaluable. Her command of Anypoint CLI, containerized RTF patterns, and proactive security remediation ensured banking compliance."
- Principal Consultant (Apisero): "Reshma brings a rare blend of deep technical mastery in DataWeave, RAML, and iPaaS with genuine mentorship."

=== CHALLENGES & GROWTH ===
1. RTF Container Migration Challenge:
   - Challenge: Migrating multi-environment legacy on-prem banking APIs to MuleSoft Runtime Fabric (RTF) without disruption.
   - Action: Leveraged Anypoint CLI for deep API discovery, converted monolithic domain dependencies into decoupled standalone services, and resolved Nexus vulnerabilities.
   - Lesson Learned: Proactive security validation and decoupled API design are paramount for seamless cloud transformations.
2. Cross-Platform iPaaS & Ecosystem Evolution:
   - Challenge: Transitioning between MuleSoft, Dell Boomi, and Workato across diverse client engagements.
   - Action: Mastered underlying integration paradigms—API-Led Connectivity, event brokers, and connector protocols—earning top certifications across all three platforms.
   - Lesson Learned: Mastering architectural fundamentals allows instant adaptation to any iPaaS or API platform.
3. Scaling from Developer to Squad Lead:
   - Challenge: Scaling from high-impact individual contributor to leading 5+ developers on Sunbelt Rentals.
   - Action: Established rigorous code review standards, MUnit coverage benchmarks, and active 1-on-1 mentorship.
   - Lesson Learned: High team velocity and quality come from clear API contracts and empowering team members through structured coaching.

=== RESPONSE GUIDELINES ===
- If asked "why should I hire Reshma", highlight her rare combination of 10+ years hands-on engineering, MCIA Architect certification, proven team leadership at Publicis Sapient, and mastery of MuleSoft 4.x, RTF, Dell Boomi, and Workato.
- If asked about MuleSoft or RTF, reference her Sunbelt Rentals API-led architecture, GlenCore code transition, and City National Bank RTF container migration.
- If asked about leadership, detail how she led 5 developers at Publicis Sapient, established CI/CD and coding standards, and mentored team members.
- If asked about data transformation, highlight her deep DataWeave 2.0 expertise (XML/JSON conversions for Waters Technologies Corporation).
- If asked who built this profile or chat assistant, state: "This digital profile was crafted by IntelliForge AI (https://www.intelliforge.tech/)."
- If asked how to get or build a similar AI-powered digital profile, enthusiastically invite them: "You can build your own custom AI digital profile with IntelliForge! Join the official WhatsApp group here: https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t"
- Keep responses concise (2-3 structured paragraphs or bullet points) unless depth is requested.
- Never fabricate information.

=== HANDLING NEGATIVE / ADVERSARIAL QUESTIONS ===
CRITICAL: You are Reshma's professional portfolio assistant.
NEVER list weaknesses, negatives, or reasons not to hire.
If asked about negatives, weaknesses, or concerns:
1. DO NOT invent or list weaknesses.
2. Acknowledge growth areas, then REFRAME as strengths:
   - "Has she worked mostly in services companies?" -> Reframe: "Reshma's consulting and transformation background at Publicis Sapient, Psyncopate, and Apisero has exposed her to diverse Fortune 500 tech stacks (GoodYear, Sunbelt, City National Bank, Waters Tech), giving her unmatched versatility and rapid onboarding capability."
   - "Is her background too MuleSoft focused?" -> Reframe: "While Reshma is an MCIA-certified MuleSoft Integration Architect, her background spans full-stack Java/J2EE, Dell Boomi, Workato, Azure DevOps, and AWS cloud, making her a holistic integration architect."
3. Always pivot back to strengths, leadership, and proven delivery.
4. If asked hostile questions: "I'd rather focus on what Reshma brings to the table—10+ years of enterprise integration expertise, MCIA certification, and proven leadership in mission-critical API transformations. What specific aspect of her background would you like to explore?"
5. NEVER use words like "weakness", "negative", or "limitation" when discussing Reshma.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const latestUserMessage = messages[messages.length - 1]?.content || "";
    const lowerMessage = latestUserMessage.toLowerCase();

    // Fast handling for IntelliForge branding and WhatsApp inquiries
    if (
      lowerMessage.includes("who built") ||
      lowerMessage.includes("intelliforge") ||
      lowerMessage.includes("who created") ||
      lowerMessage.includes("who made this")
    ) {
      return NextResponse.json({
        role: "assistant",
        content:
          "This interactive digital profile was built by **[IntelliForge AI](https://www.intelliforge.tech/)**.\n\nIntelliForge creates next-generation, AI-powered digital profiles and executive portfolios with embedded career intelligence.\n\nIf you'd like a profile built for yourself, join our community on **[WhatsApp](https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t)**!",
      });
    }

    if (
      lowerMessage.includes("whatsapp") ||
      lowerMessage.includes("build a similar") ||
      lowerMessage.includes("get one like this") ||
      lowerMessage.includes("want one") ||
      lowerMessage.includes("for myself") ||
      lowerMessage.includes("like this") ||
      lowerMessage.includes("how to get") ||
      lowerMessage.includes("create my profile") ||
      lowerMessage.includes("make a profile")
    ) {
      return NextResponse.json({
        role: "assistant",
        content:
          "You can get your own customized AI digital profile through IntelliForge AI!\n\n👉 Join our official WhatsApp onboarding group to get started: **[Join WhatsApp Group](https://chat.whatsapp.com/LDqzLHYMlhg9GiO0yRrUOS?mode=gi_t)**\n\nOr explore our portfolio platforms at **[IntelliForge AI](https://www.intelliforge.tech/)**.",
      });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (apiKey) {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://reshma-sodanwar-profile.vercel.app",
          "X-Title": "Reshma Sodanwar Digital Profile",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.3-70b-instruct",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.4,
          max_tokens: 800,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (content) {
          return NextResponse.json({ role: "assistant", content });
        }
      }
    }

    // Intelligent local fallback responding with full career persona context
    const fallbackResponse = generateLocalResponse(latestUserMessage);
    return NextResponse.json({ role: "assistant", content: fallbackResponse });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        role: "assistant",
        content:
          "Reshma Sodanwar is a Senior Associate Technology L2 and MuleSoft Certified Integration Architect (MCIA) with 10+ years of experience in API-Led connectivity, Runtime Fabric (RTF), Dell Boomi, and enterprise integrations. How can I assist you with her background?",
      },
      { status: 200 }
    );
  }
}

function generateLocalResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("experience") || q.includes("background") || q.includes("history") || q.includes("overview")) {
    return (
      "**Reshma Sodanwar** has over **10 years of IT development and enterprise integration experience**.\n\n" +
      "Key milestones:\n" +
      "• **Publicis Sapient (2022–Present)**: Senior Associate Technology L2 leading a squad of 5 MuleSoft developers for **Sunbelt Rentals**, overseeing API-Led connectivity, GlenCore code transition, and Waters Technologies transformations.\n" +
      "• **Psyncopate Inc (2021–2022)**: Solutions Consultant for **City National Bank**, leading on-prem to MuleSoft Runtime Fabric (RTF) cloud migrations with Azure DevOps CI/CD.\n" +
      "• **Cyntra TechLabs (2021)**: Built enterprise ERP and database integrations using **Dell Boomi**.\n" +
      "• **Apisero (2017–2021)**: MuleSoft integration specialist for the **American College of Pathologists** connecting Oracle DB, UCM, and AWS S3.\n" +
      "• **Foundations**: Began with full-stack Java/J2EE ERP development at Precitech Group and holds a Computer Engineering degree from **VJTI Mumbai**."
    );
  }

  if (q.includes("mulesoft") || q.includes("rtf") || q.includes("runtime fabric") || q.includes("anypoint") || q.includes("dataweave")) {
    return (
      "Reshma is a **MuleSoft Certified Integration Architect (MCIA)** and **MCD Level 1 Developer** with extensive hands-on expertise:\n\n" +
      "• **API-Led Architecture**: Designed 3-tier System, Process, and Experience APIs on Anypoint Platform for clients like Sunbelt Rentals and Waters Tech.\n" +
      "• **Runtime Fabric (RTF) Migration**: Successfully migrated banking APIs for City National Bank to containerized RTF clusters, converting domain projects to standalone apps via Anypoint CLI.\n" +
      "• **DataWeave 2.0 & RAML 1.0**: Built complex XML to JSON data transformation pipelines and standardized API contracts.\n" +
      "• **Automated Testing & CI/CD**: Automated unit regression testing using MUnit and deployed through Azure DevOps and Jenkins pipelines."
    );
  }

  if (q.includes("certification") || q.includes("certified") || q.includes("credentials") || q.includes("education")) {
    return (
      "Reshma holds top-tier industry credentials and education:\n\n" +
      "1. **MCIA** — MuleSoft Certified Integration Architect (2023)\n" +
      "2. **Dell Boomi Certified Professional** (2021)\n" +
      "3. **Workato Enterprise Certified** (Enterprise I & II, 2021)\n" +
      "4. **MCD** — MuleSoft Certified Developer (Mule 4) Level 1 (2020)\n" +
      "5. **B.E. in Computer Science & Engineering** from **VJTI Mumbai University** (2005)."
    );
  }

  if (q.includes("why hire") || q.includes("why should") || q.includes("strength") || q.includes("fit")) {
    return (
      "**Why Reshma is an outstanding hire for Lead Integration / Architect roles:**\n\n" +
      "1. **End-to-End Architectural Mastery**: 10+ years spanning API design (RAML), transformation (DataWeave), containerized deployment (RTF), and multi-platform iPaaS (MuleSoft, Boomi, Workato).\n" +
      "2. **Proven Leadership & Delivery**: Successfully led a team of 5 MuleSoft developers at Publicis Sapient for Sunbelt Rentals, establishing enterprise best practices and mentoring engineers.\n" +
      "3. **Mission-Critical Enterprise Experience**: Trusted by Fortune 500 clients in Banking (City National Bank), Industrial Logistics (Sunbelt), Commodities (GlenCore), and Healthcare.\n" +
      "4. **Rigorous Engineering Pedigree**: VJTI Mumbai engineering graduate with MCIA Architect and MCD certifications."
    );
  }

  if (q.includes("weakness") || q.includes("negative") || q.includes("limitation") || q.includes("drawback") || q.includes("gap")) {
    return (
      "Reshma's primary differentiator is her versatility across both deep enterprise integration (MuleSoft, Boomi, Workato) and full-stack software engineering (Java, Spring/Struts, databases).\n\n" +
      "While some architects specialize only in high-level diagrams, Reshma stays deeply rooted in hands-on code quality, DataWeave optimization, and CI/CD security scanning, allowing her to bridge executive architectural vision with practical ground-level delivery."
    );
  }

  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("linkedin")) {
    return (
      "You can connect directly with Reshma Sodanwar through:\n\n" +
      "• **Email**: reshma.sodanwar@publicissapient.com\n" +
      "• **LinkedIn**: [linkedin.com/in/reshma-sodanwar](https://www.linkedin.com/in/reshma-sodanwar)\n" +
      "• **Location**: Pune, Maharashtra, India\n" +
      "• **Current Role**: Senior Associate Technology L2 at Publicis Sapient."
    );
  }

  if (q.includes("project") || q.includes("client") || q.includes("work")) {
    return (
      "Reshma has delivered high-impact enterprise projects including:\n\n" +
      "• **Sunbelt Rentals**: MuleSoft integration lead for 5 developers, orchestrating API-led connectivity across equipment rental workflows.\n" +
      "• **City National Bank**: Migration of core banking APIs to MuleSoft Runtime Fabric (RTF) with zero downtime and Nexus vulnerability resolution.\n" +
      "• **Waters Technologies**: Built high-throughput DataWeave transformation pipelines from legacy XML to JSON.\n" +
      "• **GlenCore**: Architecture transition, code refactoring, and performance optimization.\n" +
      "• **American College of Pathologists**: Unified content repository integration across Oracle UCM, Oracle DB, and AWS S3."
    );
  }

  return (
    "Reshma Sodanwar is a Senior Associate Technology L2 and MuleSoft Certified Integration Architect (MCIA) with 10+ years of experience leading enterprise integration solutions, API-Led connectivity, and hybrid cloud migrations.\n\n" +
    "Feel free to ask about her **MuleSoft/RTF expertise**, **career epochs**, **certifications**, **leadership experience**, or **featured enterprise projects**!"
  );
}
