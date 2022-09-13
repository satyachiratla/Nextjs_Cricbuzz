import classes from "../Cricket/Cricnews.module.css";

const Cricnews = () => {
  return (
    <div className={classes.cricnews}>
      <div>
        <h1>Latest Cric news</h1>
      </div>
      <div className={classes.content}>
        <ul>
          <li>
            <h3>
              Rohit Sharma appointed as all time Captain for team India...
            </h3>
          </li>
          <li>
            {" "}
            <h3>
              BCCI announces increase in monthly pensions of former cricketers,
              umpires
            </h3>
            <p>
              BCCI President, Mr Sourav Ganguly, said: “It is extremely
              important that the financial well-being of our former cricketers
              is taken care of. The players remain the lifeline and as a Board,
              it is our duty to be by their side once their playing days are
              over. The umpires have been unsung heroes and the BCCI truly
              values their contribution.”
            </p>
          </li>
          <li>
            <h3>
              BCCI announces the successful bidders for acquiring the Media
              Rights for the Indian Premier League Seasons 2023-2027
            </h3>
            <p>
              The Governing Council of the TATA Indian Premier League (“TATA
              IPL”) had issued an Invitation to Tender (“ITT”) for Media Rights
              to the Indian Premier League Seasons 2023 – 2027. As part of the
              process, an e-auction was conducted from June 12, 2022, to June
              14, 2022, wherein all eligible bidders were permitted to
              participate to determine the successful bidders for the Media
              Rights.
            </p>
            <p>Chairman, IPL Governing Council, Mr Brijesh Patel said: “It gives me immense pleasure to welcome the winners to the IPL family and I also thank all the bidders for showing their interest to be part of the growth story that this League has been writing every year. This faith of India Inc. in Brand IPL also testifies that they see value in investing in the property which has only seen growth in all directions.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cricnews;
