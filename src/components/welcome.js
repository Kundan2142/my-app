import React, { Component, Fragment } from 'react'


class Welcome extends Component
{
  constructor(props)
  {
    super(props)
    {
      this.state = {
        count : 0
      }
    }
  }

   increment()
   {
      this.setState(
        {
          count : this.state.count + 1
        }
      )
   }
  render()
  {
    return(
      <Fragment>
      <div className='container'>
        
      <div className='first'>
        Welcome  -  {this.state.count}

      </div>
      <div>
        <button onClick= {()=>this.increment()}>Increment</button>
      </div>
      </div>
      </Fragment>
    )
  }
}

export default Welcome
