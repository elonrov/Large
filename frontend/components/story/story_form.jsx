import React from 'react'; 
import { Link } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.story;

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.action(this.state).then(({story}) => {
            this.props.history.push(`/stories/${story.id}`)
        });
    }; 

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }; 

    renderErrors() {
        if (this.props.errors) {
            return (
                <ul className="story-errors-list">
                    {this.props.errors.map((error, i) => (
                       <div className="story-error-div">
                            <div className="material-icons">error</div>
                            <li className="story-error" key={`${i}-error`}>{error}</li>
                        </div>
                    ))}
                </ul>
            );
        } else {
            return "";
        }
    };
    
    render () {

        return (
            <div className="story-form-page">
                <form className="story-form" onSubmit={this.handleSubmit}>
                    <label>
                        <input className="story-form-input-title" 
                        type="text" 
                        placeholder="Title"
                        value={this.state.title} 
                        onClick={this.props.clearErrors}
                        onChange={this.update('title')}/>
                    </label>
                    <br />
                    <label> 
                        <textarea className="story-form-input-body"
                        placeholder="Tell your story..."
                        value={this.state.body}
                        onClick={this.props.clearErrors}
                        onChange={this.update('body')}/>
                    </label>
                    {/* <label>
                        <button>Upload an image.</button>
                    </label> */}
                    <div className="story-form-errors">{this.renderErrors()}</div>
                    <div className="story-form-buttons">
                        <button className="story-form-publish" type="submit">Publish</button>
                        <button className="story-form-cancel" type="button"><Link to="/" className="no-link">Cancel</Link></button>
                    </div>
                </form>
            </div>
        )
    };
}; 

export default StoryForm;