import React from 'react'
import './MainScreen.css'
import { Row, Container }from 'react-bootstrap';

const mainScreen = ({title,children}) => {
  return (
      <div className='mainback'>
          <Container>
              <Row>
                  <div className="page">
                      {
                          title && (<>
                              <h1 className='heading'>{title}</h1>
                              <hr />
                          </>)
                      }
                      {children}
                  </div>
              </Row>
          </Container>
      </div>
  )
}

export default mainScreen