import React from 'react'
import Header from './Components/Header'
import MemeGenerator from './Components/MemeGenerator'
import "./style.css"

class App extends React.Component{
  constructor(){
    super()
    this.state={
    }
  }


  render(){
    return(
      <div>
        <Header/>      
        <MemeGenerator  images={this.state.images}/>
      </div>
    )
  }

}

export default App