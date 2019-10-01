import React, { Component } from "react"; 
import axios from 'axios';
import Events from './Events'
import 'typeface-roboto';


export default class MainContainer extends Component {
    constructor() {
        super() 
        this.state = {
            loading: true,
            locationId: "",
            eventData: []
        }
        // this.handleTermChange = this.handleTermChange.bind(this);
    }

    // handleTermChange = (e) => {
    //     this.setState({[e.target.name] : e.target.value});
    // }

    // handleSubmit = (e) => {
    //     if(e) {
    //         e.preventDefault();}
    //     this.findArtistID();
    // }


    getId () {
        axios.get(`https://api.songkick.com/api/3.0/search/locations.json?query=denver&apikey=viaZLZfjblo2eWh5`)
        .then(response => {
            // console.log(response.data.resultsPage.results.location[0].metroArea.id)
            this.setState({locationId: response.data.resultsPage.results.location[0].metroArea.id})
        })
        .catch (error => {
            console.log(error);
        });
    }

    getInfo = () => {
        setTimeout( async () => { 
            const response = await fetch(`https://api.songkick.com/api/3.0/metro_areas/${this.state.locationId}/calendar.json?apikey=viaZLZfjblo2eWh5`)
            const json = await response.json();
            // console.log(json.resultsPage.results.event)
            this.setState({
                eventData: json, 
                loading: false 
            })
        }, 500)
    }
   
    componentDidMount = () => {
        this.getId()
        this.getInfo()
    }
    

    render(){
        return(
            <div>
                <h1>EventHuntr</h1>
                {/* <div className="search-form">
                    <form onSubmit={this.handleSubmit}>
                        <input action={{
                                color: 'orange',
                                icon: 'search',
                                }}  
                            size='large' type="text" 
                            name="artistQuery" 
                            placeholder="Search Artist..." 
                            value={this.state.artistQuery} 
                            onChange={this.handleTermChange}/>
                    </form>
                </div> */}
                
                {this.state.loading ? "Nearby Events Loading..." : <Events events={this.state.eventData}/>}
            </div>
        )
    }
};
