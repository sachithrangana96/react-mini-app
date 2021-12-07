import React, { Component } from 'react'

class like extends Component {
    render() {
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return (<i onClick={this.props.onClick} style={{cursor:"pointer"}} className={classes} aria-hidden="true"></i>)
    }
}

export default like
