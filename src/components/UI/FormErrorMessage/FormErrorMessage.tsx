import styles from './FormErrorMessage.module.css';

interface Props {
    message: string;
}

export const FormErrorMessage = ({ message }: Props) => {
    return <span className={styles.errorMessage}>{message}</span>;
};