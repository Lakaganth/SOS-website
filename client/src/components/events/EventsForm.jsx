import React from "react";
import { graphql, compose } from "react-apollo";

import { Mutation, Query } from "react-apollo";
import { CREATE_NEW_EVENT, SPORTS_QUERY } from "../../queries";
import CKEditor from "react-ckeditor-component";
import FirebaseContext from "./../../context/firebase/firebaseContext";

const EventsForm = () => {
  const { user } = React.useContext(FirebaseContext);

  const [newEvent, setNewEvent] = React.useState({
    event_name: "",
    rules: "",
    reg_rules: "",
    event_date: "",
    reg_open: "",
    reg_close: "",
    sport_name: ""
  });

  const displaySports = () => {
    return (
      <Query query={SPORTS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) console.log(error);

          return data.sports.map(s => {
            return (
              <option key={s._id} name="sport_name" value={s.sport_name}>
                {s.sport_name.toUpperCase()}
              </option>
            );
          });
        }}
      </Query>
    );
  };

  const onChange = e => {
    setNewEvent({
      ...newEvent,
      [e.target.name]: e.target.value
    });
    console.log(newEvent);
  };

  const onRulesChange = e => {
    const newRules = e.editor.getData();
    setNewEvent({
      ...newEvent,
      rules: newRules
    });
  };

  const {
    event_name,
    rules,
    reg_rules,
    event_date,
    reg_open,
    reg_close,
    sport_name
  } = newEvent;

  const handleSubmit = (e, createEvent) => {
    e.preventDefault();
    console.log(newEvent);
    createEvent().then(({ data }) => {
      console.log(data);
    });
    setNewEvent({
      event_name: "",
      rules: "",
      reg_rules: "",
      event_date: "",
      reg_open: "",
      reg_close: "",
      sport_name: ""
    });
  };
  if (!user) {
    return <h1>Pease log in</h1>;
  } else {
    return (
      <div className="container">
        <h1 className="m-2 text-center">Add New Event</h1>
        <Mutation
          mutation={CREATE_NEW_EVENT}
          variables={{
            event_name,
            rules,
            reg_rules,
            event_date,
            reg_open,
            reg_close,
            sport_name
          }}
        >
          {(createEvent, { loading, error, data }) => {
            return (
              <form
                className="container coach-form p-2"
                onSubmit={e => {
                  handleSubmit(e, createEvent);
                }}
              >
                <div className="form-group">
                  <label htmlFor="event_name">Event Name</label>
                  <input
                    type="text"
                    name="event_name"
                    value={event_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rules">Rules</label>
                  <CKEditor
                    name="rules"
                    content={rules}
                    events={{ change: onRulesChange }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg_rules">Registration Rules</label>
                  <input
                    type="text"
                    name="reg_rules"
                    value={reg_rules}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="event_date">Date of the Event</label>
                  <input
                    type="date"
                    name="event_date"
                    value={event_date}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg_open">Registration Start</label>
                  <input
                    type="date"
                    name="reg_open"
                    value={reg_open}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reg_close">Registration Close</label>
                  <input
                    type="date"
                    name="reg_close"
                    value={reg_close}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sport_name">Sport Name</label>
                  <select
                    onChange={e => {
                      setNewEvent({ ...newEvent, sport_name: e.target.value });
                    }}
                  >
                    {displaySports()}
                  </select>
                </div>
                <input
                  disabled={loading}
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
};
// const AddEventsForms = graphql(CREATE_NEW_EVENT)(EventsForm);

// export default AddEventsForms;

export default compose(
  graphql(SPORTS_QUERY, { name: "SPORTS_QUERY" }),
  graphql(CREATE_NEW_EVENT, { name: "CREATE_NEW_EVENT" })
)(EventsForm);
