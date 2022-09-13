import Head from "next/head";
import Launchpage from "../components/Cricket/Launchpage";

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Vivek's Cricbuzzz</title>
        <meta name="description" content="Get the ICC events 2022 Scorecard, Schedules of International matches along with Latest News and ICC Cricket ..." />
      </Head>
        <Launchpage />
    </div>
  );
};

export default Homepage;
