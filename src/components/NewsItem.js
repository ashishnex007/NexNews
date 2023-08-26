import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {title,desc,imageUrl,newsUrl,author,time} = this.props;
    return (
      <div className='mx-4 my-4'>
      <div className="card" style={{width: "18rem"}}>
      <img src={imageUrl?imageUrl:"https://images.wallpaperscraft.com/image/single/mountains_landscape_wildlife_161294_2560x1440.jpg"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(time).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
