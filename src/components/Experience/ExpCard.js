import Card from "react-bootstrap/Card";
import logomie from "../../Assets/mie logo.png"
function ExpCard() {
    return(
        <Card className="exp-card-view">
            <Card.Body>
            <blockquote className="blockquote mb-0">
            <div className="expcard">
            <div className="text-center">
            <img src={logomie} alt="kmutnb" className="logo4 img-fluid" style={{ maxHeight: "110px", marginBottom: "20px" }}/>
            </div>
            <p style={{ textAlign: "justify" }}><span style={{ fontWeight:'bold', whiteSpace: 'nowrap'}} className="purple">
            Multi Innovation Engineering </span>
            <br />
            <p style={{fontSize:'18px'}}>Internship
                <p style={{fontSize:'16px'}}>Front-end developer
                <p style={{fontSize:'16px'}}>&nbsp;&nbsp; - Assigned to work on a maintenance reporting project for web applications using 
                <span className="purple"> Next.js </span>, <span className="purple"> TypeScript</span>, and <span className="purple"> MUI</span> to ensure responsiveness on phone screens.
                <br />&nbsp;&nbsp;&nbsp; - Integrated API</p></p></p>
            <p style={{ color: "rgb(155 126 172)",textAlign:'right' }}>May-August | 2024</p>
            </p>
            </div>
            </blockquote>
            </Card.Body>
            </Card>
    );
}
export default ExpCard;