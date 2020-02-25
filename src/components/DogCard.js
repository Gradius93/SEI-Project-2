import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'

class DogCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dog: []
    }
  }

  componentDidMount(){
    const dog = {}
    axios.get('https://api.thedogapi.com/v1/images/search', {
      params: {
        breed_id: this.props.id
      }
    })
      .then(res => {
        dog.image = res.data[0].url
        this.setState({ dog })
      })

  }

  render() {
    console.log(this.props.id, 'DIDIIIIIIIohohohoho')
    if(!this.state.dog) return <Loading />
    return(
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by4">
            <Link to={`/dogs/${this.props.id}`}>
              {<img src={this.state.dog.image} alt={this.props.name} />}
            </Link>
          </figure>
        </div>

        <Link to={`/dogs/${this.props.id}`}><div id="subtitle_is5" className="subtitle is-size-4">{this.props.name}</div></Link>
      </div>
    )
  }
}

export default DogCard
