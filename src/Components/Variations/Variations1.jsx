import React from "react";
import { useData } from "../context/Context";

const Variations1 = ({ colorData }) => {
  const {
    selectedColors,
    setSelectedColors,
    variations,
    setVaritation1,
    setVariations
  } = useData();
  console.log(selectedColors);
  const handleDelete = (id) => {
    var data = selectedColors.filter((item, i) => {
      return id !== i;
    });
    setSelectedColors(data);
  };
  const handleRemove = () => {
    setSelectedColors([]);
    setVariations([
      ...variations,
      { id: "variation2", type: "Primary Color", val: "color" }
    ]);
    setVaritation1(false);
  };
  return (
    <div className="variation">
      <div className="menu d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <h6>{colorData.title}</h6>
          <button className="mx-3 btn btn-light" onClick={handleRemove}>
            Delete
          </button>
        </div>
        <div>
          <select
            className="form-select w-50"
            onChange={(e) => {
              if (
                !selectedColors.includes(e.target.value) &&
                e.target.value !== "Add Primary Color Options"
              ) {
                setSelectedColors([...selectedColors, e.target.value]);
              }
            }}
          >
            {colorData.colors?.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          {selectedColors.map((item, index) => {
            return (
              <div className="input-group d-flex align-items-center">
                <input className="text-secondary form-control" value={item} />
                <button
                  className="input-group-text"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <form className="form-check">
        <input type="checkbox" checked className="form-check-input" />
        <label className="form-check-label">{colorData.inputLabel1}</label>
        <br />
        <input type="checkbox" checked className="form-check-input" />
        <label className="form-check-label">{colorData.inputLabel2}</label>
      </form>
      <hr />
    </div>
  );
};
export default Variations1;
