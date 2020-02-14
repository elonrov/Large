import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

class StoryForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.story; 

        // this.handleSubmit = this.handleSubmit.bind(this); 
    };


    render () {
        return (
            <h1>Write a new story</h1>
        )
    };
}