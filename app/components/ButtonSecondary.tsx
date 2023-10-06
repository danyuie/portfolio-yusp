"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ButtonSecondary = ({slug, title, containerStyle, handleClick, icon }: ButtonProps) => {
  return (
    <Link href={slug ? `${slug}`: '#!'}>
      <button
      disabled={false}
      type={`button`}
      className={`button button-secondary ${containerStyle}`}
      onClick={handleClick}>
        <span className=''>
          {title}
        </span>
        {icon ? <Image 
        src='arrow-right.svg'
        width={20}
        height={20}
        alt=""/>: ''}
      </button>
    </Link>
  )
}

export default ButtonSecondary