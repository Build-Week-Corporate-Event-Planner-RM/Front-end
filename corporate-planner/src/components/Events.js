import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitEditEvent,
  getEvents,
  deleteEvent
} from "../actionsAndModules/crud";
import EditEvent from "./EditEvent";

const Events = () => {
  const events = useSelector(state => state.events);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState({
    user_id: undefined,
    name: "",
    description: "",
    datetime: "",
    budget: undefined
  });

  const editEvent = event => {
    setEditing(true);
    setEventToEdit(event);
  };

  return (
    <>
      <h3>Events</h3>
      <button onClick={() => dispatch(getEvents())}>Get</button>
      <ul>
        {events.map(ev => (
          <li key={ev.name}>
            <button
              onClick={e => {
                e.preventDefault();
                editEvent(ev);
              }}
            >
              Edit
            </button>
            <span>
              <button
                onClick={e => {
                  //   e.preventDefault();
                  dispatch(deleteEvent(ev));
                }}
              >
                X
              </button>
              <h1>Event name: {ev.name}</h1>
              <p>{ev.description}</p>
              <p>Date: {ev.datetime}</p>
              <p>Budget: ${ev.budget}</p>
            </span>
            <p>{ev.datetime}</p>
          </li>
        ))}
      </ul>

      {editing && (
        <div className="edit">
          <div className="edit-form">
            <form>
              <h1>Edit Event</h1>
              <label>
                Name:
                <input
                  onChange={e =>
                    setEventToEdit({ ...eventToEdit, name: e.target.value })
                  }
                  value={eventToEdit.name}
                />
              </label>
              <label>
                Description:
                <input
                  onChange={e =>
                    setEventToEdit({
                      ...eventToEdit,
                      description: e.target.value
                    })
                  }
                  value={eventToEdit.description}
                />
              </label>
              <label>
                Date and time:
                <input
                  onChange={e =>
                    setEventToEdit({ ...eventToEdit, datetime: e.target.value })
                  }
                  value={eventToEdit.datetime}
                />
              </label>
              <label>
                Budget:
                <input
                  onChange={e =>
                    setEventToEdit({ ...eventToEdit, budget: e.target.value })
                  }
                  value={eventToEdit.budget}
                />
              </label>
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
      )}
    </>
  );
};

export default Events;
