import React from 'react'; 
import { Link } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.story; 

        this.handleSubmit = this.handleSubmit.bind(this); 
    };

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state);
    }; 

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }; 

    
    render () {

        return (
            <div className="story-form-page">
                <form className="story-form" onSubmit={this.handleSubmit}>
                    {/* <h2 className="form-title">{this.props.formType}</h2> */}
                    <label>
                        <input className="story-form-input-title" 
                        type="text" 
                        placeholder="Title"
                        value={this.state.title} 
                        onChange={this.update('title')}/>
                    </label>
                    <br />
                    <label> 
                        <textarea className="story-form-input-body"
                        placeholder="Tell your story..."
                        value={this.state.body}
                        onChange={this.update('body')}/>
                    </label>
                    <div className="story-form-buttons">
                        <button className="story-form-publish" onClick={() => this.props.history.push("/")} type="submit">Publish</button>
                        <button className="story-form-cancel"><Link to="/" className="no-link">Cancel</Link></button>
                    </div>
                </form>
            </div>
        )
    };
}; 

export default StoryForm;