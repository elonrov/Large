import React from 'react'; 

class StoryShow extends React.Component {
    render () {
        return (
            <div>
                <h2>{this.props.story.title}</h2>
                <h4>{this.props.story.author_id}</h4>
                <p>{this.props.story.body}</p>
            </div>
        )
    }
}; 

export default StoryShow;