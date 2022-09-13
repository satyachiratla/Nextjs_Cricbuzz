import Head from "next/head";
import Matches from "../../components/Cricket/Matches/Matches";
// import { getAsiaMatches, getWorldMatches } from "../../helpers/api-util";
import { getAsiaMatches } from "../../asia_matches";
import { getWorldMatches } from "../../world_matches";

const Matchespage = (props) => {

    return (
        <div>
            <Head>
                <title>ICC Events</title>
                <meta name="description" content="Get the ICC events 2022 Scorecard, Schedules of International matches along with Latest News and ICC Cricket ..." />
            </Head>
            <Matches asiaEvents={props.asia} worldEvents={props.world} />
        </div>
    )
}

export async function getStaticProps() {
    const asiaMatches = await getAsiaMatches;
    const worldMatches = await getWorldMatches;

    return {
        props: {
            asia: asiaMatches,
            world: worldMatches
        },
        revalidate: 3600
    }
}

export default Matchespage;