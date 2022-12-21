import React, { Component } from 'react'

export default class CarouselComponent extends Component {
    render() {
        return (
            <div className="carousel_Comp d-flex align-items-center">
                <div className='container bg-light my-5'>
                    <div className='px-5 py-5 my-5'>
                        <h1>A warm welcome!</h1>
                        <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className='btn btn-primary'>Call a Action</button>
                    </div>
                </div>

            </div>
        )
    }
}
