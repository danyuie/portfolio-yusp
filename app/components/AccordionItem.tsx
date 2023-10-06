import React, { useState } from 'react'
import Image from 'next/image';

const AccordionItem = (props:any) => {
  const [question, setQuestion] = useState(props.project)
  const [isShowing,setIsShowing] = useState(false)
  const toggle = () => {
    setIsShowing(!isShowing)
  }
  return (
    <div className='accordion-item'>
      <div className='accordion-item_title' onClick={toggle}>
        <div className="Text-S bold title">{question.title}</div>
        <div><Image height={28} width={28} src='minus.svg' alt='' /></div>
      </div>
      <div style={{display: isShowing ? "block":'none'}} className="Text-S regular answer">{question.answer}</div>
    </div>
  )
}

export default AccordionItem