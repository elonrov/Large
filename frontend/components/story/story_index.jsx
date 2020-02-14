import React from 'react'; 
import { Link } from 'react-router-dom';
import StoryShow from './story_show';

class StoryIndex extends React.Component {
    constructor (props) {
        super(props)
    }; 

    componentDidMount () {
        this.props.fetchAllStories(this.props.stories);
    }

    render () {

        let editorIndex = this.props.stories.slice(0, 6).map((story, i) => {
            const preview = story.body.slice(0, 100) + "...";
            if (i)
            return (
                <div className="editor-pick-story" key={`${i}-story.id${(Math.floor(Math.random() * 100000))}`}>
                    <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                    <p className="story-preview">{preview}</p>
                    <h4 className="story-author">{story.author}</h4>
                </div>
            )
        });

        let popularIndex = this.props.stories.slice(6, 10).map((story, i) => {
            return (
                <div className="popular-story" key={`${i}-story.id-${(Math.floor(Math.random() * 1000))}`}>
                    <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                    <h4 className="story-author">{story.author}</h4>
                </div>
            )
        });

        let feedIndex = this.props.stories.slice(10).map((story, i) => {
            const preview = story.body.slice(0, 100) + "...";
            if (i)
                return (
                    <div className="feed-story" key={`${i}-story.id${(Math.floor(Math.random() * 1000))}`}>
                        <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                        <p className="story-preview">{preview}</p>
                        <h4 className="story-author">{story.author}</h4>
                    </div>
                )
        });

        return (
            <div className="index-page">
                <section className="index-section-1">
                    <div className="editor-picks">
                        <h3>Editor's Picks</h3>
                        <ul className="editor-picks-list">
                            {editorIndex}
                        </ul>
                    </div>
                </section>
                <section className="index-section-2">
                    <div className="feed-all">
                        <h3>My Feed</h3>
                        <ul className="feed-list">
                            {feedIndex}
                        </ul>
                    </div>
                    <div className="popular-container">
                        <div className="popular">
                            <h3>Popular on Large</h3>
                            <ol className="popular-list">
                                {popularIndex}
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}; 


export default StoryIndex;
