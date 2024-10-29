import React, { useState } from "react";
import { Breadcrumb, Button, Image } from "react-bootstrap";
import TableComponent from "../../components/TableComponent/TableComponent";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

const ManageStaffPage = () => {
  const [action, setAction] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const handleDeleteStaff = () => {
    setAction("deleteStaff");
    setModalShow(true);
  };

  const handleAddStaff = () => {
    setAction("addStaff");
    setModalShow(true);
  };

  const handleUpdateStaff = () => {
    setAction("updateStaff");
    setModalShow(true);
  };

  // Table
  const renderAction = (
    <div style={{ display: "flex", gap: 5 }}>
      <Button variant="danger" onClick={handleDeleteStaff}>
        Xóa
      </Button>
      <Button variant="warning" onClick={handleUpdateStaff}>
        Sửa
      </Button>
    </div>
  );
  const headers = [
    "Stt",
    "Mã nhân viên",
    "Họ và tên",
    "Avatar",
    "Căn cước công dân",
    "Chức vụ",
    "Giới tính",
    "Ngày sinh",
    "Quê quán",
    "Tình trạng",
    "Action",
  ];
  const dataSource = [
    {
      maNhanVien: "272112",
      fullName: "Dương Hà Tuấn",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
        />
      ),
      iden: "049203013456",
      role: "Nhân viên",
      sex: "Nam",
      dateOfBirth: "19/08/2003",
      address: "Quảng Nam",
      tinhTrang: <Button>Đang làm</Button>,
      action: renderAction,
    },
    {
      maNhanVien: "246254",
      fullName: "Huỳnh Phước Tài",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/312/283/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png"
        />
      ),
      iden: "049203013456",
      role: "Nhân viên",
      sex: "Nam",
      dateOfBirth: "19/08/2003",
      address: "Quảng Nam",
      tinhTrang: <Button>Đang làm</Button>,
      action: renderAction,
    },
    {
      maNhanVien: "246254",
      fullName: "Nguyễn Võ Anh Quyền",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png"
        />
      ),
      iden: "049203013456",
      role: "Nhân viên",
      sex: "Nam",
      dateOfBirth: "19/08/2003",
      address: "Quảng Nam",
      tinhTrang: <Button>Đang làm</Button>,
      action: renderAction,
    },
    {
      maNhanVien: "362045",
      fullName: "Nguyễn Văn Anh",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png"
        />
      ),
      iden: "048203012345",
      role: "Nhân viên",
      sex: "Nam",
      dateOfBirth: "21/02/2002",
      address: "Hà Nội",
      tinhTrang: <Button>Đang làm</Button>,
      action: renderAction,
    },
    {
      maNhanVien: "274839",
      fullName: "Trần Thị Bưởi",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/843/694/png-transparent-avatar-female-cartoon-avatar-purple-face-black-hair-thumbnail.png"
        />
      ),
      iden: "038294015678",
      role: "Nhân viên",
      sex: "Nữ",
      dateOfBirth: "10/05/1998",
      address: "Đà Nẵng",
      tinhTrang: (
        <Button
          style={{ backgroundColor: "yellow", color: "black", border: "none" }}
        >
          Nghỉ phép
        </Button>
      ),
      action: renderAction,
    },
    {
      maNhanVien: "119283",
      fullName: "Lê Văn Chương",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png"
        />
      ),
      iden: "029384017234",
      role: "Nhân viên",
      sex: "Nam",
      dateOfBirth: "18/12/1999",
      address: "Quảng Ngãi",
      tinhTrang: <Button>Đang làm</Button>,
      action: renderAction,
    },
    {
      maNhanVien: "238947",
      fullName: "Phạm Thị Duy",
      image: (
        <Image
          width={50}
          roundedCircle
          src="https://w7.pngwing.com/pngs/732/397/png-transparent-computer-icons-avatar-woman-user-avatar-child-face-heroes-thumbnail.png"
        />
      ),
      iden: "037482015683",
      role: "Nhân viên",
      sex: "Nữ",
      dateOfBirth: "03/09/1997",
      address: "Hồ Chí Minh",
      tinhTrang: (
        <Button style={{ backgroundColor: "red", border: "none" }}>
          Đã nghỉ
        </Button>
      ),
      action: renderAction,
    },
  ];
  const renderCell = (item, rowIndex) => {
    return (
      <>
        <td>{rowIndex + 1}</td>
        <td>{item.maNhanVien}</td>
        <td>{item.fullName}</td>
        <td>{item.image}</td>
        <td>{item.iden}</td>
        <td>{item.role}</td>
        <td>{item.sex}</td>
        <td>{item.dateOfBirth}</td>
        <td>{item.address}</td>
        <td>{item.tinhTrang}</td>
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
          <Breadcrumb.Item active>Danh sách nhân viên</Breadcrumb.Item>
        </Breadcrumb>
        <Button onClick={handleAddStaff}>Thêm</Button>

        <ModalComponent
          action={action}
          show={modalShow}
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

export default ManageStaffPage;
