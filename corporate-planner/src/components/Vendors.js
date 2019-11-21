import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVendors,
  submitEditVendor,
  deleteVendor
} from "../actionsAndModules/crud";

const Vendors = () => {
  const vendors = useSelector(state => state.vendors);
  const dispatch = useDispatch();
  const [vendArr, setVendArr] = useState([]);
  const [editing, setEditing] = useState(false);
  const [vendorToEdit, setVendorToEdit] = useState({
    id: undefined,
    name: ""
  });

  useEffect(() => {
    setVendArr(vendors);
  }, []);

  const editVendor = vendor => {
    setEditing(true);
    setVendorToEdit(vendor);
  };

  return (
    <>
      <h3>Vendors</h3>
      <button onClick={() => dispatch(getVendors())}>Get Vendors</button>
      <ul>
        <div className="vendors">
          {vendArr.map(vend => (
            <div className="vendor-card" key={`${vend.name}`}>
              <li>
                <span>
                  <h5>{vend.name}</h5>
                </span>
              </li>
              <button
                onClick={e => {
                  e.preventDefault();
                  editVendor(vend);
                }}
              >
                Edit
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  dispatch(deleteVendor(vend));
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </ul>

      {editing && (
        <div className="edit">
          <div className="edit-form">
            <form>
              <h1>Edit Vendor</h1>
              <input
                onChange={e =>
                  setVendorToEdit({
                    ...vendorToEdit,
                    name: e.target.value
                  })
                }
                value={vendorToEdit.name}
              />
              <p
                onChange={e =>
                  setVendorToEdit({ ...vendorToEdit, id: e.target.value })
                }
                value={vendorToEdit.id}
              />
              <button
                onClick={e => {
                  e.preventDefault();
                  dispatch(submitEditVendor(vendorToEdit.id, vendorToEdit));
                  setEditing(false);
                }}
              >
                Save
              </button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Vendors;
