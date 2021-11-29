import React from "react";

function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="row p-5">
                <div className="col-xl">
                    <div className="footer-info">
                        <h2>TST MOTOR</h2>
                        <div className="footer-info-pragrap ">
                            <p>Design by : Nguyễn Văn Trinh</p>



                        </div>
                    </div>
                </div>
                <div className="col-xl">
                    <div className="row text-uppercase">
                        <div className="col-sm">
                            <h6>Chính sách hỗ trợ</h6>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Giảm giá các dịch vụ</p>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Chế độ đổi trả</p>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Chế độ bảo hành </p>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Chế độ pháp lí</p>

                        </div>
                        <div className="col-sm">
                            <h6>Dịch vụ</h6>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Hướng dẫn mua xe PKL trả góp tại TST Motor</p>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Vận chuyển cứu hộ xe Mô tô phân khối lớn</p>
                            <p>
                                <i className="bi bi-caret-right-fill"></i>
                                Thủ tục mua bán, ủy quyền xe PKL, xe motor</p>
                        </div>

                    </div>
                </div>
                <div className="col-xl ">
                    <div className="address">
                        <img src="../img/haHdong/map.png" alt="" width="100%" />
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Footer;