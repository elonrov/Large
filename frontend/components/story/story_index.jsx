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

        let editorIndex = this.props.stories.slice(0, 5).map((story, i) => {
            const preview = story.body.slice(0, 100) + "...";
            if (i)
            return (
                <div className="editor-pick-story" key={`${i}-${story.id}-${(Math.floor(Math.random() * 1000))}`}>
                    <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                    <p className="story-preview">{preview}</p>
                    <Link to={`users/${story.author_id}`}><h4 className="story-author">{story.author}</h4></Link>
                </div>
            )
        });

        let popularIndex = this.props.stories.slice(5, 9).map((story, i) => {
            return (
                <li className="popular-story" key={`${i}-${story.id}-${(Math.floor(Math.random() * 1000))}`}>
                    <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                    <h4 className="story-author">{story.author}</h4>
                    <h5 className="published-date">Feb 14, 2020 · {(Math.ceil(Math.random() * 10))} min read ★</h5>
                </li>
            )
        });

        let feedIndex = this.props.stories.slice(9).map((story, i) => {
            const preview = story.body.slice(0, 100) + "...";
            if (i)
                return (
                    <div className="feed">
                        <div className="feed-story" key={`${i}-story.id${(Math.floor(Math.random() * 1000))}`}>
                            <Link className="story-title" to={`/stories/${story.id}`}>{story.title}</Link>
                                <p className="story-preview">{preview}</p>
                            <h4 className="story-author">{story.author}</h4>
                <h5 className="published-date">Feb 14, 2020 · {(Math.ceil(Math.random() * 10))} min read ★</h5>
                        </div>
                        <div className="story-thumbnail">
                            <img />
                        </div>
                    </div>
                )
        });

        return (
            <div className="index-page">
                <ul className="categories-list">
                    <li className="category-name">AIRCRAFT</li>
                    <li className="category-name">SHORT/SICK</li>
                    <li className="category-name">R-THAN-LIFE</li>
                    <li className="category-name">SKYSCRAPERS</li>
                    <li className="category-name">CELESTIAL BODIES</li>
                    <li className="category-name">BEASTS/BEHEMOTHS</li>
                    <li className="category-name">MOUNTAINS</li>
                </ul>
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
                        <h3>Based on your reading history</h3>
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
