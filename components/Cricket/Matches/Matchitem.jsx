import Link from 'next/link';
import classes from './Matchitem.module.css';

const Matchitem = (props) => {

    const { id, match, type } = props;

    return (
        <li className={classes.list}>
            <Link href={{
                pathname: `matches/${type}/${id}`,
                query: { id: id }
            }}><a>{match}</a></Link>
        </li>
    )
}

export default Matchitem;