import React from 'react'
import axios from 'axios'
import Loading from './Loading'

class DogShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dog: null
    }
  }



  componentDidMount(){
    axios.get(`https://api.thedogapi.com/v1/breeds/${this.props.match.params.id}`)
      .then(res => {
        const dog = res.data
        axios.get('https://api.thedogapi.com/v1/images/search', {
          params: {
            breed_id: this.props.match.params.id
          }
        })
          .then(res => {
            dog.image = res.data[0].url
            this.setState({ dog })
          })
      })
  }

  render() {
    if(!this.state.dog) return  <Loading />
    console.log(this.state.name)
    return(
      <div className="container" id="section_dog_show">
        <section className="section" id="section_dog_show">
          <div className="columns">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-4by4">
                <img src={this.state.dog.image} alt={this.state.dog.name} className="dog-show-image"/>
              </figure>
            </div>
            <div className="column is-two-thirds-desktop">
              <div className="title is-3" id="dog_show_title">{this.state.dog.name}</div>
              <hr id="hr1"/ >


              <div className="column is-full-desktop is-full-tablet" id="dog_show_card">
                <div><strong>Breed for:</strong> {this.state.dog.bred_for}</div>

                <br />
                <div><strong>Temperament:</strong> {this.state.dog.temperament}</div>
              </div>
            </div>
          </div>
        </section>

      </div>

    )
  }
}


export default DogShow
