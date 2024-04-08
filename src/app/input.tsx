
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = ({className, ...rest}: InputProps) => {
    return (
        <input {...rest} className="border border-grey-800 font-normal p-2 pr-24 h-13 rounded-lg" />
    )
}

export default Input; 