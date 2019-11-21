import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  submitEditEvent,
  getEvents,
  deleteEvent
} from "../actionsAndModules/crud";



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
      <div className="events">
        <ul>
          {events.map(ev => (
            <div className="event-card" key={ev.name}>
              <li>
                <span>
                  <h3>
                    <strong>Event name: </strong>
                    {ev.name}
                  </h3>
                  <p>{ev.description}</p>
                  <p>
                    <strong>Date: </strong>
                    {ev.datetime}
                  </p>
                  <p>
                    <strong>Budget: </strong>${ev.budget}
                  </p>
                </span>
                <p>
                  <strong>Date and time: </strong>
                  {ev.datetime}
                </p>
              </li>
              <button
                onClick={e => {
                  e.preventDefault();
                  editEvent(ev);
                }}
              >
                Edit
              </button>
              <button
                onClick={e => {
                  //   e.preventDefault();
                  dispatch(deleteEvent(ev));
                }}
              >
                Delete
              </button>
            </div>
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
                      setEventToEdit({
                        ...eventToEdit,
                        datetime: e.target.value
                      })
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
      </div>
    </>
  );
};

export default Events;
