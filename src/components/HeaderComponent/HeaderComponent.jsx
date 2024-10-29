import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function HeaderComponent() {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const expand = false;

  const handleNavigate = (path) => {
    navigate(path);
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar
        fixed="top"
        key={expand}
        expand={expand}
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
          <Navbar.Brand
            onClick={() => handleNavigate("/")}
            style={{ cursor: "pointer" }}
          >
            HR management and Payroll system
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={() => setShowOffcanvas(!showOffcanvas)}
          />
          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Hi, Welcome back!
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <NavDropdown
                    title="Thông báo"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    onToggle={(isOpen) => {
                      const badge = document.getElementById("badge");
                      if (badge) {
                        badge.style.display = isOpen ? "none" : "block";
                      }
                    }}
                  >
                    <NavDropdown.Item href="#action4">
                      Chào mừng nhân viên mới, Lê Văn Chương
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Lịch họp định kỳ của phòng kế toán
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Happy birthday, Nguyễn Văn Anh !
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Badge id="badge" bg="info" style={{ height: "20px" }}>
                    3
                  </Badge>
                </div>

                <NavDropdown
                  title="Quản lý"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavigate("/manage-account")}
                  >
                    Danh sách tài khoản
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavigate("/manage-staff")}
                  >
                    Danh sách nhân viên
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Quản lý nhân viên"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item
                    onClick={() => handleNavigate("/manage-detail-staff")}
                  >
                    Thông tin nhân viên
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => handleNavigate("/day-off")}>
                    Ngày nghỉ
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Quản lý lương"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item onClick={() => handleNavigate("/salary")}>
                    Bảng lương
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav
                  style={{ cursor: "pointer" }}
                  onClick={() => setModalShow(true)}
                >
                  Tài khoản
                </Nav>
                <ModalComponent
                  show={modalShow}
                  isShowLogin={true}
                  onHide={() => setModalShow(false)}
                />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
