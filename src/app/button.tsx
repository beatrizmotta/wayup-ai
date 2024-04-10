import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    roundness?: string 
}

export function Button({children, className, roundness,...rest}: ButtonProps) {
    return (
        <button
        {...rest}
        className={clsx("bg-blue-600 p-3 text-white-50 font-semibold", roundness, className)}
        >
            {children}
        </button>
    )
}