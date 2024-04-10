"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import puzzle_pieces from "public/icons/puzzle-pieces.svg";
import { chdir } from "process";


type CardHeaderProps = {
    children: React.ReactNode;
};

type CardBodyProps = {
    children: React.ReactNode;
};

type CardContentProps = {
    children: React.ReactNode[];
}

type CardIconProps = {
    icon: string,
    alt: string
}

type CardProps = {
    children: Array<React.ReactElement<CardHeaderProps | CardContentProps | CardBodyProps | CardIconProps>>;
};


const CardIcon: React.FC<CardIconProps> = ({ icon, alt }) => {
    return (
        <div className="w-3">
            <Image
                className="w-full"
                src={icon}
                alt={alt}
            />
        </div>
    )
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
    return (
        <span className="font-semibold text-black-50">
            {children}
        </span>
    )
}

const CardBody: React.FC<CardBodyProps> = ({ children }) => {
    return (
        <div className="font-medium text-start pl-14 text-grey-600">
            {children}
        </div>
    )
}

const CardContent: React.FC<CardContentProps> = ({children}) => {
    return (
        <div className="flex items-center gap-4">
            {children}
        </div>
    )
}

const Card: React.FC<CardProps> = ({ children }) => {

   


    return (
        <div className="w-96 h-64 flex flex-col gap-4 items-start p-8 border-r-1 border-grey-700">

            { children }
            {/* <div className="flex items-center gap-4"> */}
                {/* <CardIcon />
                <CardHeader /> */}
                {/* <div className="w-10">
                    <Image
                        className="w-full"
                        src={puzzle_pieces}
                        alt="Ícone de duas peças de quebra-cabeça encaixadas"
                    />
                </div>
                <span className="font-semibold text-black-50">
                    Crie soluções inovadoras
                </span> */}
            {/* </div> */}
            {/* <CardBody /> */}
            {/* <div className="font-medium text-start pl-14 text-grey-600">
                A Wayup cria ideias inovadoras para você que quer criar um negócio
            </div> */}

        </div>
    )
}

export default Card;
export { CardBody, CardHeader, CardIcon, CardContent };