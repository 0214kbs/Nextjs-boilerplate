"use client";
import React from "react";
import { RadioProps } from "./Radio.type";
const RadioComponent = ({ id, value, name, label, onChange, ...props }: RadioProps) => {
    return (
        <div>
            <input
                type="radio"
                id={id.toString()}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label htmlFor={id.toString()}>{label}</label>
        </div>
    );
};

export default RadioComponent;
