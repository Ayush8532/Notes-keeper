import {Spinner} from 'react-bootstrap'

const Loading = ({size=100}) => {
  return (
      <div
          style={{
              display:"flex",
              justifyContent:"center",
              alingItem: "center",
              width: "100%",
              height:"100%",
          }}
      >
          <Spinner
              style={{
              width:size,
              height:size,
              }}
              animation="border"
          />
          
      </div>
  )
}

export default Loading