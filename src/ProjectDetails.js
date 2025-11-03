import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  color: white;
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 180, 255, 0.4);
`;

export default function ProjectDetails() {
  const { id } = useParams();

  return (
    <PageWrapper>
      <h1>Project Details - {id}</h1>
      <p>More details about project {id} will go here.</p>

      <Link to="/" style={{ color: "#00d0ff" }}>
        ⬅ Back to Projects
      </Link>
    </PageWrapper>
  );
}
