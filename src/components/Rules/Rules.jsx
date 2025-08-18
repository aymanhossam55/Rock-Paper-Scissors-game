import React from 'react'
import './rules.css'
import { Button } from 'react-bootstrap'
import rules from '../../assets/image-rules.svg'
// import { useState } from 'react'
import Swal from 'sweetalert2'


const Rules = () => {
    const Rule = () => {
      Swal.fire({
      title:"Rules",
      showCloseButton: true,
      imageUrl: rules,
      heightAuto : false,
      imageAlt: "Rules"
  })};
  return (
    <div
    className='rules'
    style={{display:"flex",justifyContent:"flex-end",alignContent:"flex-end",marginTop:"2rem",marginBottom:"6rem"}}
    >
      <Button className='rules-btn' onClick={Rule}>
        Rules
      </Button>
    </div>
  )
}

export default Rules