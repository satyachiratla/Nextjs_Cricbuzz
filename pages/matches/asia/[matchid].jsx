import Head from "next/head";
// import { getAsiaMatches, getAsiaId } from "../../../helpers/api-util";
import { getAsiaId } from "../../../helpers/api-util";
import { getAsiaMatches } from "../../../asia_matches";
import MatchDetail from "../../../components/Cricket/Scorecard/MatchDetail";
import CricketProvider from "../../../components/store/cricket-provider";

const MatchDetails = (props) => {

  const { asiaEvents } = props

  if (!asiaEvents) {
    return <p>Loading...</p>;
  }

  const team1 = []
  for (const key in asiaEvents.team1) {
    team1.push({
      id: key,
      name: asiaEvents.team1[key].name
    })
  }

  const team2 = []
  for (const key in asiaEvents.team2) {
    team2.push({
      id: key,
      name: asiaEvents.team2[key].name
    })
  }


  return (
    <CricketProvider>
      <Head>
        <title>{asiaEvents.match}</title>
        <meta name="description" content={asiaEvents.description} />
      </Head>
      <MatchDetail
        match={asiaEvents.match}
        t1={asiaEvents.t1}
        t2={asiaEvents.t2}
        team1={team1}
        team2={team2}
        description={asiaEvents.description}
      />
    </CricketProvider>
  );
};

export async function getStaticProps(context) {
  const { params } = context;

  const asiaId = params.matchid
  const asia = await getAsiaId(asiaId);

  if (!asia) {
    return { notFound: true }
  }

  return {
    props: {
      asiaEvents: asia
    },
    revalidate: 1800
  }
}

export async function getStaticPaths() {
  const data = await getAsiaMatches;

  const ids = data.map(data => data.id)
  const pathsWithParams = ids.map(id => ({ params: { matchid: id }}))

  return {
    paths: pathsWithParams,
    fallback: true,
  }
}

export default MatchDetails;
