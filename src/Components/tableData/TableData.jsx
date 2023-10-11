import React from "react";
import { useData } from "../context/Context";
import { useNavigate } from "react-router-dom";
const TableData = () => {
  const { selectedColors, selectedSizes, handleOpen } = useData();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/");
    handleOpen();
  };

  return (
    <div className="tableData container border rounded">
      <div className="d-flex justify-content-between">
        <h4>Variations</h4>
        <button className="btn btn-outline-primary" onClick={handleEdit}>
          Edit Variations
        </button>
      </div>
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Box</th>
            <th style={selectedSizes.length === 0 ? { display: "none" } : null}>
              Size
            </th>
            <th
              style={selectedColors.length === 0 ? { display: "none" } : null}
            >
              Primary Color
            </th>
            <th>Price In India</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {selectedColors.length === 0
            ? selectedSizes.map((size) => (
                <tr key={size}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{size}</td>
                  <td>₹ 0</td>
                  <td>1</td>
                </tr>
              ))
            : selectedSizes.length === 0
            ? selectedColors.map((color) => (
                <tr key={color}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{color}</td>
                  <td>₹ 0</td>
                  <td>1</td>
                </tr>
              ))
            : selectedSizes.map((size) =>
                selectedColors.map((color) => (
                  <tr key={`${size}-${color}`}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{size}</td>
                    <td>{color}</td>
                    <td>₹ 0</td>
                    <td>1</td>
                  </tr>
                ))
              )}
        </tbody>
      </table>
    </div>
  );
};
export default TableData;
