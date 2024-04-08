"use client";

import { useState } from "react";
import { Button } from "./button"

type option = "problema" | "hipotese" | "ideia";

const SelectorButton = (props: {
    children: string,
}) => {

    const { children } = props; 

    return (
        <Button className="
        rounded-2xl w-28
        bg-grey-500
        text-grey-850
        "
        >
            {children}
        </Button>
    )
}

const handleClick = () => {

}


export default function Options() {

    const [selectedOption, setSelectedOption] = useState<"Problema" | "Ideia" | "Hipótese">("Problema"); 

    return (
        <div className="bg-grey-500 p-1 rounded-2xl">
            <SelectorButton>
                Problema
            </SelectorButton>
            <SelectorButton>
                Ideia
            </SelectorButton>
            <SelectorButton>
                Hipótese
            </SelectorButton>
        </div>
    )
}