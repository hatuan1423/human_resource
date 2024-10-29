import React, { useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import TableComponent from "../../components/TableComponent/TableComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const ManageAccountPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState("");

  const handleDeleteAccount = () => {
    setAction("deleteAccount");
    setModalShow(true);
  };

  const handleAddAccount = () => {
    setAction("addAccount");
    setModalShow(true);
  };

  const handleUpdateAccount = () => {
    setAction("updateAccount");
    setModalShow(true);
  };

  const renderAction = (
    <div style={{ display: "flex", gap: 5 }}>
      <Button variant="danger" onClick={handleDeleteAccount}>
        Xóa
      </Button>
      <Button variant="warning" onClick={handleUpdateAccount}>
        Sửa
      </Button>
    </div>
  );

  //Table
  const headers = [
    "Stt",
    "Username",
    "Họ và tên",
    "Email",
    "Quyền",
    "Quê quán",
    "Số điện thoại",
    "Ngày sinh",
    "Giới tính",
    "Căn cước công dân",
    "Action",
  ];
  const dataSource = [
    {
      userName: "dhtuan",
      fullName: "Dương Hà Tuấn",
      email: "hatuan1423@gmail.com",
      role: "Nhân viên",
      address: "Quảng Nam",
      phone: "0901942192",
      dateOfBirth: "19/08/2003",
      sex: "Nam",
      iden: "0492030123456",
      action: renderAction,
    },
    {
      userName: "huynhphuoctai",
      fullName: "Huỳnh Phước Tài",
      email: "huynhphuoctai@gmail.com",
      role: "Nhân viên",
      address: "Hội An",
      phone: "012345678",
      dateOfBirth: "01/01/11111",
      sex: "Nam",
      iden: "0123456778",
      action: renderAction,
    },
    {
      userName: "nguyenvoanhquyen",
      fullName: "Nguyễn Võ Anh Quyền",
      email: "nguyenvoanhquyen@gmail.com",
      role: "Nhân viên",
      address: "Việt Nam",
      phone: "0123456788",
      dateOfBirth: "01/01/2001",
      sex: "Nam",
      iden: "0123456789",
      action: renderAction,
    },
    {
      userName: "nthoa",
      fullName: "Nguyễn Thị Thoa",
      email: "thoa.nguyen@gmail.com",
      role: "Nhân viên",
      address: "Hà Nội",
      phone: "0902345678",
      dateOfBirth: "22/03/1995",
      sex: "Nữ",
      iden: "1234567890123",
      action: renderAction,
    },
    {
      userName: "lvhieu",
      fullName: "Lê Văn Hiếu",
      email: "hieu.le@gmail.com",
      role: "Quản lý",
      address: "Hải Phòng",
      phone: "0987654321",
      dateOfBirth: "15/11/1990",
      sex: "Nam",
      iden: "9876543210987",
      action: renderAction,
    },
    {
      userName: "ptminh",
      fullName: "Phạm Thị Minh",
      email: "minh.pham@gmail.com",
      role: "Nhân viên",
      address: "Đà Nẵng",
      phone: "0911223344",
      dateOfBirth: "10/06/1998",
      sex: "Nữ",
      iden: "4567890123456",
      action: renderAction,
    },
    {
      userName: "dqnam",
      fullName: "Đoàn Quốc Nam",
      email: "nam.doan@gmail.com",
      role: "Nhân viên",
      address: "Nha Trang",
      phone: "0903322110",
      dateOfBirth: "05/01/1992",
      sex: "Nam",
      iden: "3210987654321",
      action: renderAction,
    },
    {
      userName: "hptam",
      fullName: "Huỳnh Phương Tâm",
      email: "tam.huynh@gmail.com",
      role: "Nhân viên",
      address: "Cần Thơ",
      phone: "0934556677",
      dateOfBirth: "29/09/2000",
      sex: "Nữ",
      iden: "2109876543210",
      action: renderAction,
    },
  ];

  const renderCell = (item, rowIndex) => {
    return (
      <>
        <td>{rowIndex + 1}</td>
        <td>{item.userName}</td>
        <td>{item.fullName}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>{item.address}</td>
        <td>{item.phone}</td>
        <td>{item.dateOfBirth}</td>
        <td>{item.sex}</td>
        <td>{item.iden}</td>
        <td>{item.action}</td>
      </>
    );
  };
  return (
    <div
      style={{
        width: "100%",
        height: "640px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Quản lý</Breadcrumb.Item>
          <Breadcrumb.Item active>Danh sách tài khoản</Breadcrumb.Item>
        </Breadcrumb>
        <Button onClick={handleAddAccount}>Thêm tài khoản</Button>
        <ModalComponent
          show={modalShow}
          action={action}
          onHide={() => setModalShow(false)}
        />
      </div>

      <TableComponent
        headers={headers}
        dataSource={dataSource}
        renderCell={renderCell}
      />
    </div>
  );
};

export default ManageAccountPage;
