import React, {useState} from 'react'
import {useParams, Link, useNavigate, useLocation} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import moment from 'moment'  //package.json 
import copy from 'copy-to-clipboard'

import './QuestionDetails.css'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'


const QuestionDetails = () => {
  const {id} = useParams()   // URL's id in Questions/'id'
  const questionsList = useSelector(state => state.questionsReducer)
  console.log(questionsList)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const url = 'https://stack-overflow-clone-withmodifications.onrender.com'
  const[Answer, setAnswer] = useState('')
  const User = useSelector((state)=> (state.currentUserReducer))

  const handlePostAnswer = (e, answerLength) =>{
    e.preventDefault()
    if(User === null){
      alert('Login or Signup to answer a question')
      navigate('/Auth')
    }
    else{
      if(Answer === ''){
        alert('Enter an answer before submitting')
      }
      else{
        dispatch(postAnswer({ id, noOfAnswers: answerLength+1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }
  }

  const handleShare =()=>{
    copy(url + location.pathname)
    alert('Copied to clipboard: '+ url+location.pathname)
  }
  const handleDelete =()=>{
    dispatch(deleteQuestion(id, navigate))
  }

  const handleUpVote =()=>{
    dispatch(voteQuestion(id, 'upVote', User.result._id))
  }

  const handleDownVote =()=>{
    dispatch(voteQuestion(id, 'downVote', User.result._id))
  }

  return (
    <div className='question-details-page'>
      {
        questionsList.data === null ?
        <h1>Loading...</h1> :
        <>
          { //we use parenthesis to return jsx element
              questionsList.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                  <section className='question-details-container'>
                      <h1>{question.questionTitle}</h1>
                      <div className='question-details-container2'>

                          <div className='question-votes'>
                            <img src={upvote} alt='' width='18' className='votes-icon' onClick={handleUpVote} />
                            <p>{question.upVote.length - question.downVote.length}</p>
                            <img src={downvote} alt='' width='18' className='votes-icon' onClick={handleDownVote}/>
                          </div>

                          <div style={{width:'100%'}}>
                            <p className='question-body'>{question.questionBody}</p>
                            <div className='question-details-tags'>
                              {
                                question.questionTags.map(tag=>( <p key={tag}> {tag} </p> ))
                              }
                            </div>
                            <div className='question-action-user'>
                              <div>
                                  <button type='button' onClick={handleShare}>Share</button>
                                  {
                                    User?.result?._id === question?.userId && ( <button type='button' onClick={handleDelete}>Delete</button>)  
                                    //ids of the user who posted the question and the one who is logged in should match
                                  }
                              </div>
                              <div>
                                  <p>asked {moment(question.askedOn).fromNow()}</p>
                                  <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}} >
                                    <Avatar backgroundColor='orange' px='8px' py='5px' >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                    <div>{question.userPosted}</div>
                                  </Link>
                              </div>
                            </div>
                          </div>
                      </div>
                  </section>

                  {
                    question.noOfAnswers !== 0 && (
                      <section>
                        <h3>{question.noOfAnswers} Answers</h3>
                        <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                      </section>
                    )
                  }

                  <section className='post-ans-container'>
                    <h3>Your Answer</h3>
                    <form onSubmit={e =>{handlePostAnswer(e, question.answer.length)}}>
                        <textarea cols='30' rows='10' onChange={e=> setAnswer(e.target.value)}></textarea><br/>
                        <input type="Submit" className='post-ans-btn' value='Post Your Answer' ></input>
                    </form>
                    <p>
                      Browse other questions tagged {
                        question.questionTags.map(tag => (
                          <Link to='/Tags' key={tag} className='ans-tags' >{tag} </Link>
                        ))
                      } or
                      <Link to='/AskQuestion' style={{textDecoration:'none', color:"#009dff"}}> ask your own question</Link>.
                    </p>
                  </section>
                </div>
              ))
          }
        </>
      }
    </div>
  )
}

export default QuestionDetails
