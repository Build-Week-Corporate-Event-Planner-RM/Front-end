import React, { useState } from "react";
import { submitEditEvent, deleteEvent } from "../actionsAndModules/crud";
import { useDispatch, useSelector } from "react-redux";

const EditEvent = () => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState({
    user_id: undefined,
    name: "",
    description: "",
    datetime: "",
    budget: undefined
  });

  return (
    <div className="edit">
      <div className="edit-form">
        <form>
          <h3>Edit Event</h3>
          <input
            onChange={e =>
              setEventToEdit({ ...eventToEdit, name: e.target.value })
            }
            value={eventToEdit.name}
            placeholder="Event name"
          />
          <br />
          <br />
          <input
            onChange={e =>
              setEventToEdit({ ...eventToEdit, description: e.target.value })
            }
            value={eventToEdit.description}
            placeholder="Description"
          />
          <br />
          <br />
          <input
            onChange={e =>
              setEventToEdit({ ...eventToEdit, datetime: e.target.value })
            }
            value={eventToEdit.datetime}
            placeholder="Date and time"
          />
          <br />
          <br />
          <input
            onChange={e =>
              setEventToEdit({ ...eventToEdit, budget: e.target.value })
            }
            value={eventToEdit.budget}
            placeholder="Budget"
          />
          <p
            onChange={e =>
              setEventToEdit({ ...eventToEdit, user_id: e.target.value })
            }
            value={eventToEdit.user_id}
          />
          <button
            onClick={e => {
              e.preventDefault();
              dispatch(submitEditEvent(eventToEdit.id, eventToEdit));
            }}
          >
            Save
          </button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;