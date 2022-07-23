import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description ,imageUrl, newsUrl, author, date}= this.props;
    return (
        
      
      <div className="card border-dark mb-3">
  <img src={!imageUrl?"https://www.teslarati.com/wp-content/uploads/2022/02/Trailer_still_1-1-c.jpg":imageUrl } className="card-img-top" alt='....' />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">Author:{!author? "Unknown" :author} On:{new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-secondary">Read more</a>
  </div>
</div>
    
    )
  }
}

export default Newsitems
