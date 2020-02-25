import React from 'react'

const Loading = () => {

  return (
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered is-vcentered">
        <div className="container">
          <figure>
            <p id="loading_letter" className="title is-1">Woof Woof Loading</p>
            <img src="media/loading.gif"  />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Loading
