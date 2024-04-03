import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genre } = useGenres();
  const { data: platform } = usePlatforms();
  const genreName = genre?.results.find((g) => g.id === gameQuery.genreId);
  const platformName = platform?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platformName?.name || ""} ${genreName?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
