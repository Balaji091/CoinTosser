// Write your code here
import './index.css'
import {Component} from 'react'
const imageList=['https://assets.ccbp.in/frontend/react-js/heads-img.png','https://assets.ccbp.in/frontend/react-js/tails-img.png']
class CoinToss extends Component{
    state={imageUrl:imageList[0],headCount:0,tailCount:0}
    randomImage=()=>{
        const randomIndex=Math.floor(Math.random()*imageList.length)
        if(randomIndex==0)
        {
            this.setState(prevState=>({headCount:prevState.headCount+1}))
        }
        else{
            this.setState(prevState=>({tailCount:prevState.tailCount+1}))
        }
        this.setState({imageUrl:imageList[randomIndex]})
    }
    render(){
        const{imageUrl,headCount,tailCount}=this.state
        return(
            <div className='total'>
               <div className='cont'>
                    <h1>Coin Toss Game</h1>
                    <p> Heads (or) details</p>
                    <img src={imageUrl}/>
                    <button onClick={this.randomImage}> Toss coin</button>
                    <div className='list'>
                        <p>total:{headCount+tailCount}</p>
                        <p>heads:{headCount}</p>
                        <p>tails:{tailCount}</p>
                    </div>
               </div>
            </div>
          
        )
    }

}
export default CoinToss