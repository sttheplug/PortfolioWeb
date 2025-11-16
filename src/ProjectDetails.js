import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { projects } from "./data/projects";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { icons } from "./data/icons"
import "./Projects.css";

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55));
  border: 1px solid rgba(0,180,255,0.4);
  box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(0,180,255,0.25);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    145deg,
    rgba(0,180,255,0.15),
    rgba(0,255,255,0.12),
    rgba(0,94,255,0.08)
  );
  opacity: 0.25;
  pointer-events: none;
  z-index: 2;   /* above card bg, below image */

  ${CardContainer}:hover & {
    opacity: 0.6;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;   /* slightly smaller than card radius */
  margin: 1rem;             /* allows card background to show around edges */
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 0.75rem;   /* match ImgContainer */
  transition: transform 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;



const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

// --- Styled Components ---
const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 2%;
  position: relative;
  background: url(${process.env.PUBLIC_URL + "/blue2.jpg"}) no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(3,0,20,0.55);
  backdrop-filter: blur(12px);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  z-index: 1;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${slideInLeft} 0.7s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #74eaff, #a29bff, #ff9bff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #d6eaff;
  line-height: 1.6;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const StatCard = styled.div`
  flex: 1;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    border-color: rgba(0,200,255,0.4);
    box-shadow: 0 0 20px rgba(0,200,255,0.2);
  }
`;

const StatNumber = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  color: ${props => props.color || "#74eaff"};
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #aaa;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.05);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
  &:hover {
    background: rgba(0,200,255,0.1);
  }
  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: linear-gradient(90deg, #74eaff, #a29bff);
    border-radius: 50%;
  }
`;

const ImageColumn = styled.div`
  animation: ${slideInRight} 0.7s ease-out;
`;


const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 0.75rem;
  color: #9eeaff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: rgba(0,200,255,0.12);
    border-color: rgba(0,200,255,0.4);
    transform: translateX(-2px);
  }
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  background: rgba(0,200,255,0.1);
  border: 1px solid rgba(0,200,255,0.3);
  color: #b8faff;
  font-weight: 500;
  font-size: 1rem;          /* ensure same font size */
  line-height: 1.5;         /* consistent line-height */
  text-decoration: none;
  cursor: pointer;           /* needed for buttons */
  appearance: none;          /* reset default button styles */
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: all 0.3s;

  &:hover {
    background: rgba(0,200,255,0.2);
    border-color: rgba(0,200,255,0.55);
    transform: scale(1.05);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);       /* slightly transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(5px);        
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55));
  border: 1px solid rgba(0,180,255,0.4);
  border-radius: 1rem;
  box-shadow: 0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(0,180,255,0.25);
  backdrop-filter: blur(10px);
  padding: 2rem;
  color: #fff;
  
  width: 80%;
  max-width: 900px;
  min-width: 300px;      
  
  max-height: 90vh;
  overflow-y: auto;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    width: 90%;
    min-width: 250px;  
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;         
    min-width: 200px;   
    padding: 1rem;      
  }
`;



const CloseButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.5rem 1.2rem;
  background: rgba(0,200,255,0.1);
  border: 1px solid rgba(0,200,255,0.4);
  border-radius: 0.75rem;
  color: #b8faff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,200,255,0.2);
    border-color: rgba(0,200,255,0.55);
    transform: scale(1.05);
  }
`;

const TechStackTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  background: linear-gradient(to right,#00b4ff,#00ffff,#005eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [showTechModal, setShowTechModal] = useState(false); 

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  useEffect(() => {
    window.scrollTo(0,0);
    const selected = projects.find(p => p.id === parseInt(id));
    setProject(selected);
  }, [id]);
  if (!project) {
    return (
      <PageWrapper>
        <Overlay />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff" }}>
          <h1>Project Not Found</h1>
          <BackButton onClick={() => navigate("/")}>
            <ArrowLeft /> Back to Projects
          </BackButton>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Overlay />
      <div style={{ position: "relative", zIndex: 1 }}>
        <BackButton onClick={handleBack}>
          <ArrowLeft /> Back to Projects
        </BackButton>
        <Content>
          <TextColumn>
            <Title>{project.title}</Title>
            <Description>{project.fulldescription}</Description>
            <StatsRow>
              <StatCard>
                <StatNumber color="#74eaff">{project.TechStack?.length || 0}</StatNumber>
                <StatLabel>Technologies Used</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber color="#a29bff">{project.Features?.length || 0}</StatNumber>
                <StatLabel>Key Features</StatLabel>
              </StatCard>
            </StatsRow>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {project.link && (
            <LinkButton href={project.link} target="_blank">
                Github Repo <ExternalLink />
            </LinkButton>
            )}
            {project.TechStack && project.TechStack.length > 0 && (
            <LinkButton as="button" onClick={() => setShowTechModal(true)}>
                View Techstack
            </LinkButton>
            )}
            </div>
            <h3 style={{ marginTop: "2rem", color: "#fff", fontWeight: 600 }}>Key Features</h3>
            <FeatureList>
              {project.Features?.map((f, idx) => (
                <FeatureItem key={idx}>{f}</FeatureItem>
              ))}
            </FeatureList>
          </TextColumn>
          <ImageColumn>
            <CardContainer>
              <GradientOverlay /> 
              <ImgContainer>
                <Img src={project.Img} alt={project.title} />
              </ImgContainer>
            </CardContainer>
          </ImageColumn>
        </Content>
        {/* TechStack Modal */}
        {showTechModal && (
        <ModalOverlay onClick={() => setShowTechModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <TechStackTitle>Tech Stack</TechStackTitle>
                <div className="techstack-grid">
                {project.TechStack.map((tech, idx) => (
                    <div className="techstack-icon" key={idx}>
                    <div className="icon-wrapper">
                        <img src={icons[tech]} alt={`${tech} icon`} />
                    </div>
                    <span>{tech}</span>
                    </div>
                ))}
                </div>
                <CloseButton onClick={() => setShowTechModal(false)} className="mt-6">
                Close
                </CloseButton>
            </ModalContent>
            </ModalOverlay>
        )}
      </div>
    </PageWrapper>
  );
}
