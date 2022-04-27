import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac, index) => {
            return <img key={index} className="ml-2" style={{ width: 40, height: 40 }} src={xucXac.hinhAnh} alt={xucXac.maXX} />
        })
    }
    render() {

        return (
            <div>
                {/* <img className="ml-2" style={{ width: 40, height: 40 }} src="./img/1.png" alt="1.png" />
                <img className="ml-2" style={{ width: 40, height: 40 }} src="./img/1.png" alt="1.png" />
                <img className="ml-2" style={{ width: 40, height: 40 }} src="./img/1.png" alt="1.png" /> */}
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BaiTapXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac)