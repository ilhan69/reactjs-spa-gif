import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="center">
                    <h1>Vous êtes à la recherche du meilleur GIF du monde ?</h1>
                    <h3>Vous êtes au bon en droit !</h3>
                </div>
                <div className="row">
                    Plutôt &nbsp;<Link to="/tenor">tenor</Link>&nbsp; ? Ou plutôt &nbsp;<Link to="/giphy">giphy</Link>&nbsp;?
                </div>
            </div>
        )
    }
}

export default Home;