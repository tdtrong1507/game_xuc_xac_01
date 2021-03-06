import React, { Component } from 'react'
import { connect } from 'react-redux'


class ThongTinTroChoi extends Component {
    render() {

        return (
            <div>
                <div className='display-4'>BẠN CHỌN: <span className='text-danger'>{this.props.taiXiu ? "Tài" : "Xỉu"}</span></div>
                <div className='display-4'>BẠN THẮNG: <span className='text-success'>{this.props.soBanThang}</span></div>
                <div className='display-4'>TỔNG SỐ BÀN CHƠI: <span className='text-primary'>{this.props.tongSoBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        taiXiu: state.BaiTapXucXacReducer.taiXiu,
        soBanThang: state.BaiTapXucXacReducer.soBanThang,
        tongSoBanChoi: state.BaiTapXucXacReducer.tongSoBanChoi,
    }

}



export default connect(mapStateToProps)(ThongTinTroChoi)