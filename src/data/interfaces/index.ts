interface ValidationFormType {
    password: string;
}

interface PhotoMomentProps {
    index: number;
    showMoments: boolean;
    closeMoments: () => void;
}

export type {
    ValidationFormType,
    PhotoMomentProps
}