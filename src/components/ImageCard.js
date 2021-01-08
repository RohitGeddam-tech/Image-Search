//purpose is to show one image by itself as a starter.

import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        this.ImageRef = React.createRef();
        //this is the way to create a ref
    }

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', this.setSpans);
    } 

    setSpans = () => {
        const height = this.ImageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });
    }

    render(){
        const {description, urls} = this.props.images;
        return (
        <div style= {{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.ImageRef} alt={description} src={urls.regular} />
        </div>
        );
    }
}

export default ImageCard;


/*
<img 
    alt={this.props.images.description} 
    src={this.props.images.urls.regular}
/>

 const {description, urls} = this.props.images;
        return (<div>
            <img alt={description} src={urls.regular} />
        </div>);


    constructor(props){
        super(props);

        this.ImageRef = React.createRef();
        //this is the way to create a ref
    }

    componentDidMount() {console.log(this.ImageRef);}  
    

    //in case componentDidMount() {console.log(this.ImageRef.current.clientHeight);}
    //doesn't work we use the syntax below

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', this.setSpan);
    } 
    setSpan = () => {
        console.log(this.ImageRef.current.clientHeight);
    }

    this.setState({ span: span});

    render(){
        const {description, urls} = this.props.images;
        return (<div>
            <img ref={this.ImageRef} alt={description} src={urls.regular} />
        </div>);
    }

    componentDidMount() {
        this.ImageRef.current.addEventListener('load', this.setSpans);
    } 
*/ 