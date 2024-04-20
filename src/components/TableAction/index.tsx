import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import styles from './table-action.module.scss';

interface TableActionProps {
    onEditClick: () => void;
    onDeleteClick: () => void;
    onViewClick?: () => void;
}

const TableAction: FC<TableActionProps> = ({ onEditClick, onDeleteClick, onViewClick }) => {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={onEditClick} />
            <span>|</span>
            <FontAwesomeIcon icon={faTrashCan} className={styles.delete} onClick={onDeleteClick} />
            {onViewClick && (
                <>
                    <span>|</span>
                    <FontAwesomeIcon icon={faSquarePlus} className={styles.view} onClick={onViewClick} />
                </>
            )}
        </div>
    );
};

export default TableAction;
