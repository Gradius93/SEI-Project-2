import React from 'react'
import RandomDog from './RandomDog'

class Home extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <section>
        <RandomDog />
        <div className="container">

        </div>
      </section>
    )
  }

}

export default Home
