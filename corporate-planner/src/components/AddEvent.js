import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitNewEvent } from "../actionsAndModules/crud";

const AddEvent = () => {
  const dispatch = useDispatch();

  const [newEvent, setNewEvent] = useState({
    user_id: 1,
    name: "",
    description: "",
    datetime: "",
    budget: undefined
  });

  const changeHandler = e => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <div className="add">
        <div className="add-form">
          <h3>Add New Event:</h3>
          <form>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              placeholder="Event Name"
            />
            <br />
            <br />
            <input
              type="text"
              name="description"
              onChange={changeHandler}
              placeholder="Event Description"
            />
            <br />
            <br />
            <input
              type="text"
              name="datetime"
              onChange={changeHandler}
              placeholder="Date and Time"
            />
            <br />
            <br />
            <input
              type="number"
              name="budget"
              onChange={changeHandler}
              placeholder="Budget (optional)"
            />
          </form>
          <br />
          <button
            onClick={e => {
              e.preventDefault();
              dispatch(submitNewEvent(newEvent));
            }}
          >
            Create new event
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
