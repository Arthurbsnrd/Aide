let condition = true


function Condition() {
    if (condition == false) 
    return (
    <div className="Condition">
        Nom: <br/>
        Prénom:
    </div>
  );

  else
  return (
    <div className="Condition">
        La valeur est vrai
    </div>
  );
}

export default Condition;
