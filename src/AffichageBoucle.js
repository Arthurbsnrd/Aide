let fruit = ['pommes de terre', 'bananes', 'poire','framboise']

function AffichageBoucle() {
    return (
        <div className="AffichageBoucle">
                {fruit.map((fruit, index) => (
        <div>
            je vous propose le fruits suivant : {fruit}
        </div>
        ))}
    </div>
)}


export default AffichageBoucle;
