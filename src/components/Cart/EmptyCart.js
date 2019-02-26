import React from 'react'

export default function EmptyCart() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-10 mx-auto text-center text-title jumbotron text-blue'>
          <h1>
            <strong>Cart is currently empty</strong>
          </h1>
        </div>
      </div>
    </div>
  )
}
