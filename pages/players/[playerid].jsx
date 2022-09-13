import PlayerDetails from "../../components/Cricket/Players/PlayerDetails";
// import { getAllPlayers, getPlayerById } from "../../helpers/api-util";
import { getPlayerById } from "../../helpers/api-util";
import { getAllPlayers } from "../../players";


const PlayerDetailsPage = (props) => {
  const { details } = props;

  return (
    <div>
      <PlayerDetails
        image={details.image}
        role={details.role}
        birthplace={details.birthplace}
        name={details.name}
        talent={details.talent}
        born={details.born}
      />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const playerId = params.playerid;

  const player = await getPlayerById(playerId);

  if (!player) {
    return { notFound: true }
  }
  
  return {
    props: {
      details: player,
    },
    revalidate: 1800
  };
}

export async function getStaticPaths() {
  const data = await getAllPlayers;
  const ids = data.map(data => data.id);
  const pathsWithParams = ids.map(id => ({ params: { playerid: id }}))

  return {
    paths: pathsWithParams,
    fallback: false,
  }
}

export default PlayerDetailsPage;
