import React from "react";
import { useData } from "../context/Context";

const Variations2 = ({ colorData }) => {
  const {
    selectedSizes,
    setSelectedSizes,
    setVaritation2,
    variations,
    setVariations
  } = useData();

  const handleDelete = (id) => {
    var data = selectedSizes.filter((item, i) => {
      return id !== i;
    });
    setSelectedSizes(data);
  };

  const handleRemove = () => {
    setSelectedSizes([]);
    setVariations([
      ...variations,
      { id: "variation3", type: "Size", val: "size" }
    ]);
    setVaritation2(false);
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
          <div className="d-flex">
            <select
              className="form-select w-50"
              onChange={(e) => {
                if (
                  !selectedSizes.includes(e.target.value) &&
                  e.target.value !== "Add size opions"
                ) {
                  setSelectedSizes([...selectedSizes, e.target.value]);
                }
              }}
            >
              {colorData.colors?.map((item) => {
                return <option value={item}>{item}</option>;
              })}
            </select>
          </div>
          {selectedSizes.map((item, index) => {
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
export default Variations2;
