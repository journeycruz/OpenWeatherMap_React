import React, { Component } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { VscDebugStart } from 'react-icons/vsc';
import { GrLinkNext } from 'react-icons/gr';

const ServiceList = [
  {
    icon: <VscDebugStart />,
    title: "Step 1",
    description:
      "Heroku communicates with Express Server to load React SPA.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 2",
    description: "User uses input field to enter a city name.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 3",
    description:
      "City name is sent to back-end server via POST method and React Router renders Weather Dashboard.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 4",
    description:
      "Once Forecast Dashboard is loaded, an API call is sent via GET method to the Open Weather Map API with the city name entered in the input field insterted into the URL.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 5",
    description:
      "Once data is received back from the API call, state keys are updated with new values from the API.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Step 6",
    description:
      "New state key values are rendered on the Forecast Dashboard.",
  },
];

class About extends Component {
  render() {
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2 className="display-3">How It Works:</h2>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className='col-md-4' key={i}>
              <span>
                <div className="card">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default About;