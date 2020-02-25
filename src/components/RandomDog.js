import React from 'react'
import axios from 'axios'

class RandomDog extends React.Component {

  constructor(){
    super()

    this.state = {
      data: []
    }

    this.handleRandomDog = this.handleRandomDog.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  getData() {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        const dog = {
          image: res.data.message
        }
        this.setState({ dog })


        console.log(this.state.dog.image, 'HELLLO')
      })
  }


  handleRandomDog(){
    this.getData()
  }

  render(){
    if(!this.state.dog) return null
    return(
      <div id="background_main" className="hero is-dark is-bold">
        <div className="hero-body hero-padding" id="section_background">
          <div className="container" id="container_main">
            <div id="div_main" className="columns is-centred">

              <div className="column is-two-thirds-desktop">

                <div id="welcome_all_letters">
                  <h1 id="welcome_letter" className="title is-1">Welcome to Woof Woof Dog Page</h1>
                  <h2 className="subtitle" id="welcome_subtitle">A site to Search for dog breeds</h2>
                </div>
                <div className="didi_layout" id="didi_icons_align">
                  <img id="didi" src="media/didi_2.png"  className="shake"/>
                  <img id="chococat" src="media/chococat.png" className="shake"/>
                </div>
              </div>
              <div id="random_image" className="column is-one-third has-text-centred">


                <button className="bone" onClick={this.handleRandomDog}>

                  <div className="c1"></div>
                  <div className="c2"></div>
                  <div className="c3"></div>
                  <div className="c4"></div>
                  <div className="b1">


                    <div className="b2">


                      Random Dog



                    </div>
                  </div>

                </button>


                <img src={this.state.dog.image} className="randomdog-show-image"/>

              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomDog
