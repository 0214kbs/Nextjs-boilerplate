interface RadioInterface {
    id: number;
    value: string;
    name: string;
    label: string;
}

type RadioProps = {
    id: number;
    value: string;
    name: string;
    label: string;
    onChange: () => void;
}