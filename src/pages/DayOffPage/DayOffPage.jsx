import React, { useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import TableComponent from "../../components/TableComponent/TableComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const DayOffPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState("");

  const handleDeleteDayOff = () => {
    setAction("deleteDayOff");
    setModalShow(true);
  };

  const handleUpdateDayOff = () => {
    setAction("updateDayOff");
    setModalShow(true);
  };

  const renderAction = (
    <div style={{ display: "flex", gap: 5 }}>
      <Button variant="danger" onClick={handleDeleteDayOff}>
        Xóa
      </Button>
      <Button variant="warning" onClick={handleUpdateDayOff}>
        Sửa
      </Button>
    </div>
  );

  //Table
  const headers = [
    "Stt",
    "Mã nhân viên",
    "Họ và tên",
    "Chức vụ",
    "Số ngày nghỉ",
    "Action",
  ];
  const dataSource = [
    {
      manv: "234567",
      fullName: "Nguyễn Thị Lan",
      role: "Nhân viên",
      dayoff: 1,
      action: renderAction,
    },
    {
      manv: "345678",
      fullName: "Phạm Văn Bình",
      role: "Quản lý",
      dayoff: 3,
      action: renderAction,
    },
    {
      manv: "456789",
      fullName: "Lê Thu Trang",
      role: "Nhân viên",
      dayoff: 2,
      action: renderAction,
    },
    {
      manv: "567890",
      fullName: "Trần Hoàng Nam",
      role: "Trưởng phòng",
      dayoff: 4,
      action: renderAction,
    },
    {
      manv: "678901",
      fullName: "Đỗ Hải Yến",
      role: "Nhân viên",
      dayoff: 0,
      action: renderAction,
    },
    {
      manv: "789012",
      fullName: "Bùi Minh Tuấn",
      role: "Nhân viên",
      dayoff: 1,
      action: renderAction,
    },
    {
      manv: "890123",
      fullName: "Hoàng Anh Quân",
      role: "Phó giám đốc",
      dayoff: 5,
      action: renderAction,
    },
  ];

  const renderCell = (item, rowIndex) => {
    return (
      <>
        <td>{rowIndex + 1}</td>
        <td>{item.manv}</td>
        <td>{item.fullName}</td>
        <td>{item.role}</td>
        <td>{item.dayoff}</td>
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
          <Breadcrumb.Item>Quản lý nhân viên</Breadcrumb.Item>
          <Breadcrumb.Item active>Ngày nghỉ</Breadcrumb.Item>
        </Breadcrumb>
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

export default DayOffPage;
