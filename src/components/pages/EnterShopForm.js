import React, { Component } from 'react'

export class EnterShopForm extends Component {
    constructor(props){
        super(props)
        this.state = {
          value: '',
          submitted: false,
        }
      }

      handleChange = event => {
          this.setState({ value: event.target.value })
      }

      handleSubmit = event => {
        event.preventDefault()
        this.setState({ submitted: !this.state.submitted }) //currently toggling on button clickdont want this
      }

      comp

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    name='user'
                    />
                </label>
                <input 
                    type="submit" 
                    value="Submit" 
                    />
            </form>
            <div>
                <h3>Name</h3>
                {!this.state.submitted ? //fix this logic, not appearing properly
                <div> {this.state.value} </div> :
                <div> {null} </div> }
            </div>
          </div>
        )
    }
}

export default EnterShopForm
