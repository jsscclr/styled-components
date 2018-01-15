import React, { Component } from "react"
import { getShowById } from "../api"

/*
 * This function takes an arbitrary component and, if
 * provided a showId, fetches data of that show, and returns
 * the same component with show data injected as props. 
 */
const withShow = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        show: null,
      }

      this.receiveShowData = this.receiveShowData.bind(this)
    }

    componentWillMount() {
      getShowById(this.props.showId).then(this.receiveShowData)
    }

    receiveShowData(show) {
      this.setState({ show })
    }

    render() {
      if (this.state.show) {
        return <WrappedComponent {...this.state.show} />
      }

      return null
    }
  }

export default withShow
