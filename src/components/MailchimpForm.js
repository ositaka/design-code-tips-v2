import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react'

export default class MailchimpForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      listFields: '',
      result: null,
      isSubscribed: false,
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const result = await addToMailchimp(this.state.email, this.state.listFields)
    this.setState({ result: result, msg: result.msg })

    if (result && result.result === 'success') {
      this.setState({ isSubscribed: true })
    } else if (result && result.result === 'error') {
      window.alert(result.msg)
    }
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handleChangeName = (event) => {
    this.setState({
      listFields: {
        FNAME: event.target.value,
      },
    })
  }

  render() {
    return (
      <>
        <div
          style={
            this.state.isSubscribed ? { display: 'none' } : { display: 'block' }
          }
        >
          <h1>Subscribe Newsletter</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label htmlFor="FNAME">Name</label>
              <input
                type="text"
                onChange={this.handleChangeName}
                autoComplete="Name"
                name="FNAME"
                id="FNAME"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                onChange={this.handleChangeEmail}
                autoComplete="email"
                name="email"
                className="required"
                id="email"
              />
            </div>
            <button className="submit">Subscribe</button>
          </form>
        </div>

        <div
          style={
            this.state.isSubscribed ? { display: 'block' } : { display: 'none' }
          }
        >
          <h1 style={{ color: 'white' }}>{this.state.msg}</h1>
        </div>
      </>
    )
  }
}
