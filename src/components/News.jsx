import React from 'react'
import { NewsCard } from './NewsCard';

const BASE_URL = "https://hn.algolia.com/api/v1/search?query="

class News extends React.Component {
    constructor(){
        super();
        this.state = {
            news: [],
            inputValue: ""
        }
    }

    inputValueHandler = (e) => {
        this.setState({
            inputValue : e.target.value
        })
    }

    searchHandler = async () => {
        const res  = await fetch(`${BASE_URL}${this.state.inputValue}`)
        const data = await res.json();
        
        this.setState({
            news: data.hits,
            inputValue: "" 
        })

    }

    render() {
        const {inputValue, news} = this.state;
        return (<>
            <div>
                <input type='text' name='search' onChange={this.inputValueHandler} value={inputValue}/>
                <button type='submit' onClick={this.searchHandler}>Submit</button>
            </div>
            <ul>
                {news.map(el => {
                    return <NewsCard url={el.url} title={el.title} author={el.author} key={el.story_id}/>
                })}
            </ul>
        </>

        
        
        )
    }
}

export default News;

