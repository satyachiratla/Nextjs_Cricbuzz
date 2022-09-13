import Head from "next/head";
// import { getWorldMatches, getWorldId } from "../../../helpers/api-util";
import { getWorldId } from "../../../helpers/api-util";
import { getWorldMatches } from "../../../world_matches";
import MatchDetail from "../../../components/Cricket/Scorecard/MatchDetail";
import CricketProvider from "../../../components/store/cricket-provider";

const MatchDetails = (props) => {

  const { worldEvents } = props;

  if (!worldEvents) {
    return <p>Loading...</p>;
  }

  const team1 = []
  for (const key in worldEvents.team1) {
    team1.push({
      id: key,
      name: worldEvents.team1[key].name
    })
  }

  const team2 = []
  for (const key in worldEvents.team2) {
    team2.push({
      id: key,
      name: worldEvents.team2[key].name
    })
  }

  return (
    <CricketProvider>
      <Head>
        <title>{worldEvents.match}</title>
        <meta name="description" content={worldEvents.description} />
      </Head>
      <MatchDetail
        match={worldEvents.match}
        t1={worldEvents.t1}
        t2={worldEvents.t2}
        team1={team1}
        team2={team2}
        description={worldEvents.description}
      />
    </CricketProvider>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const worldId = params.matchid;
  const world = await getWorldId(worldId);

  if (!world) {
    return { notFound: true }
  }

  return {
    props: {
      worldEvents: world
    },
    revalidate: 1800
  }
}

export async function getStaticPaths() {
  const data = await getWorldMatches;
  const ids = data.map(data => data.id);
  const pathsWithParams = ids.map(id => ({ params: { matchid: id }}))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default MatchDetails;
