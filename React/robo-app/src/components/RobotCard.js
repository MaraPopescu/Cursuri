import "./RobotCard.css";
function RobotCard({ nameAtribut, emailAtribut }) {
  return (
    <div className='container-card'>
      <img
        src={`https://robohash.org/${nameAtribut}.png?size=100x100`}
        alt='Imagine robot'></img>
      <h2>{nameAtribut}</h2>
      <h3>{emailAtribut}</h3>
    </div>
  );
}

export default RobotCard;
