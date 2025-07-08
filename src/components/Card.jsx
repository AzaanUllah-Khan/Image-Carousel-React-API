const Card = (props) => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '100vw',
        height: '100vh',
        scrollSnapAlign: 'start',
        position: "relative"
      }}
    >
      <div style={{position:"absolute",top:25,right:25,backgroundColor:"rgba(270,270,270,0.25)",padding:"5px 20px", borderRadius:"20px",backdropFilter:"blur(3px)", border: "2px solid rgba(270,270,270,0.4)"}}><h1>Author: <b>{props.name}</b></h1></div>
      <img src={props.url} alt={props.name} style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        cursor: "pointer"
      }} />
    </div>
  )
}

export default Card
