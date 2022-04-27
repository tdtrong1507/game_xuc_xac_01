import React, { Component } from 'react'
import './BaiTapGameXucXac.css'
import ThongTinTroChoi from './ThongTinTroChoi'
import XucXac from './XucXac'
import { connect } from 'react-redux'


class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='game'>
                <div className='container text-center mt-5'>
                    <h1>Bài tập game xúc xắc</h1>

                    <div className='row mt-5 mb-3'>

                        <div className='col-5'>
                            <button onClick={() => { this.props.chonTaiXiu(true) }} className='btnXucXac'>Tài</button>
                        </div>
                        <div className='col-2'>
                            <XucXac></XucXac>
                        </div>
                        <div className='col-5'>
                            <button onClick={() => { this.props.chonTaiXiu(false) }} className='btnXucXac'>Xỉu</button>
                        </div>

                    </div>

                    <div className='gameInfo text-center'>
                        <ThongTinTroChoi />
                        <button onClick={() => { this.props.playGame() }} style={{ fontSize: 20 }} className='btn btn-success p-2 mt-4'>Play game</button>
                    </div>

                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiHayXiu) => {
            let action = {
                type: 'DAT_CUOC',
                data: taiHayXiu
            }
            dispatch(action)
        },

        playGame: () => {
            let action = {
                type: 'CHOI_GAME',
            }
            dispatch(action)
        }
    }
}


export default connect(null, mapDispatchToProps)(BaiTapGameXucXac)