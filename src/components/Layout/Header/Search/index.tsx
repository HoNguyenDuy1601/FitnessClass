import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './search.module.scss';

const Search = () => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default Search;
