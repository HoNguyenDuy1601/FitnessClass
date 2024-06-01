import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faEye, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import styles from './table-action.module.scss';

interface TableActionProps {
    onViewClick?: () => void;
    onEditClick?: () => void;
    onDeleteClick?: () => void;
    onCreateSellPackage?: () => void;
}

const TableActionPackage: FC<TableActionProps> = ({ onEditClick, onDeleteClick, onCreateSellPackage, onViewClick }) => {
    return (
        <div className={styles.container}>
            {onViewClick && (
                <>
                    <FontAwesomeIcon icon={faEye} className={styles.edit} onClick={onViewClick} />
                    <span>|</span>
                </>
            )}
            {onEditClick && (
                <>
                    <FontAwesomeIcon icon={faPenToSquare} className={styles.edit} onClick={onEditClick} />
                    <span>|</span>
                </>
            )
            }
            <FontAwesomeIcon icon={faTrashCan} className={styles.delete} onClick={onDeleteClick} />
            {onCreateSellPackage && (
                <>
                    <span>|</span>
                    <FontAwesomeIcon icon={faSquarePlus} className={styles.view} onClick={onCreateSellPackage} />
                </>
            )}

        </div>
    );
};

export default TableActionPackage;