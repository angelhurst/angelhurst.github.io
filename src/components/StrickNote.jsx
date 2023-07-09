function StickNote(props) {
  return (
    <div className="stick-note position-relative p-4 bg-success text-white   ">
        <p className="stick-text">
                    {props.text}
        </p>
        {/* <p className="stick-text">
                    "Sabes cual es el problema?
                    imaginarte el algoritmo y no
                    programarlo"
        </p> */}
    </div> 
  );
}

export default StickNote;