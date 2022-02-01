import React from "react";
import axios from 'axios';

import tenor from '../../assets/images/tenor.png'; 
import { TENORAPIKEY } from "../../constants";

class Tenor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gifs: [],
            searched: null,
            next: 0,
        }
    }

    handleSearch = (e) => {
        this.setState({
            searched: e.target.value
        })
    }

    requestSearch = (e) => {
        if(!this.state.searched)
            return;
        if(e.target.id === 'newsearch')
            this.setState({
                gifs: []
            })
        axios.get(`https://g.tenor.com/v1/search?q=${this.state.searched}&key=${TENORAPIKEY}&limit=12&pos=${this.state.next}`)
        .then(res => {
            const gifs = res.data;
            const data = [...this.state.gifs, ...gifs.results]
            this.setState({ 
                    gifs: data,
                    next: gifs.next
                });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="center">
                    <h1>Effectuer une recherche sur Tenor</h1>
                    <img src={tenor} className="logo" alt="tenor" />
                    <h3>Vous êtes au bon en droit !</h3>
                </div>
                <div className="row">
                    <input className="searchbox" type="text" placeholder="Je cherche un gif de Nicolas qui danse" onChange={this.handleSearch} />
                    <button className="searchbutton" id="newsearch" onClick={this.requestSearch}>Chercher</button>
                </div>

                {this.state.gifs.length>0 && (
                <>
                    <div className="gif-items">
                        {this.state.gifs.map((gif) => {
                            return (
                                <div key={gif.id}>
                                    <img src={gif.media[0].gif.url} alt={gif.content_description}/>
                                    <p>{gif.content_description}</p>
                                    <div className="bottom">
                                        <a rel="noreferrer" target='_blank' href={gif.url}>Voir sur Tenor</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="ht-separator"></div>
                    <div className="row">
                        <button className="button" id="searchmore" onClick={this.requestSearch}>Afficher plus de gifs</button>
                    </div>
                </>
                )}
            </div>
        )
    }
}

export default Tenor;