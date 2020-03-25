import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';

class StoryForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            story: this.props.story, 
            photoFile: null
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const formData = new FormData(); 
        if (this.state.story.title) {
            formData.append('story[title]', this.state.story.title); 
        };
        if (this.state.story.body) {
            formData.append('story[body]', this.state.story.body);
        };
        if (this.state.photoFile) {
            formData.append('story[photo]', this.state.photoFile); 
        };
        formData.append('story[id]', this.state.story.id);

        this.props.action(formData).then(({ story }) => {
            this.props.history.push(`/stories/${story.id}`)
        });
    }; 

    update(field) {
        return e => {
            let newStory = Object.assign({}, this.state.story, { [field]: e.target.value })
            this.setState({story: newStory})
        }
    }; 

    handleFile(e) {
        e.preventDefault(); 
        const reader = new FileReader(); 
        const file = e.currentTarget.files[0];
        reader.onloadend = () => 
            this.setState({ photoUrl: reader.result, photoFile: file});
        
        if (file) {
            reader.readAsDataURL(file); 
        } else {
            this.setState({photoUrl: "", photoFile: null});
        }
    }

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

        const updateButton = (this.props.formType === "Edit Story") ? (
            "Update Story"
        ) : (
            "Publish"
        );

        return (
            <div className="story-form-page">
                <form className="story-form" onSubmit={this.handleSubmit}>
                    <div className="upload-button-inputs">
                        <div className="upload-button">
                            <img src={window.photoupload}></img>
                            <label className="story-form-photo-label">Upload a cover photo.<br/>
                                <input
                                    type="file"
                                    onChange={this.handleFile}>
                                </input>
                            </label>
                        </div>
                        <div className="inputs">
                            <label>
                                <input className="story-form-input-title" 
                                type="text" 
                                placeholder="Title"
                                value={this.state.story.title} 
                                onClick={this.props.clearErrors}
                                onChange={this.update('title')}/>
                            </label>
                            <br />
                            <label> 
                                <textarea className="story-form-input-body"
                                placeholder="Tell your story..."
                                value={this.state.story.body}
                                onClick={this.props.clearErrors}
                                onChange={this.update('body')}/>
                            </label>
                        </div>
                    </div>
                    <div className="story-form-errors">{this.renderErrors()}</div>
                    <div className="story-form-buttons">
                        <button className="story-form-publish" type="submit">{updateButton}</button>
                        <button className="story-form-cancel" type="button"><Link to="/" className="no-link">Cancel</Link></button>
                    </div>
                </form>
            </div>
        )
    };
}; 

export default withRouter(StoryForm);