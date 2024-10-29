import React, { useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import TableComponent from "../../components/TableComponent/TableComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const SalaryPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const [action, setAction] = useState("");

  const handleDelete = () => {
    setAction("deleteSalary");
    setModalShow(true);
  };

  const handleAdd = () => {
    setAction("addSalary");
    setModalShow(true);
  };

  const handleUpdate = () => {
    setAction("updateSalary");
    setModalShow(true);
  };

  const handleSalary = () => {
    setAction("handleSalary");
    setModalShow(true);
  };

  const renderAction = (
    <div style={{ display: "flex", gap: 5 }}>
      <Button variant="danger" onClick={handleDelete}>
        Xóa
      </Button>
      <Button variant="warning" onClick={handleUpdate}>
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
    "Ngày công",
    "Lương tháng",
    "Phụ cấp",
    "Ngày chấm công",
    "Thực nhận",
    "Action",
  ];
  const dataSource = [
    {
      maluong: "27211202",
      fullName: "Dương Hà Tuấn",
      role: "Nhân viên",
      ngaycong: "30",
      luongthang: "10.000.000",
      phucap: "1.000.000",
      ngaychamcong: "19/08/2003",
      thucnhan: "10.500.000",
      action: renderAction,
    },
    {
      maluong: "12345678",
      fullName: "Nguyễn Thị Hương",
      role: "Nhân viên",
      ngaycong: "28",
      luongthang: "9.000.000",
      phucap: "800.000",
      ngaychamcong: "01/10/2023",
      thucnhan: "9.500.000",
      action: renderAction,
    },
    {
      maluong: "23456789",
      fullName: "Trần Văn Tuấn",
      role: "Trưởng phòng",
      ngaycong: "30",
      luongthang: "15.000.000",
      phucap: "1.500.000",
      ngaychamcong: "02/10/2023",
      thucnhan: "16.200.000",
      action: renderAction,
    },
    {
      maluong: "34567890",
      fullName: "Phạm Thị Lan",
      role: "Nhân viên",
      ngaycong: "26",
      luongthang: "8.500.000",
      phucap: "700.000",
      ngaychamcong: "03/10/2023",
      thucnhan: "9.000.000",
      action: renderAction,
    },
    {
      maluong: "45678901",
      fullName: "Lê Hoàng Nam",
      role: "Phó phòng",
      ngaycong: "29",
      luongthang: "12.000.000",
      phucap: "1.200.000",
      ngaychamcong: "04/10/2023",
      thucnhan: "13.000.000",
      action: renderAction,
    },
    {
      maluong: "56789012",
      fullName: "Đỗ Minh Châu",
      role: "Nhân viên",
      ngaycong: "27",
      luongthang: "9.200.000",
      phucap: "900.000",
      ngaychamcong: "05/10/2023",
      thucnhan: "9.900.000",
      action: renderAction,
    },
    {
      maluong: "67890123",
      fullName: "Nguyễn Văn Bình",
      role: "Giám đốc",
      ngaycong: "30",
      luongthang: "20.000.000",
      phucap: "2.500.000",
      ngaychamcong: "06/10/2023",
      thucnhan: "22.500.000",
      action: renderAction,
    },
    {
      maluong: "78901234",
      fullName: "Vũ Thị Mai",
      role: "Nhân viên",
      ngaycong: "25",
      luongthang: "7.800.000",
      phucap: "600.000",
      ngaychamcong: "07/10/2023",
      thucnhan: "8.200.000",
      action: renderAction,
    },
  ];

  const renderCell = (item, rowIndex) => {
    return (
      <>
        <td>{rowIndex + 1}</td>
        <td>{item.maluong}</td>
        <td>{item.fullName}</td>
        <td>{item.role}</td>
        <td>{item.ngaycong}</td>
        <td>{item.luongthang}</td>
        <td>{item.phucap}</td>
        <td>{item.ngaychamcong}</td>
        <td>{item.thucnhan}</td>
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
          <Breadcrumb.Item>Quản lý Lương</Breadcrumb.Item>
          <Breadcrumb.Item active>Bảng Lương</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ display: "flex", gap: 5 }}>
          <Button onClick={handleSalary}>Tính lương</Button>
          <Button onClick={handleAdd}>Thêm bảng lương</Button>
        </div>
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

export default SalaryPage;
