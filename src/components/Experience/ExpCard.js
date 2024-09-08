import Card from "react-bootstrap/Card";
import logomie from "../../Assets/mie logo.png"
function ExpCard() {
    return(
        <Card className="exp-card-view">
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <div className="expcard">
            <img src={logomie} alt="kmutnb" className="logo4" style={{ maxHeight: "110px" }}/>
            <p style={{ textAlign: "justify" }}><span style={{ fontWeight:'bold'}} className="purple">
            Multi Innovation Engineering</span>
            <br />
            <p style={{fontSize:'18px'}}>Bachelor Degree, Faculty of Industrial Technology in Electronics Computer Technology.</p>
            <p style={{ color: "rgb(155 126 172)",textAlign:'right' }}>2022-Now</p>
            </p>
            </div>
            </blockquote>
            </Card.Body>
            </Card>
    );
}
export default ExpCard;