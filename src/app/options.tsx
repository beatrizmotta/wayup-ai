"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { create } from "zustand";
import clsx from "clsx";

interface option {
    title: string;
    question: string;
}

interface OptionState {
    selectedOption: option;
    setSelectedOption: (option: option) => void;
}

const removeAccents = (string: string): string => {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const problemOptions: { [key: string]: option } = {
    problema: {
        title: "Problema",
        question: "Qual o problema/dor?",
    },
    ideia: {
        title: "Ideia",
        question: "Qual ideia você tem?",
    },
    hipotese: {
        title: "Hipótese",
        question: "Qual é a sua hipótese?",
    },
};

const useOptionStore = create<OptionState>((set) => ({
    selectedOption: problemOptions.problema,
    setSelectedOption: (option: option) => set({ selectedOption: option }),
}));

const SelectorButton = (props: { children: string }) => {
    const { children } = props;
    const title = children;
    const { selectedOption, setSelectedOption } = useOptionStore();
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(title === selectedOption.title);
    }, [selectedOption]);

    return (
        <Button
            className={clsx(
                "rounded-2xl w-28",
                isSelected ? "bg-blue-600 text-white-50" : "bg-grey-500 text-grey-850"
            )}
            onClick={() => {
                setSelectedOption(problemOptions[removeAccents(title.toLowerCase())]);
            }}
        >
            {title}
        </Button>
    );
};

export default function Options() {
    const { selectedOption } = useOptionStore();

    return (
        <div className="bg-grey-500 p-1 rounded-2xl">
            {Object.keys(problemOptions).map((key) => (
                <SelectorButton key={key}>{problemOptions[key].title}</SelectorButton>
            ))}
        </div>
    );
}

export { useOptionStore, problemOptions };
