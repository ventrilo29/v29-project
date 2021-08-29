import React, { Component } from 'react';

class Header extends Component {

    state = {
        food: '',
        nomer:0,
    }

    testClick = (anu) => {
        this.setState({
            food: anu.target.value
        })
    }

    testTambah = () => {
        this.setState((state, props)=>({
            nomer: state.nomer + 1
        }))
    }

    render(){
        return(
            <header>
                <div className="logo">LOGO</div>
                <input 
                    onChange = {this.testClick}
                />
                <br/>
                <button
                    onClick = {this.testTambah}
                >
                    Tambah
                </button>
                
                <div>{ this.state.food }</div>
                
                <div>{ this.state.nomer }</div>
            </header>
        )
    }
};

export default Header;