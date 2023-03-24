import React from 'react'
import {useEffect} from 'react'
import { Container, Row,Button } from 'react-bootstrap'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({history}) => {
    const navigate = useNavigate();
        useEffect(() => {
          const userInfo = localStorage.getItem("userInfo");

          if (userInfo) {
            navigate("/mynotes");
          }
        }, [history,navigate]);
        
  return (
      <div className='main'>
          <Container>
              <Row>
                  <div className='intro-text'>
                      <div>
                          <h1 className='title'>Welcome to NotesKeeper</h1>
                          <p className='subtitle'>One safe place for all your notes</p>
                      </div>
                      <div className="buttonContainer">
                          <a href="/login">
                              <Button size='lg' className='landingbutton'>
                                  Login
                              </Button>
                          </a>
                          <a href="/register">
                              <Button size='lg' className='landingbutton' variant='outline-primary'>
                                  Signup
                              </Button>
                          </a>
                      </div>
                  </div>
              </Row>
          </Container>
    </div>
  )
}

export default LandingPage