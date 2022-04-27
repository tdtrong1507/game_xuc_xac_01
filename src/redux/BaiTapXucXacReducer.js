
const initialState = {
    taiXiu: true, // Tài là true, xỉu là False
    mangXucXac: [
        { maXX: 2, hinhAnh: "./img/2.png" },
        { maXX: 3, hinhAnh: "./img/3.png" },
        { maXX: 4, hinhAnh: "./img/4.png" },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}

const BaiTapXucXacReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.taiXiu = action.data
            // console.log("action", state.taiXiu)
            return { ...state }
        }; break;

        case 'CHOI_GAME': {

            let xucXac1 = Math.floor(Math.random() * 6) + 1;
            let xucXac2 = Math.floor(Math.random() * 6) + 1;
            let xucXac3 = Math.floor(Math.random() * 6) + 1;
            let tongDiem = xucXac1 + xucXac2 + xucXac3;
            console.log("xuc xac", xucXac1, xucXac2, xucXac3, tongDiem);

            let mangXucXacCapNhat = [
                { maXX: xucXac1, hinhAnh: `./img/${xucXac1}.png` },
                { maXX: xucXac2, hinhAnh: `./img/${xucXac2}.png` },
                { maXX: xucXac3, hinhAnh: `./img/${xucXac3}.png` },
            ]

            if (tongDiem <= 10 && state.taiXiu === false) {
                state.soBanThang += 1

            } else if (tongDiem >= 11 && state.taiXiu === true) {
                state.soBanThang += 1

            }

            state.tongSoBanChoi += 1
            state.mangXucXac = mangXucXacCapNhat
            return { ...state }
        }; break;
        default:
            return { ...state }
    }
};

export default BaiTapXucXacReducer;