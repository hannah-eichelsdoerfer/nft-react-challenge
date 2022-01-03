import { StyledCollection } from "../styles/StyledCollection";
import Card from "./Card";

const NFTs = ({ collectionData }: { collectionData: any }) => {
  return (
    <StyledCollection>
      {collectionData.map((nft: any) => (
        <Card
          key={nft.token_id}
          id={nft.token_id}
          name={nft.name}
          traits={nft.traits}
          image={nft.image_original_url}
        />
      ))}
    </StyledCollection>
  );
};

export default NFTs;
