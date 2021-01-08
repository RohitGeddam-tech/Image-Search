import React from "react";
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    //[] is for array. if we feel that the response is an array we will put an array to the state
    state = {img: []};

    //alt method of calling notification

    onSearchSubmit = async (term) => {

      const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({ img: response.data.results});
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit } auth='Image Search' />
                <ImageList images={this.state.img} />
            </div>
        );
    }
}

export default App;

//<SearchBar onSubmit={this.onSearchSubmit} />
//you can change onsuvbmit to any names run grand whatever you want
//just we can to do that whenever we pass on a prop as a callback to normal jsx element

//app components takes the state.term from searchbar and is responsible
//for making an API request and somehow getting a list of images

//get request with axios
//get will have 2 args.
//1 will be the address we are going to make request to
//2nd one will be an object that will ahve a bunch of options that will customise this request
//we have to get the root url to make a request first and then we can enter search/photos
//axios.get('', { });

//we can also use this for authorization
//axios.get('https://api.unsplash.com/search/photos/?client_id=access key', {});
//this is the access key nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk


/* to check whether this axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization: 'Client-ID nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk'
            }
        });
    is working
    open inspect, click on networks, clear evrything, type the text,
    then check the XHR to see whethere there is any reponse


    this here is the request to get the data which can only be seen in network inspect
    axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization: 'Client-ID nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk'
            }
    });

    now we will try to get the data from this request and show it on screen
    first lets try get the no. of images we get from the result of get request

    this is the one method of getting notification
    axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term },
            headers: {
                Authorization: 'Client-ID nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk'
            }
    }).then((response) => {
        console.log(response.data.results);
    })

    now that we get the response we set it on the componnent state so 
    that we can print out the numbers for now our goal is the images

    alt method of solving this error
    constructor(){
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    one method

    onSearchSubmit = async (term) => {
         const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID nl3HFoKOggBkv1vwoBPp0fjf8NqrZq7K1TKdn3c86vk'
            }
        });
        console.log(response.data.results);
        this.setState({ img: response.data.results});
    }

    <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit } auth='Image Search' />
                found: {this.state.img.length} img
            </div>

    <ImageList images={this.state.img} />
    dont forget to add a space before the /> if not you will get an error
    
*/