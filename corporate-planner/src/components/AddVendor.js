import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewVendor } from "../actionsAndModules/crud";

const AddVendor = () => {
  const dispatch = useDispatch();

  const [newVendor, setNewVendor] = useState({
    name: ""
  });

  const changeHandler = e => {
    setNewVendor({
      ...newVendor,
      name: e.target.value
    });
  };

  return (
    <>
      <div className="add">
        <div className="add-form">
          <h3>Add New Vendor:</h3>
          <form>
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Vendor Name"
            />
          </form>
          <br />
          <button
            onClick={e => {
              e.preventDefault();
              dispatch(submitNewVendor(newVendor));
            }}
          >
            Submit New Vendor
          </button>
        </div>
      </div>
    </>
  );
};

export default AddVendor;
