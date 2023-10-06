"use client";
import { ButtonProps } from "@/types";

const ButtonPrimary = ({title, containerStyle, handleClick }: ButtonProps) => {
  return (
    <button
    disabled={false}
    type={`button`}
    className={`button button-primary ${containerStyle}`}
    onClick={handleClick}>
      <span className=''>
        {title}
      </span>
      
    </button>
  )
}

export default ButtonPrimary