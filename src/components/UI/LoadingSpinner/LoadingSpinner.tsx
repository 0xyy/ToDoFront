import { TailSpin } from 'react-loader-spinner';

import styles from './LoadingSpinner.module.css';

export const LoadingSpinner = () => {
    return (
        <div className={styles.loadingSpinner}>
            <TailSpin
                height="80"
                width="80"
                color="#007f5f"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};