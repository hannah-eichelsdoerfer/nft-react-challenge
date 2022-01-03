import styled from "styled-components";

export const StyledCard = styled.header`
  background: #1a1c1e;
  border-radius: 2rem;
  overflow: hidden;
  min-width: 300px;
  margin-right: 30px;
  cursor: pointer;

  img {
    width: 100%;
  }

  .details {
    padding: 1.5rem;
  }

  #name {
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }

  #id {
    color: #a1a5b0;
  }

  #price {
    font-weight: 600;
    object-fit: contain;
    margin-top: 1rem;
    font-size: 1.2rem;
  }
`;
