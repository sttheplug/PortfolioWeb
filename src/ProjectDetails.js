import React from "react";
import { useParams, useNavigate, useLocation} from "react-router-dom";
import styled from "styled-components";
import { projects } from "./data/projects";
import { ExternalLink, ArrowLeft } from "lucide-react";

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0,180,255,0.3);
  color: #fff;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0.75rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right,#00b4ff,#00ffff,#005eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #e6f0ff;
`;

const LinksRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ExternalButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(0,180,255,0.15);
  color: #00d0ff;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(0,200,255,0.25);
    transform: scale(1.05);
  }
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #00d0ff;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.id === parseInt(id));

  const handleBack = () => {
    navigate("/", { state: { scrollTo: "projects" } });
  };
  React.useEffect(() => {
    if (location.state?.scrollTo) {
    const section = document.getElementById(location.state.scrollTo);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    }
}, [location.state]);
  if (!project) {
    return (
      <PageWrapper>
        <h1>Project Not Found</h1>
        <BackButton onClick={handleBack}>
        <ArrowLeft size={16} />
        Back to Projects
        </BackButton>
      </PageWrapper>
    );
  }

    const handleBackToProjects = () => {
    navigate("/");           // go to App
    setTimeout(() => {       // wait for render
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
    };

  return (
    <PageWrapper>
      <BackButton onClick={handleBackToProjects}>
        <ArrowLeft size={16} />
        Back to Projects
      </BackButton>

      <ProjectCard>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectImage src={project.Img} alt={project.title} />
        <ProjectDescription>{project.description}</ProjectDescription>

        <LinksRow>
          {project.link && (
            <ExternalButton
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <ExternalLink size={16} />
            </ExternalButton>
          )}
        </LinksRow>
      </ProjectCard>
    </PageWrapper>
  );
}
