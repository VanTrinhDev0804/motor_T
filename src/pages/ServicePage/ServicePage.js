/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../../component/Footer/Footer";

export default function ServicePage() {
    return (
        <div>
            <div className="main__app container-fluid">
                <div className="Service pageChild">
                    <div className="pageChild__header">
                        <h2>dịch vụ</h2>
                    </div>
                    <div className="Service__content pageChild__content  ">
                        <div className="row mt-5">
                            <div className="Service__item col">
                                <a className="Service__link">
                                    <img src="../img/dichvu/check-goc-xe1560944038.jpg" alt="" />
                                    <div className="Service_info">

                                        <h5>
                                            CHECK GỐC XE MOTOR, XE PKL
                                        </h5>
                                        <p>

                                            <i className="bi bi-calendar-date"></i>
                                            10: 25 07-06-2019</p>
                                        <p>Nhanh chóng-Chính xác-Giá rẻ bất ngờ</p>
                                    </div>
                                </a>
                            </div>
                            <div className="Service__item col">
                                <a className="Service__link">
                                    <img src="../img/dichvu/thu-tuc-mua-ban-uy-quyen1560944849.png" alt="" />
                                    <div className="Service_info">

                                        <h5>
                                            THỦ TỤC MUA BÁN,ỦY QUYỀN XE PKL, XE MOTOR
                                        </h5>
                                        <p>
                                            <i className="bi bi-calendar-date"></i>
                                            07: 33 16-07-2018</p>
                                        <p>Giải quyết những khó khăn trong việc kí hợp đồng mua bán, ủy quyền xe</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="Service__item col">
                                <a className="Service__link">
                                    <img src="../img/dichvu/van-chuyencuu-ho-xe-mo-to-phan-khoi-lon1561004849.jpg" alt="" />
                                    <div className="Service_info">

                                        <h5>
                                            VẬN CHUYỂN, CỨU HỘ XE PHÂN KHỐI LỚN
                                        </h5>
                                        <p>

                                            <i className="bi bi-calendar-date"></i>
                                            10: 51 20-06-2019</p>
                                        <p>Chuyên nghiệp, an toàn, nhanh chóng</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col"></div>



                        </div>


                    </div>


                </div>

            </div>
            <Footer />
        </div>
    );
}