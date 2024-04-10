"use client";

import Input from "./input";
import { Button } from "./button";
import { useOptionStore } from "./options";
import { useEffect } from "react";

const DescriptionInput = () => {

    useEffect(() => {
        console.log(useOptionStore)
    }, [])

    const { selectedOption } = useOptionStore();

    return (
        <div className="flex gap-2 flex-col md:flex-row">
        <Input placeholder={selectedOption.question} />
        <p>
        </p>
        <Button className="text-lg px-7 rounded-lg">
          Gerar
        </Button>
      </div>
    )
}

export default DescriptionInput;