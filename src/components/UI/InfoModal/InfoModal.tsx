interface Props {
    isError?: boolean;
    message: string;
    onClose: () => void,
    title: string;
}

export const InfoModal = ({}: Props) => {
    return <p>Info modal</p>;
};