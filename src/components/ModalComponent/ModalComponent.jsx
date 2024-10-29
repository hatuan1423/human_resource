import { useState } from "react";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";

function ModalComponent(props) {
  const { show, onHide, isShowLogin, action } = props;
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Modal
        size={
          isShowLogin ||
          action === "deleteAccount" ||
          action === "deleteStaff" ||
          action === "deleteSalary" ||
          action === "deleteDetailStaff" ||
          action === "deleteDayOff"
            ? "md"
            : "lg"
        }
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
        centered
      >
        {isShowLogin && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Đăng nhập</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Type your émail"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Type your password"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "addAccount" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Thêm tài khoản</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="User name" />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Email" />
                  </Col>
                  <Col>
                    <Form.Label>Quyền</Form.Label>
                    <Form.Control placeholder="Quyền" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control placeholder="Quê quán" />
                  </Col>
                  <Col>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control placeholder="Số điện thoại" />
                  </Col>
                </Row>

                <Row>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>

                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control placeholder="Căn cước công dân" />
                  </Col>
                </Row>

                <Row>
                  <Col style={{ display: "flex" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check type="radio" label="Nam" name="sex" inline />
                    <Form.Check type="radio" label="Nữ" name="sex" inline />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "deleteAccount" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Xoá tài khoản</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Bạn có chắc muốn xóa tài khoản này không ?</FormLabel>
            </Modal.Body>
          </>
        )}

        {action === "updateAccount" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa tài khoản</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="User name" value={"lvhieu"} />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      placeholder="Fulll name"
                      value={"Lê Văn Hiếu"}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Email"
                      value={"hieu.le@gmail.com"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Quyền</Form.Label>
                    <Form.Control placeholder="Quyền" value={"Quản lý"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control placeholder="Quê quán" value={"Hải Phòng"} />
                  </Col>
                  <Col>
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      placeholder="Số điện thoại"
                      value={"0987654321"}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker value="15/11/1990" />
                  </Col>

                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control
                      placeholder="Căn cước công dân"
                      value={"9876543210987"}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col style={{ display: "flex" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check
                      checked
                      type="radio"
                      label="Nam"
                      name="sex"
                      inline
                    />
                    <Form.Check type="radio" label="Nữ" name="sex" inline />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "addStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Thêm nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control placeholder="Mã nhân viên" />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control placeholder="Họ và tên" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control placeholder="Căn cước công dân" />
                  </Col>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control placeholder="Quê quán" />
                  </Col>
                  <Col>
                    <Form.Label>Tình trạng</Form.Label>
                    <Form.Control placeholder="Tình trạng" />
                  </Col>
                </Row>

                <Row>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>

                  <Col>
                    <Form.Group controlId="formFile">
                      <Form.Label>Avatar</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col style={{ display: "flex" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check type="radio" label="Nam" name="sex" inline />
                    <Form.Check type="radio" label="Nữ" name="sex" inline />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "deleteStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Xoá nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Bạn có chắc muốn xóa nhân viên này không ?</FormLabel>
            </Modal.Body>
          </>
        )}

        {action === "updateStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control placeholder="Mã nhân viên" value={"238947"} />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      placeholder="Họ và tên"
                      value={"Phạm Thị Duy"}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control
                      placeholder="Căn cước công dân"
                      value={"037482015683"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" value={"Nhân viên"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control
                      placeholder="Quê quán"
                      value={"Hồ Chí Minh"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Tình trạng</Form.Label>
                    <Form.Control placeholder="Tình trạng" value={"Đã nghỉ"} />
                  </Col>
                </Row>

                <Row>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker value="03/09/1997" />
                  </Col>

                  <Col>
                    <Form.Group controlId="formFile">
                      <Form.Label>Avatar</Form.Label>
                      <Form.Control
                        type="file"
                        src="https://w7.pngwing.com/pngs/732/397/png-transparent-computer-icons-avatar-woman-user-avatar-child-face-heroes-thumbnail.png"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col style={{ display: "flex" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check type="radio" label="Nam" name="sex" inline />
                    <Form.Check
                      checked
                      type="radio"
                      label="Nữ"
                      name="sex"
                      inline
                    />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "addDetailStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Thêm thông tin nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control placeholder="Mã nhân viên" />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control placeholder="Họ và tên" />
                  </Col>
                  <Col>
                    <Form.Label>Nơi sinh</Form.Label>
                    <Form.Control placeholder="Nơi sinh" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quốc tịch</Form.Label>
                    <Form.Control placeholder="Quốc tịch" />
                  </Col>
                  <Col>
                    <Form.Label>Hộ khẩu</Form.Label>
                    <Form.Control placeholder="Hộ khẩu" />
                  </Col>
                  <Col>
                    <Form.Label>Ngày cấp CCCD</Form.Label>
                    <Form.Control placeholder="Ngày cấp CCCD" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Trình độ</Form.Label>
                    <Form.Control placeholder="Trình độ" />
                  </Col>
                  <Col>
                    <Form.Label>Phòng ban</Form.Label>
                    <Form.Control placeholder="Phòng ban" />
                  </Col>
                  <Col>
                    <Form.Label>Tình trạng hôn nhân</Form.Label>
                    <Form.Control placeholder="Tình trạng hôn nhân" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Nơi cấp CCCD</Form.Label>
                    <Form.Control placeholder="Nơi cấp CCCD" />
                  </Col>
                  <Col>
                    <Form.Label>Dân tộc</Form.Label>
                    <Form.Control placeholder="Dân tộc" />
                  </Col>
                  <Col style={{ display: "flex", marginTop: "30px" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check type="radio" label="Nam" name="sex" inline />
                    <Form.Check type="radio" label="Nữ" name="sex" inline />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Chuyên môn</Form.Label>
                    <Form.Control placeholder="Chuyên môn" />
                  </Col>
                  <Col>
                    <Form.Label>Tạm trú</Form.Label>
                    <Form.Control placeholder="Tạm trú" />
                  </Col>
                  <Col>
                    <Form.Label>Nguyên quán</Form.Label>
                    <Form.Control placeholder="Nguyên quán" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Tôn giáo</Form.Label>
                    <Form.Control placeholder="Tôn giáo" />
                  </Col>
                  <Col>
                    <Form.Label>Loại nhân viên</Form.Label>
                    <Form.Control placeholder="Loại nhân viên" />
                  </Col>
                  <Col>
                    <Form.Label>Bằng cấp</Form.Label>
                    <Form.Control placeholder="Bằng cấp" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control placeholder="Căn cước công dân" />
                  </Col>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" />
                  </Col>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control placeholder="Quê quán" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Tình trạng</Form.Label>
                    <Form.Control placeholder="Tình trạng" />
                  </Col>

                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Col>

                  <Col>
                    <Form.Group controlId="formFile">
                      <Form.Label>Avatar</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "deleteDetailStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Xoá nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Bạn có chắc muốn xóa nhân viên này không ?</FormLabel>
            </Modal.Body>
          </>
        )}

        {action === "updateDetailStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa thông tin nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control value={"NV12345"} />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control value={"Nguyễn Văn Anh"} />
                  </Col>
                  <Col>
                    <Form.Label>Nơi sinh</Form.Label>
                    <Form.Control value={"Hà Nội"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Quốc tịch</Form.Label>
                    <Form.Control value={"Việt Nam"} />
                  </Col>
                  <Col>
                    <Form.Label>Hộ khẩu</Form.Label>
                    <Form.Control value={"TP. Hồ Chí Minh"} />
                  </Col>
                  <Col>
                    <Form.Label>Ngày cấp CCCD</Form.Label>
                    <Form.Control value={"2020-05-10"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Trình độ</Form.Label>
                    <Form.Control value={"Đại học"} />
                  </Col>
                  <Col>
                    <Form.Label>Phòng ban</Form.Label>
                    <Form.Control value={"Kinh doanh"} />
                  </Col>
                  <Col>
                    <Form.Label>Tình trạng hôn nhân</Form.Label>
                    <Form.Control value={"Độc thân"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Nơi cấp CCCD</Form.Label>
                    <Form.Control value={"Công an TP. Hồ Chí Minh"} />
                  </Col>
                  <Col>
                    <Form.Label>Dân tộc</Form.Label>
                    <Form.Control value={"Kinh"} />
                  </Col>
                  <Col style={{ display: "flex", marginTop: "30px" }}>
                    <Form.Label style={{ marginRight: "20px" }}>
                      Giới tính
                    </Form.Label>
                    <Form.Check
                      checked
                      type="radio"
                      label="Nam"
                      name="sex"
                      inline
                    />
                    <Form.Check type="radio" label="Nữ" name="sex" inline />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Chuyên môn</Form.Label>
                    <Form.Control value={"Quản trị kinh doanh"} />
                  </Col>
                  <Col>
                    <Form.Label>Tạm trú</Form.Label>
                    <Form.Control value={"Quận 1, TP. Hồ Chí Minh"} />
                  </Col>
                  <Col>
                    <Form.Label>Nguyên quán</Form.Label>
                    <Form.Control value={"Nam Định"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Tôn giáo</Form.Label>
                    <Form.Control value={"Không"} />
                  </Col>
                  <Col>
                    <Form.Label>Loại nhân viên</Form.Label>
                    <Form.Control value={"Chính thức"} />
                  </Col>
                  <Col>
                    <Form.Label>Bằng cấp</Form.Label>
                    <Form.Control value={"Cử nhân"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Căn cước công dân</Form.Label>
                    <Form.Control value={"0123456789"} />
                  </Col>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control value={"Nhân viên"} />
                  </Col>
                  <Col>
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control value={"Nam Định"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Tình trạng</Form.Label>
                    <Form.Control value={"Đang làm việc"} />
                  </Col>

                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker value="1995-08-15" />
                  </Col>

                  <Col>
                    <Form.Group controlId="formFile">
                      <Form.Label>Avatar</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "detailStaff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Thông tin nhân viên</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col sm={3}>
                  <img
                    style={{ marginLeft: "10px" }}
                    width={200}
                    src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                    alt=""
                  />
                </Col>
                <Col sm={8} style={{ paddingLeft: "50px" }}>
                  <Row>
                    <Col sm={5}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h6>Họ và tên:</h6>
                        <h6>Nơi sinh:</h6>
                        <h6>Quốc tịch:</h6>
                        <h6>Hộ khẩu:</h6>
                        <h6>Ngày cấp CCCD:</h6>
                        <h6>Trình độ:</h6>
                        <h6>Phòng ban:</h6>
                        <h6>Tình trạng hôn nhân:</h6>
                        <h6>Nơi cấp CCCD:</h6>
                        <h6>Dân tộc:</h6>
                        <h6>Giới tính:</h6>
                        <h6>Chuyên môn:</h6>
                        <h6>Tạm trú:</h6>
                        <h6>Nguyên quán:</h6>
                        <h6>Tôn giáo:</h6>
                        <h6>Loại nhân viên:</h6>
                        <h6>Bằng cấp:</h6>
                        <h6>Căn cước công dân:</h6>
                        <h6>Chức vụ:</h6>
                        <h6>Quê quán:</h6>
                        <h6>Tình trạng:</h6>
                        <h6>Ngày sinh:</h6>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <p>Nguyễn Văn Anh</p>
                      <p>Hà Nội</p>
                      <p>Việt Nam</p>
                      <p>TP. Hồ Chí Minh</p>
                      <p>2020-05-10</p>
                      <p>Đại học</p>
                      <p>Kinh doanh</p>
                      <p>Độc thân</p>
                      <p>Công an TP. Hồ Chí Minh</p>
                      <p>Kinh</p>
                      <p>Nam</p>
                      <p>Quản trị kinh doanh</p>
                      <p>Quận 1, TP. Hồ Chí Minh</p>
                      <p>Nam Định</p>
                      <p>Không</p>
                      <p>Chính thức</p>
                      <p>Cử nhân</p>
                      <p>0123456789</p>
                      <p>Nhân viên</p>
                      <p>Nam Định</p>
                      <p>Đang làm việc</p>
                      <p>1995-08-15</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Modal.Body>
          </>
        )}

        {action === "deleteDayOff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Xoá</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Bạn có chắc muốn xóa không ?</FormLabel>
            </Modal.Body>
          </>
        )}

        {action === "updateDayOff" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa ngày nghỉ</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control value={"234325"} />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control value={"Nguyễn Thị Lan"} />
                  </Col>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control value={"Nhân viên"} />
                  </Col>
                  <Col>
                    <Form.Label>Số ngày nghỉ</Form.Label>
                    <Form.Control value={"1"} />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "deleteSalary" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Xoá</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormLabel>Bạn có chắc muốn xóa không ?</FormLabel>
            </Modal.Body>
          </>
        )}

        {action === "updateSalary" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Chỉnh sửa bảng lương</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control
                      placeholder="Mã nhân viên"
                      value={"12345678"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control
                      placeholder="Fulll name"
                      value={"Nguyễn Thị Hương"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" value={"Nhân viên"} />
                  </Col>
                  <Col>
                    <Form.Label>Ngày công</Form.Label>
                    <Form.Control placeholder="Ngày công" value={"28"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Lương tháng</Form.Label>
                    <Form.Control
                      placeholder="Lương tháng"
                      value={"9.000.000"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Phụ cấp</Form.Label>
                    <Form.Control placeholder="Phụ cấp" value={"800.000"} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Ngày chấm công</Form.Label>
                    <Form.Control
                      placeholder="Ngày chấm công"
                      value={"01/10/2023"}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Thực nhận</Form.Label>
                    <Form.Control placeholder="Thực nhận" value={"9.500.000"} />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "addSalary" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Thêm bảng lương</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control placeholder="Mã nhân viên" />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control placeholder="Fulll name" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" />
                  </Col>
                  <Col>
                    <Form.Label>Ngày công</Form.Label>
                    <Form.Control placeholder="Ngày công" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Lương tháng</Form.Label>
                    <Form.Control placeholder="Lương tháng" />
                  </Col>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày sinh
                    </Form.Label>
                    <DatePicker value="01/01/2019" />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "handleSalary" && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Tính lương</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Mã nhân viên</Form.Label>
                    <Form.Control placeholder="Mã nhân viên" />
                  </Col>
                  <Col>
                    <Form.Label>Họ và tên</Form.Label>
                    <Form.Control placeholder="Fulll name" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Chức vụ</Form.Label>
                    <Form.Control placeholder="Chức vụ" />
                  </Col>
                  <Col>
                    <Form.Label>Ngày công</Form.Label>
                    <Form.Control placeholder="Ngày công" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Lương tháng</Form.Label>
                    <Form.Control placeholder="Lương tháng" />
                  </Col>
                  <Col>
                    <Form.Label>Phụ cấp</Form.Label>
                    <Form.Control placeholder="Phụ cấp" />
                  </Col>
                </Row>

                <Row>
                  <Col
                    style={{
                      marginTop: "20px",
                      display: "flex",
                    }}
                  >
                    <Form.Label style={{ marginRight: "10px" }}>
                      Ngày tính lương
                    </Form.Label>
                    <DatePicker value="01/01/2019" />
                  </Col>
                  <Col>
                    <Form.Label>Tạm ứng</Form.Label>
                    <Form.Control placeholder="Tạm ứng" />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Label>Thực nhận</Form.Label>
                    <Form.Control placeholder="Thực nhận" />
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </>
        )}

        {action === "detailStaff" ? (
          ""
        ) : (
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Hủy
            </Button>
            <Button variant="primary">
              {isShowLogin ? "Đăng nhập" : "Xác nhận"}
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}

export default ModalComponent;
