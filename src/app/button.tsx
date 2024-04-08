import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function Button({children, className, ...rest}: ButtonProps) {
    return (
        <button
        {...rest}
        className={clsx("bg-blue-600 p-3 rounded-lg text-white-50 font-semibold", className)}
        >
            {children}
        </button>
    )
}