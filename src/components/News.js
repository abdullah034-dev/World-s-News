import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

constructor(){
  super();  
  this.state={
    articles:[],
    loading:false,
    page:1
  }
}
 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=0dffc30990754118bce4fe982c4151ab&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.setstate=({loading:true})
  let parsedData= await data.json()
  console.log(parsedData);
  this.setState({articles:parsedData.articles,
    loading:false
  })
}

handlepre= async()=>{
  console.log('Previous');
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=0dffc30990754118bce4fe982c4151ab&page= ${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData= await data.json()
  this.setstate=({loading:true})
  console.log(parsedData);
this.setState({
  page:this.state.page-1,
  articles:parsedData.articles,
  loading:false
})

  
}

handlenext= async ()=>{
  console.log('next');

if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))
{}
else 
{
  let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=0dffc30990754118bce4fe982c4151ab&page= ${this.state.page+1}&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  this.setstate=({loading:true})
  let parsedData= await data.json()
  console.log(parsedData)

this.setState({
  page:this.state.page + 1,
  articles:parsedData.articles,
  loading:false
})
}
  
}


  render() { 
    return (
      
        <div className='container my-3'>
             <h1 className="text-center" style={{margin : '35px 0px' , marginTop : '75px'}}>TOP QUICK - HEADLINES</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4">   
                <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
              })}  
            </div>

        <div className="container d-flex justify-content-between">
          
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlepre}> &larr; Previous</button>
        <button disabled={this.state.page +1<Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handlenext}> Next &rarr; </button>
        </div>
        <p style={{ marginLeft : '475px'}} >@All Copy Rights Reserved By Iternational News Production Team</p>
        </div>
    )
  }
}

export default News
