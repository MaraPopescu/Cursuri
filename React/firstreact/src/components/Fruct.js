import "./Fruct.css";
function Fruct({ nume, cantitate }) {
  return (
    <div className='card_fruct'>
      <h4>{nume}</h4>
      <h5>{cantitate}</h5>
    </div>
  );
}

export default Fruct;
