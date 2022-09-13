import Head from "next/head";
import Playerslist from "../../components/Cricket/Players/Playerslist";
import { getAllPlayers } from "../../players";

const PlayerslistPage = (props) => {

    const { players } = props;

    return (
        <div>
            <Head>
                <title>Players</title>
            </Head>
            <Playerslist players={players} />
        </div>
    )
}

export async function getStaticProps() {
    const playerslist = await getAllPlayers;

    return {
        props: {
            players: playerslist
        },
        revalidate: 3600
    }
}

export default PlayerslistPage;