import classes from "./Playerslist.module.css";
import Players from "./Players";

const Playerslist = (props) => {
  const playerslist = props.players.map((player) => {
    return <Players key={player.id} id={player.id} name={player.name} image={player.image} />;
  });

  return (
    <div className={classes.playerslist}>
      <div className={classes.header}>
        <h1>Players</h1>
      </div>
      <div className={classes.content}>
      {playerslist}
      </div>
    </div>
  );
};

export default Playerslist;
