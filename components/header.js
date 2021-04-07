import className from 'classnames'
import React from 'react'
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {is_open: false}
  }

  toggleMenu() {
      this.state.is_open === true ? this.setState({is_open: false}) : this.setState({is_open: true})
  }

  closeMenu() {
      this.setState({is_open: false})
  }

  render(){
    return (
        <div>
          <nav className="navbar is-origin-color is-fixed-top">
            <div className="navbar-brand">
              <div className="navbar-burger burger" data-target="navbarExampleTransparentExample" onClick={() => {
                this.toggleMenu()
                console.log('clicked!')
              }}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div id="navbarExampleTransparentExample" className={className('navbar-menu', {'is-active': this.state.is_open})}>
              <div className="navbar-end">
                <a className="navbar-item" href="#about">
          <span className="icon">
            <i className="fas fa-info"></i>
          </span>
                  <span>About</span>
                </a>
                <a className="navbar-item" href="#resume">
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
                  <span>Resume</span>
                </a>
                <a className="navbar-item" href="#portfolio">
          <span className="icon">
            <i className="fas fa-th-list"></i>
          </span>
                  <span>Portfolio</span>
                </a>
                <a className="navbar-item" href="#contact">
          <span className="icon">
            <i className="fas fa-envelope"></i>
          </span>
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
    )
  }

}

// TODO toggle の関数をつくる #12でやってね
export default Header
