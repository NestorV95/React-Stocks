import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor(){
    super()
    this.state={
      stocks: [],
      portfolio: [],
      filtered:[],
      // type: 'All'
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/stocks')
    .then(res=>res.json())
    .then(req=>{
      this.setState({
        stocks: req
      })
    })
  }

  tradeStock=(stonk)=>{
    this.state.stocks.includes(stonk)? 
      this.setState({
        stocks: this.state.stocks.filter(stock=> stock !== stonk),
        portfolio: [...this.state.portfolio, stonk]
      }) :
      this.setState({
        stocks: [...this.state.stocks, stonk],
        portfolio: this.state.portfolio.filter(stock=> stock !== stonk)
      })
  }

  sortStockName=()=>{
    this.setState({
      stocks: this.state.stocks.sort((stock1,stock2)=>stock1.name.localeCompare(stock2.name))
    })
  }

  sortStockPrice=()=>{
    this.setState({
      stocks: this.state.stocks.sort((stock1,stock2)=>stock1.price - stock2.price)
    })
  }

  

  sortStockType=(filter)=>{
    let allStocks = [...this.state.stocks, ...this.state.filtered]
    filter !== 'All'? this.setState({
    filtered: allStocks.filter(stock=> stock.type !== filter),
    stocks: allStocks.filter(stock=> stock.type === filter)
    }) : this.setState({
      stocks: allStocks,
      filtered: [],
    })
  }

  
  render() {
    return (
      <div>
        <SearchBar abc={this.sortStockName} price={this.sortStockPrice} type={this.sortStockType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} trade={this.tradeStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} trade={this.tradeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
