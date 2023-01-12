import React from 'react'
import './AddQuestion.css'

export const AddQuestion = () => {
  return (
    <div className='add-overlay'>
        <div className="add-modal">
            <h1>Answer a question?</h1>
            <input placeholder='Your question' type="text" />
            <button className='add-ask-btn'>Ask</button>
        </div>
    </div>
  )
}