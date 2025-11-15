import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.55));
  border: 1px solid rgba(0,180,255,0.4);
  box-shadow: 0 15px 40px rgba(0,0,0,0.6),
              0 0 25px rgba(0,180,255,0.25);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(0,200,255,0.7);
    box-shadow: 0 0 35px rgba(0,180,255,0.5);
    transform: translateY(-4px);
  }
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
  transition: opacity 0.4s ease;
  pointer-events: none;

  ${CardContainer}:hover & {
    opacity: 0.6;
  }
`;

const CardContent = styled.div`
  position: relative;
  padding: 1.5rem;
  z-index: 10;
`;

const ImgContainer = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0.75rem;
  background: linear-gradient(to right,#00b4ff,#00ffff,#005eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: rgba(230,240,255,0.8);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-top: 0.75rem;
`;

const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
`;

const LiveDemo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d0ff;
  font-weight: 500;
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: #66e3ff;
  }
`;

const DetailsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.9);
  font-weight: 500;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0,200,255,0.15);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0,200,255,0.5);
  }
`;

const CardProject = ({ Img: imageSrc, Title: titleText, Description: desc, Link: ProjectLink, id }) => {
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
      alert('Live demo link is not available');
    }
  };

  return (
    <CardWrapper>
      <CardContainer>
        <GradientOverlay />
        <CardContent>
          <ImgContainer>
            <Img src={imageSrc} alt={titleText} />
          </ImgContainer>

          <Title>{titleText}</Title>
          <Description>{desc}</Description>

          <LinksRow>
            {ProjectLink ? (
              <LiveDemo
                href={ProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveDemo}
              >
                Github Repo <ExternalLink size={16} />
              </LiveDemo>
            ) : (
              <span style={{ color:'#475569', fontSize:'0.875rem' }}>Demo Not Available</span>
            )}

            {id ? (
              <DetailsButton 
                to={`/project/${id}`} 
                state={{ scrollTo: "projects" }}
              >
                Details <ArrowRight size={16} />
              </DetailsButton>
            ) : (
              <span style={{ color:'#475569', fontSize:'0.875rem' }}>Details Not Available</span>
            )}
          </LinksRow>
        </CardContent>
      </CardContainer>
    </CardWrapper>
  );
};

export default CardProject;
