import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className="card_Comp my-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <img src="https://source.unsplash.com/random/?food" className="card-img-top" alt="..." style={{width:'100%', height: '200px'}} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
            <div className="col-3">
              <div className="card">
                <img src="https://source.unsplash.com/random/?ocean" className="card-img-top" alt="..." style={{width:'100%',height: '200px'}} />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
            <div className="col-3">
              <div className="card">
                <img src="https://source.unsplash.com/random/?forest" className="card-img-top" alt="..." style={{width:'100%',height: '200px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
            <div className="col-3">
              <div className="card">
                <img src="https://source.unsplash.com/random/?sky" className="card-img-top" alt="..." style={{width:'100%',height: '200px'}}/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
