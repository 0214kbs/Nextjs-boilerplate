"use client";
export interface RadioInterface {
    id: number;
    value: string;
    name: string;
    label: string;
}

export type RadioProps = {
    id: number;
    value: string;
    name: string;
    label: string;
    onChange: () => void;
}