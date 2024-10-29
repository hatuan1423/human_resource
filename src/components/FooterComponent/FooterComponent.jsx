import React from "react";
import { Pagination } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        height: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default FooterComponent;
