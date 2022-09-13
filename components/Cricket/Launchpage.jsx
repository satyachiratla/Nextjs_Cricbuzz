
import Link from 'next/link';
import classes from '../Cricket/Launchpage.module.css';
import Cricnews from './Cricnews';

const Launchpage = () => {
    return (
        <div className={classes.launchpage}>
            <div className={classes.header}>
                <h1>Cricbuzz</h1>
            </div>
            <div className={classes.matches}>
                <Link href="/matches"><a>Matches</a></Link>
                <Link href="/players"><a>Playerslist</a></Link>
            </div>
            <div>
                <Cricnews />
            </div>
        </div>
    )
}

export default Launchpage