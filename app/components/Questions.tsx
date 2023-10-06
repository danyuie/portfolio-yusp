"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import { getQuestion } from './../../services/index';
import AccordionList from './AccordionList';


const Questions = () => {

  const [questiontList, setQuestionList] = useState<any>([]) 

  useEffect(()=>{
    getStaticProps();
  },[])

  const getStaticProps = async () => {
    const question:any = (await getQuestion()) || []
    setQuestionList(question?.questionsConnection.edges)
    // console.log(question)
  }

  return (
    <div className='questions space-global'>
      <SectionHeading
        tag="FAQ's"
        headingDark='Find'
        headingGrey="your answers"/>
      <div className="questions-box">
        <AccordionList questionList={questiontList} />    
      </div>
    </div>
  )
}

export default Questions