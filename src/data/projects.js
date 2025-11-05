import nback from "../assets/projects/nbackgame.jpg";
import journalsystem from "../assets/projects/journalsystem.jpg";
import auction from "../assets/projects/auctionplatform.jpg";
import grafana from "../assets/projects/grafana.png";
import sportpulseweb from "../assets/projects/sportpulse.jpg";
import portfolio from "../assets/projects/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "N-Back",
    description: "A cognitive training game that boosts memory and focus.",
    fulldescription: "The N-Back game is a cognitive training exercise designed to enhance memory and attention. Players must identify whether the current item matches the one shown 'n' steps earlier. With visual, auditory, and combined modes, the game challenges users to recall patterns under time constraints, promoting focus, mental agility, and cognitive growth.",
    link: "https://github.com/sttheplug/N-Back",
    Img: nback,
    TechStack: ["C", "C++", "CMake", "Kotlin", "Gradle"],
    Features: [
      "Customizable memory level",
      "Score tracking and history",
      "Visual and auditory feedback modes",
      "Cross-platform support",
    ],
  },
  {
    id: 2,
    title: "JournalSystem",
    description: "A full-stack journaling app with Spring Boot and React.",
    fulldescription: "The Journal System is a full-stack web application for managing journal entries, users, and roles. Built with a Java Spring Boot backend and a React frontend, it offers secure authentication and role-based access, allowing users to create, edit, and view journal entries safely. Features include a rich text editor, responsive design for mobile devices, and containerized deployment using Docker, making it easy to run and scale.",
    link: "https://github.com/sttheplug/JournalSystem",
    Img: journalsystem,
    TechStack: ["React", "Spring Boot", "Java", "Maven", "Docker", "MySQL", "CSS", "HTML", "JavaScript"],
    Features: [
      "User authentication and role-based access",
      "Create, edit, and delete journal entries",
      "Rich text editor",
      "Responsive and mobile-friendly",
      "Containerized deployment with Docker",
    ],
  },
  {
    id: 3,
    title: "AuctionPlatform",
    description: "An ASP.NET Core MVC app for online auctions, built on Entity Framework.",
    fulldescription: "AuctionPlatform is an ASP.NET Core 8 MVC application for online auctions. It allows users to register, create and manage auctions, place bids, and track winners, while providing admin tools for managing users and auctions. Built with a three-layer architecture, it uses Entity Framework Core for data access and Identity for secure authentication, ensuring safe and user-specific handling. Additional features include real-time bidding updates and email notifications for winning bids.",
    link: "https://github.com/sttheplug/AuctionPlatform",
    Img: auction,
    TechStack: ["ASP.NET Core",
    "C#",
    "Entity Framework Core",
    "MySQL",
    "Razor (CSHTML)",
    "Bootstrap",
    "Identity"],
    Features: [
      "User registration and authentication with Identity",
      "Create and manage auctions",
      "Live bidding system with real-time updates",
      "Admin dashboard for managing users and auctions",
      "Email notifications for winning bids"
    ],
  },
  {
    id: 4,
    title: "CrateFlow",
    description: "A SpringBoot microservice monitor using Micrometer, InfluxDB, and Grafana.",
    fulldescription: "CrateFlow is a backend solution for monitoring Java Spring Boot microservices, particularly in e-commerce applications. It leverages Micrometer, InfluxDB, and Grafana to track both DevOps metrics like latency and errors, and business metrics such as profit, sales, and inventory. Built with Spring Boot and Kubernetes, it provides real-time insights, customizable dashboards, and alerting to optimize performance, support decision-making, and ensure reliable operations across multiple services and environments.",
    link: "https://github.com/sttheplug/CrateFlow",
    Img: grafana,
    TechStack: ["Spring Boot", "Micrometer", "Maven", "InfluxDB", "Grafana", "Java", "Docker", "Kubernetes"],
    Features: [
      "Real-time monitoring of microservices",
      "Customizable dashboards in Grafana",
      "Alerting on high latency, errors, or system metrics",
      "Historical metrics storage in InfluxDB",
      "Scalable architecture with Kubernetes and Docker",
      "Integration with CI/CD workflows",
      "Detailed API performance measurement using Micrometer",
      "Support for multiple services and environments"
    ],
  },
  {
    id: 5,
    title: "SportPulseWeb",
    description: "A web app for real-time sports performance using Polar Verity Sense data.",
    fulldescription: "SportPulseWeb is a web application for real-time tracking of Polar Verity Sense data, including heart rate and motion metrics. It provides athletes and fitness enthusiasts with a cost-effective solution for sports performance analysis, featuring a user-friendly interface, stable data transmission, and real-time visualizations. The app supports multiple sensors simultaneously, allows data export for historical analysis, and offers a responsive design optimized for different devices.",
    link: "https://github.com/sttheplug/SportPulseWeb",
    Img: sportpulseweb,
    TechStack: ["React", "Node.js + Express", "MySQL", "Web Bluetooth API","JavaScript","HTML","CSS", "Chart.js"],
    Features: [
      "Live heart rate and IMU data tracking",
      "Handles multiple sensors simultaneously",
      "Real-time visualization of sensor data",
      "Data export for historical analysis",
      "Responsive web interface for different devices"
    ],
  },
  {
    id: 6,
    title: "PortfolioWeb",
    description: "A responsive React portfolio showcasing my projects, skills, and GitHub work with a modern design.",
    fulldescription: "PortfolioWeb is a responsive web application built with React and Tailwind CSS to showcase my projects, skills, and GitHub contributions. It features smooth scrolling navigation, animated components, and gradient effects to create a modern, interactive user experience. Designed with responsiveness in mind, it works seamlessly across devices and screen sizes, providing visitors with an engaging overview of my work and technical expertise.",
    link: "https://github.com/sttheplug/PortfolioWeb",
    Img: portfolio,
    TechStack: ["React", "HTML", "JavaScript", "CSS", "Tailwind"],
    Features: [
      "Showcase of projects and skills",
      "Smooth scrolling navigation",
      "Responsive design",
      "Animated components and gradient effects",
    ],
  },
];
