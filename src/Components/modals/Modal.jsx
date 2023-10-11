import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useData } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Variations1 from "../Variations/Variations1";
import Variations2 from "../Variations/Variations2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: "0px 0px 3px black",
  borderRadius: "5px",
  p: 4
};

export default function BasicModal() {
  const {
    open,
    handleClose,
    variations,
    data1,
    data2,
    setVariations,
    rendervariation1,
    setVaritation1,
    rendervariation2,
    setVaritation2
  } = useData();
  const handlevariation = (e) => {
    let val = e.target.value;
    var data = variations.filter((item) => {
      return item.val !== val;
    });

    val === "color"
      ? setVaritation1(true)
      : val === "size"
      ? setVaritation2(true)
      : null;

    setVariations(data);
  };

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/table");
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 className="text-primary">Edit Variations</h4>
          <p className="text-secondary">
            List all the options you offer. Buyers will see them in the order
            they are here.
          </p>

          {rendervariation1 && <Variations1 colorData={data1} />}
          {rendervariation2 && <Variations2 colorData={data2} />}
          <form className="form-group">
            <label
              className="form-label"
              style={variations.length === 1 ? { display: "none" } : null}
            >
              Add a variation
            </label>
            <select
              className="form-select w-50"
              onChange={handlevariation}
              style={variations.length === 1 ? { display: "none" } : null}
            >
              {variations.map((item, index) => {
                return (
                  <option key={item.id} value={item.val}>
                    {item.type}
                  </option>
                );
              })}
            </select>
          </form>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-danger" onClick={handleClose}>
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
