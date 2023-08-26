import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes  from "prop-types";
import Spinner from "./Spinner";
export class News extends Component {
  static defaultProps = {
    pageSize:9,
    category:'general'
  }

  static propTypes ={
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      page:1,
      loading:false
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults})
  }

  handlePrev = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading:false
    })
  }
  handleNext = async() =>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/9))){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles,
      loading:false
    })
    }
  }

  render() {
    let {heading} = this.props;
    return (
      <div className="container my-3">
      <h1 className="text-center my-4 mx-4">{heading}</h1>
      {this.state.loading && <Spinner/>}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url}>
                <NewsItem
                  title={element.title}
                  desc={element.description?element.description.slice(0,150):element.description}
                  newsUrl={element.url}
                  imageUrl={element.urlToImage}
                  author={element.author}
                  time={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <div className="container">
        <div className="d-flex justify-content-between mx-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/9)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
        </div>
        </div>
      </div>
    )
  }
}

export default News;
