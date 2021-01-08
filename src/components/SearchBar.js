//purpose is to create a searchbar

//son't ever completely copy the codes ol, 
//there maybe some errors look for it make your own changes

//anytime the user changes the input
//there is usually only one 1 property inside event object

//inthis on is usually used
//on the name of element we will assign this function to 
//and then the event we are watching for
//name doesn't matter much so you can put any name here.

//onInputChange(event) {console.log(event.target.value);}

//onClick={this.onInputClick}
//onInputClick(){console.log('the input is clicked');}

//onSubmit={this.onInputSubmit} 
//onInputSubmit(){console.log('the input is submited');}

//in the oncleck metod inside input the oninputchange is a function 
//in this if you put() after inputchange it will auto matically called whenever you render
//we don't want to call it when the inputchange is rendered 
//instead we want to call it at some point in future

//simply we don't put () everytime we call a callback function in an event handler like onchange

//onchange is a special property name
//different name needs different property names
//since we want to check everytime user changes the input we use onchange
//onclick is for when user clicks
//onSubmit is for when user submits the form

import React from 'react';

//we are using Class component because we need to use state in this
class SearchBar extends React.Component {
    //using sate means using controlled elements.

    /*constructor(){
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }*/


    state = { term: '' };

    //this is short form syntax for
    //onFormSubmit: funtion(event){...}
    //use this method most if not all the time
    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render(props) {
        return (
            <div className='ui segment' style={{ backgroundColor: 'red' }}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field' style={{ backgroundColor: 'orange' }} >
                        <label style={{ paddingLeft: '41%', marginTop: '2px', marginBottom: '2px',fontSize: '18px' }}>{this.props.auth}
                        </label>
                        <input type='text' style={{ fontFamily: 'sans-serif'}} value={this.state.term}
                            onChange={(e) => this.setState(
                                { term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;

    //onFormSubmit(event){event.preventDefault();console.log(this.state.term);}
    //3rd way inside the form tag onSubmit= {(e) => this.onFormSubmit(e)}
    //whenever we use => dunction inside element we need to use ()at the end to invoke it.


    //e = event

    //we need to stop the form tags default refreshing problem and to do this we use
    //onFormSubmit(event){event.preventDefault();}

    //toUpperCase is used to forcefully capitalise the input
    //<input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}/> 

    //onchange is called when user inputs text
    //we update state by calling the function inside that event object that is e.target.value that term will contain whatever user typed into it 
    //component re-renders when the user types something
    //value prop is omething which will will show whatever is inside it. it will override the other text input.

/*alternate way to write the event handler
<input type='text' onChange={(e) => console.log(e.target.value)}/>
<input type='text' onChange={(event) => console.log(event.target.value)}/>
this method is used when we need to define the code in single line
 */

/*uncontrolled elements
onInputChange(event) {
    console.log(event.target.value);
}
<input type='text' onChange={this.onInputChange}/>

onFormSubmit(event){event.preventDefault();console.log(this.state.term);}
the reason for state error in console.log is because there is no value to the
informsubmit object
the react can only call onformsumit as it is using this means adding a undefined value to it
2nd reason =>
that is when we call onformsubmit there is no this.onformsubmit
that is at some point when the form actually call onformsubmit
it rips that function off of that object or whatever object it shows up
it shows up as indide form element and calls that function on its own
that is onformsubmit not this.onformsubmit
so when the function is invoked the value of this inside of is equal to undefined
*/


