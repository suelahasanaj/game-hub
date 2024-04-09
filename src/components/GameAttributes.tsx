import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefnitionItem from "./DefnitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefnitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefnitionItem>
      <DefnitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefnitionItem>
      <DefnitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefnitionItem>
      <DefnitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefnitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
