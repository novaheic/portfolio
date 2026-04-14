window.PORTFOLIO_DATA = {
  profile: {
    name: "Nova Heidt",
    tagline: "Hey, I'm Nova, and I'm into Technology, Money, and building things where they intersect.",
    focusAreas: ["Project Management", "Research & Analysis", "Software Design & Prototyping"],
    email: "novaheidt@gmail.com",
    profileImage: "assets/img/profile/nova-heidt.jpg",
    socials: [
      { platform: "linkedin", url: "https://www.linkedin.com/in/nova-heidt/" },
      { platform: "github", url: "https://github.com/novaheic" }
    ]
  },
  projects: [
    {
      slug: "coverpaste",
      title: "Coverpaste",
      status: "live",
      date: "March 2025",
      oneLiner: "AI cover letters from your CV and job post.",
      bannerImage: "assets/img/projects/CoverPasteBanner.png",
      iconImage: "assets/img/projects/CoverPasteLogo.png",
      primaryUrl: "https://coverpaste.com/",
      backupUrl: "https://coverpaste.vercel.app/",
      socials: [{ platform: "linkedin", url: "https://www.linkedin.com/company/coverpaste/" }],
      details:
        "Coverpaste is a production-ready application designed to remove friction from one of the most repetitive steps in the hiring process. The flow is intentionally simple: paste a job description, upload a CV, optionally include a previous letter for style guidance, and generate a tailored cover letter that is already formatted for export as a PDF. Beyond content generation, the product focuses on practical usability with clear inputs, structured output quality, and a fast path from draft to final document. I built it as an end-to-end shipping exercise to validate product thinking, interface design, and AI-assisted development in a real user-facing tool.",
      detailMedia: [
        {
          type: "youtube",
          url: "https://youtube.com/watch?v=yW1-CYniOJs",
          title: "Coverpaste product demo",
          position: "afterDetails"
        }
      ],
      pitchDeckUrl: "",
      awardLabel: "200+ Users",
      awardEmoji: "👥",
      awardVariant: "users"
    },
    {
      slug: "vmtree",
      title: "VMTree",
      status: "prototype",
      date: "2022",
      oneLiner: "Verifiable Merkle trees with lower on-chain costs.",
      bannerImage: "assets/img/projects/VMTreeBanner.png",
      iconImage: "assets/img/projects/VMTreeLogo.png",
      primaryUrl: "https://devpost.com/software/chainlink-vmt",
      backupUrl: "",
      socials: [{ platform: "github", url: "https://github.com/vmtree/hackathon" }],
      details:
        "VMTree (Verifiable Merkle Trees) is a cryptographic infrastructure project focused on making verifiable Merkle tree computation significantly cheaper and more accessible on-chain. The key challenge it addresses is that many privacy-preserving protocols rely on tree updates and proofs that can become expensive at scale, limiting practical adoption. VMTree explores a design that preserves strong verifiability while reducing cost overhead, so systems with frequent proof updates remain usable in real conditions. The work was recognized with first place in the Chainlink 2022 Spring Hackathon and originally targeted use cases where gas efficiency is critical, including mixer-adjacent transaction architectures.",
      detailMedia: [
        {
          type: "youtube",
          url: "http://youtube.com/watch?v=FZeOU83Ktj8",
          title: "VMTree demo video",
          position: "afterDetails"
        }
      ],
      pitchDeckUrl: "https://docs.google.com/presentation/d/1gmMZ0jC1DkASpNe6DBnDwfiBeU9EtA3TwrCVyg4bCvI/edit?usp=sharing",
      awardLabel: "Hackathon Winner"
    },
    {
      slug: "verifi",
      title: "Verifi",
      status: "concept",
      date: "May 2025",
      oneLiner: "Private proof-of-personhood through social graph attestations.",
      bannerImage: "assets/img/projects/VeriFiBanner.png",
      iconImage: "assets/img/projects/VerifiLogo.png",
      primaryUrl: "",
      backupUrl: "",
      socials: [],
      details:
        "Verifi is a concept-stage proof-of-personhood protocol designed to improve Sybil resistance without sacrificing anonymity. Instead of relying on biometric scans or centralized identity providers, the model explores whether trust can be inferred from social graph structure and human attestations. The goal is to help applications distinguish genuine participants from coordinated bot clusters while minimizing surveillance risk and sensitive data exposure. Presented at the Avalanche hackathon in London, the project received an honorable mention and served as an early exploration of privacy-first identity primitives for open networks.",
      detailMedia: [
        {
          src: "assets/img/projects/Verifidescription.png",
          alt: "Verifi project description visual",
          style: "plain",
          position: "afterDetails",
          size: "full"
        }
      ],
      pitchDeckUrl: "https://docs.google.com/presentation/d/1hdKWHBSDGJZvDphs_ZfcQ2Z9Oy19pvyhiRYJQ1yRSpc/edit?usp=sharing",
      awardLabel: "Hackathon Winner"
    },
    {
      slug: "wattwitness",
      title: "WattWitness",
      status: "prototype",
      date: "June 2025",
      oneLiner: "DePIN meter protocol for source-signed energy data.",
      bannerImage: "assets/img/projects/WattWitnessBanner.png",
      iconImage: "assets/img/projects/WattWitnessLogo.png",
      primaryUrl: "https://wattwitness.com/",
      backupUrl: "https://wattwitness-9a252.web.app/",
      socials: [
        { platform: "github", url: "https://github.com/novaheic/WattWitness" },
        { platform: "devfolio", url: "https://devfolio.co/projects/wattwitness-edcf" }
      ],
      details:
        "WattWitness is a full-stack DePIN prototype for trust-minimized electricity metering, built from hardware to protocol layer. The system signs meter readings directly at the source and anchors those signed values on-chain, producing a tamper-evident data trail from physical measurement to digital settlement. I built the complete prototype myself, including hardware integration, firmware logic, and the software pipeline for verification and submission. The initial target use case is tokenized solar infrastructure in low-trust environments, where data provenance is critical, but the same architecture can be extended to broader metering scenarios across energy markets.",
      detailMedia: [
        {
          src: "assets/img/projects/ww1.png",
          alt: "WattWitness dashboard screenshot",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/ww2.png",
          alt: "WattWitness system architecture diagram",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/ww3.png",
          alt: "WattWitness terminal log screenshot",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/ww4.png",
          alt: "WattWitness hardware setup photo",
          position: "afterDetails"
        }
      ],
      pitchDeckUrl: "https://docs.google.com/presentation/d/1LWEtLDqjSMb9f8uNjty5PHsp47X7oH_tyb2PZdxwPZY/edit?usp=sharing",
      awardLabel: "Pitch Winner"
    },
    {
      slug: "handoff",
      title: "HandOff",
      status: "prototype",
      date: "April 2026",
      oneLiner: "Ethereum escrow for in-person marketplace trades.",
      bannerImage: "assets/img/projects/HandOffBanner.png",
      iconImage: "assets/img/projects/HandOffLogo.png",
      primaryUrl: "https://hand-off.xyz/",
      backupUrl: "https://admirable-bubblegum-d5ad00.netlify.app/",
      socials: [{ platform: "ethglobal", url: "https://ethglobal.com/showcase/handoff-h1a8i" }],
      details:
        "HandOff is an Ethereum-based escrow service designed for private, cashless, in-person transactions between marketplace users. Before meeting, buyer and seller agree on terms and the seller deploys an escrow contract; the buyer deposits funds and receives a four-digit unlock code tied to release logic. At handoff, the buyer shares the code and the seller receives payment, creating a simple cryptographic settlement flow without requiring trust in the counterparty. The project was built during ETHGlobal Cannes and remains deployed as a testable prototype demonstrating how smart contracts can reduce fraud risk in peer-to-peer commerce.",
      detailMedia: [
        {
          src: "assets/img/projects/HandOff Pitch.png",
          alt: "HandOff solution overview slide",
          style: "plain",
          position: "afterDetails",
          size: "full"
        },
        {
          src: "assets/img/projects/handoff_preview.png",
          alt: "HandOff mobile claim funds screen",
          style: "plain",
          position: "afterDetails",
          size: "70"
        }
      ],
      pitchDeckUrl: "https://docs.google.com/presentation/d/1Ve8Q_iU3Z9aLCwngme4CbYakWN4Z0WBDrh227vDhtfU/edit?usp=sharing"
    },
    {
      slug: "finzen",
      title: "Finzen",
      status: "live",
      date: "2024-Current",
      oneLiner: "Encrypted finance dashboard for budgets, portfolios, and net worth.",
      bannerImage: "assets/img/projects/FinzenBanner.png",
      iconImage: "assets/img/projects/FinzenLogo.png",
      primaryUrl: "https://finzen.org/",
      backupUrl: "",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/company/finzen-org" },
        { platform: "instagram", url: "https://www.instagram.com/finzen.app/" },
        { platform: "email", url: "mailto:hi@finzen.org" }
      ],
      details:
        "Finzen is a privacy-first personal finance platform built as a manual all-in-one command center for money management. It starts with envelope budgeting principles inspired by YNAB, then extends into broader financial visibility by combining cash flow tracking, portfolio monitoring, and real-time net worth calculation in a single workflow. The portfolio layer supports multiple asset classes, including crypto, exchange-listed products, physical commodities, and foreign exchange positions, so users can understand their financial state holistically rather than account by account. The product emphasizes rich visual reporting to make trends intuitive at a glance, while strong encryption and EU hosting ensure that control over financial data remains with the user.",
      detailMedia: [
        {
          src: "assets/img/projects/finzen_portfolio.png",
          alt: "Finzen multi-asset portfolio dashboard",
          style: "plain",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/finzen_sankey.PNG",
          alt: "Finzen sankey-style cash flow visualization",
          style: "plain",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/Finzen_Month.PNG",
          alt: "Finzen monthly dashboard view",
          style: "plain",
          position: "afterDetails"
        }
      ],
      pitchDeckUrl: "https://docs.google.com/presentation/d/1sPHEK7LnIJkDgmvDU8yunMv5_8k3DfwQnrHwoGKRZ14/edit?usp=sharing",
      awardLabel: "300+ Users",
      awardEmoji: "👥",
      awardVariant: "users"
    },
    {
      slug: "beside",
      title: "BESIDE",
      status: "live",
      date: "2022-2024",
      oneLiner: "EU blockchain learning platform for classrooms and self-study.",
      bannerImage: "assets/img/projects/BESIDEBanner.png",
      iconImage: "assets/img/projects/BESIDELogo.png",
      primaryUrl: "https://besideproject.eu/",
      backupUrl: "",
      socials: [
        { platform: "linkedin", url: "https://www.linkedin.com/company/besideproject" },
        { platform: "email", url: "mailto:info@besideproject.eu" }
      ],
      details:
        "BESIDE is an Erasmus+ project co-funded by the European Union that delivers an open learning platform focused on blockchain and digital finance fundamentals. The program includes structured educational modules, slide decks, and quizzes that can be used both in guided classroom settings and in individual self-paced learning. The objective is to make technically complex topics understandable without removing practical depth, especially for vocational training contexts. My role centered on the educational core: designing the course structure, writing the content, building the slide material, and creating the assessment questions across the curriculum.",
      detailMedia: [
        {
          src: "assets/img/projects/besidecourse.png",
          alt: "BESIDE course preview",
          style: "plain",
          position: "afterDetails",
          size: "full"
        }
      ],
      pitchDeckUrl: ""
    },
    {
      slug: "ethergy",
      title: "Ethergy",
      status: "concept",
      date: "2021-2022",
      oneLiner: "Browser MMO concept with burn-on-destruction NFT ships.",
      bannerImage: "assets/img/projects/EthergyBanner.png",
      iconImage: "assets/img/projects/EthergyLogo.png",
      primaryUrl: "https://ethergy-809c8.web.app/",
      backupUrl: "",
      socials: [],
      details:
        "Ethergy is a game-economy concept for a simple top-down browser MMO inspired by the accessibility of .io-style multiplayer games. Players would control spaceship NFTs that can gather resources, trade, and fight in an open persistent world with low onboarding friction. The core economic mechanic is permanent destruction: when a ship is lost in battle, the NFT is burned, introducing hard scarcity and creating meaningful strategic risk around every encounter. Although the project stayed at concept and internal prototype stage, it explored how blockchain ownership mechanics can produce deeper emergent economies without requiring complex gameplay systems.",
      detailMedia: [
        {
          src: "assets/img/projects/ethergy1.png",
          alt: "Ethergy UI and UX screens",
          position: "afterDetails"
        },
        {
          src: "assets/img/projects/ethergy2.png",
          alt: "Ethergy concept art collection",
          position: "afterDetails"
        }
      ],
      pitchDeckUrl:
        "https://docs.google.com/presentation/d/1BQ7ADP4PHrPO6prGa7Y9mrX0KNpCDjh5/edit?usp=sharing&ouid=118231690839178158141&rtpof=true&sd=true"
    },
    {
      slug: "liquid-rainforests",
      title: "Liquid Rainforests",
      status: "concept",
      date: "2022-2023",
      oneLiner: "ReFi concept for verifiable microalgae carbon removal credits.",
      bannerImage: "assets/img/projects/LiquidRainforestsBanner.png",
      iconImage: "assets/img/projects/LiquidRainforestsLogo.png",
      primaryUrl: "https://www.linkedin.com/company/liquid-rainforests/",
      backupUrl: "",
      hidePrimary: true,
      socials: [{ platform: "linkedin", url: "https://www.linkedin.com/company/liquid-rainforests/" }],
      details:
        "Liquid Rainforests is a regenerative finance concept exploring how crypto-economic coordination could fund climate-positive infrastructure at scale. The thesis centered on microalgae-based carbon capture and the issuance of on-chain credits tied to measurable CO2 removal outcomes rather than softer reduction narratives. By focusing on removal credits, the model aimed to raise quality standards in carbon markets and improve trust in underlying climate claims through stronger verification. The project remained in the idea phase, but it outlined a direction for combining transparent token systems with high-integrity environmental outcomes.",
      pitchDeckUrl: "https://docs.google.com/presentation/d/1XwNxwtZFzrjOII098gy3OPgHmLJpfl4LPlZYRS_-IdY/edit?usp=sharing"
    }
  ],
  publications: [
    {
      title: "Missing Links: Current Trends and Future Potential in the Application of Blockchain Oracles",
      date: "2024",
      venue: "Preprint",
      oneLiner: "Reviews current blockchain oracle applications and maps where oracle infrastructure can create future impact.",
      primaryUrl: "https://www.preprints.org/manuscript/202405.0218"
    },
    {
      title: "The Carbon Emissions of Bitcoin From an Investor Perspective",
      date: "2021",
      venue: "Research Paper",
      oneLiner: "Analyzes Bitcoin-related emissions through an investor lens and sustainability framing.",
      primaryUrl: "https://drive.google.com/file/d/1AfCeC5S6m9rFbofIJWQnA57eNRbb1eMJ/view"
    }
  ],
  articles: [
    {
      title: "The Future of AI in Finance: 4 Key Trends to Watch",
      date: "December 2025",
      venue: "Frankfurt School Blog",
      oneLiner: "Outlines four AI trends likely to shape financial services strategy and operations.",
      primaryUrl: "https://blog.frankfurt-school.de/the-future-of-ai-in-finance-4-key-trends-to-watch/"
    },
    {
      title: "From Blockchain to AI: Key Technologies",
      date: "March 2025",
      venue: "Frankfurt School Blog",
      oneLiner: "Explores how blockchain and AI are converging to reshape modern financial infrastructure.",
      primaryUrl: "https://blog.frankfurt-school.de/from-blockchain-to-ai-key-technologies-shaping-the-financial-industry/"
    },
    {
      title: "5 Practical Use Cases of AI in Financial Services",
      date: "January 2025",
      venue: "Frankfurt School Blog",
      oneLiner: "Practical overview of AI applications in lending, fraud, compliance, investing, and customer service.",
      primaryUrl: "https://blog.frankfurt-school.de/5-practical-use-cases-of-ai-in-financial-services/"
    },
    {
      title: "The Rise of Decentralized Finance (DeFi): What It Means for Personal Finance",
      date: "December 2024",
      venue: "Finzen Blog",
      oneLiner: "Surveys DeFi’s growth and what decentralized tools mean for everyday personal finance.",
      primaryUrl: "https://finzen.org/blog/rise-of-decentralized-finance-defi/"
    },
    {
      title: "Blockchain Beyond Speculation: The Real Impact of Decentralized Systems",
      date: "July 2024",
      venue: "Frankfurt School Blog",
      oneLiner: "Highlights practical decentralized-system applications beyond market speculation.",
      primaryUrl: "http://blog.frankfurt-school.de/blockchain-beyond-speculation-the-real-impact-of-decentralized-systems/"
    },
    {
      title: "How blockchain technology can change politics",
      date: "March 2022",
      venue: "Frankfurt School Blog",
      oneLiner: "Examines political-system implications and civic use cases of blockchain technology.",
      primaryUrl: "https://blog.frankfurt-school.de/how-blockchain-technology-can-change-politics/"
    },
    {
      title: "The Hitchhiker's guide to the blockchain article",
      date: "October 9, 2022",
      venue: "Medium",
      oneLiner: "A curated blockchain resource guide for learning paths and practical exploration.",
      primaryUrl: "https://medium.com/@cedricheidt/the-hitchhikers-guide-to-the-blockchain-a-collection-of-resources-e633a4e81a32"
    }
  ]
};
