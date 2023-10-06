import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const AccordionList = (props:any) => {
  return (
    <div className='accordion-list'>
      {props.questionList.map((question:any, index:any) => {
        return (
          <AccordionItem project={question.node} />
        )
        })}
    </div>
  )
}

export default AccordionList