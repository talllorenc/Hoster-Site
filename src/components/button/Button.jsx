import Link from "next/link";

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className="px-[20px] py-[20px] cursor-pointer bg-green-500 rounded border-none border-5px width-max-content text-white font-bold">{text}</button>
    </Link>
  )
}

export default Button