import React from "react";
import axios from 'axios';

import giphy from '../../assets/images/giphy.png'; 
import { GIPHYAPIKEY } from "../../constants";

class Giphy extends React.Component {
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
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${GIPHYAPIKEY}&q=${this.state.searched}&limit=12&offset=${this.state.next}&lang=fr`).then(res => {
            const gifs = res.data;
            const data = [...this.state.gifs, ...gifs.data]
            this.setState({ 
                    gifs: data,
                    next: gifs.pagination.offset+12
                });
        })
    }

    render() {
        return (
            <div className="container">
                <div className="center">
                    <h1>Effectuer une recherche sur Giphy</h1>
                    <img src={giphy} className="logo" alt="Giphy" />
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
                                    <img src={gif.images.original.url} alt={gif.title}/>
                                    <p>{gif.title}</p>
                                    <div className="bottom">
                                        <a rel="noreferrer" target='_blank' href={gif.bitly_gif_url}>Voir sur Giphy</a>
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

export default Giphy;