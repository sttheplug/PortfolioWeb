import nback from "../assets/nbackgame.jpg";
import journalsystem from "../assets/journalsystem.jpg";
import auction from "../assets/auctionplatform.jpg";
import grafana from "../assets/grafana.png";
import sportpulseweb from "../assets/sportpulse.jpg";
import portfolio from "../assets/portfolio.png";

export const projects = [
  {
    id: 1,
    title: "N-Back",
    description: "A cognitive training game that boosts memory and focus.",
    link: "https://github.com/sttheplug/N-Back",
    Img: nback,
  },
  {
    id: 2,
    title: "JournalSystem",
    description: "A full-stack journaling app with Spring Boot and React.",
    link: "https://github.com/sttheplug/JournalSystem",
    Img: journalsystem,
  },
  {
    id: 3,
    title: "AuctionPlatform",
    description:
      "An ASP.NET Core MVC app for online auctions, built on Entity Framework.",
    link: "https://github.com/sttheplug/AuctionPlatform",
    Img: auction,
  },
  {
    id: 4,
    title: "CrateFlow",
    description:
      "A SpringBoot microservice monitor using Micrometer, InfluxDB, and Grafana.",
    link: "https://github.com/sttheplug/CrateFlow",
    Img: grafana,
  },
  {
    id: 5,
    title: "SportPulseWeb",
    description:
      "A web app for real-time sports performance using Polar Verity Sense data.",
    link: "https://github.com/sttheplug/SportPulseWeb",
    Img: sportpulseweb,
  },
  {
    id: 6,
    title: "PortfolioWeb",
    description:
      "A responsive React portfolio showcasing my projects, skills, and GitHub work with a modern design.",
    link: "https://github.com/sttheplug/PortfolioWeb",
    Img: portfolio,
  },
];
