import { FaEthereum } from "react-icons/fa";
import { StyledCard } from "../styles/StyledCard";

interface CardProps {
  id: number;
  name: string;
  traits: any;
  image: string;
}

const Card = ({ id, name, traits, image }: CardProps) => {
  return (
    <StyledCard>
      <img src={image} alt="" />
      <div className="details">
        <h3 id="name">{name}</h3>
        <p id="id">#{id}</p>
        <p id="price">
          <FaEthereum /> {traits[0]?.value}
        </p>
      </div>
    </StyledCard>
  );
};

export default Card;
