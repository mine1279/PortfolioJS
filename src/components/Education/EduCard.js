import React from "react";
import Card from "react-bootstrap/Card";
import logokmutnb from "../../Assets/img/logo_kmutnb.png";
import logostc from "../../Assets/img/logoSTC.png"

function Educard() {
    return(
        <Card className="edu-card-view">
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <div className="educard">
            <img src={logokmutnb} alt="kmutnb" className="logo4" style={{ maxHeight: "110px" }}/>
            <p style={{ textAlign: "justify" }}><span style={{ fontWeight:'bold'}} className="purple">
                King Mongkut's University of Technology North Bangkok</span>
            <br />
            <p style={{fontSize:'18px'}}>Bachelor Degree, Faculty of Industrial Technology in Electronics Computer Technology.</p>
            <p style={{fontSize:'18px'}}>GPAX : 3.00</p>
            <p style={{ color: "rgb(155 126 172)",textAlign:'right' }}>2022-2024</p>
            </p>
            </div>
            <br />
            <br />
            <div className="educard">
            <img src={logostc} alt="stc" className="logo4" style={{ maxHeight: "110px" }}/>
            <p style={{ textAlign: "justify" }}><span style={{ fontWeight:'bold'}} className="purple">
                Suphanburi Technical College</span>
            <br />
            <p style={{fontSize:'18px'}}>High Vocational Certificate Computer Hardware (Basic M.6)</p>
            <p style={{ color: "rgb(155 126 172)",textAlign:'right',marginRight:'-70px' }}>2020-2022</p>
            </p>
            </div>
            </blockquote>
            </Card.Body>
            
        </Card>
    );
}
export default Educard;