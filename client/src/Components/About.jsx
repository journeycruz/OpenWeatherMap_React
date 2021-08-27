import React, { Component } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { VscDebugStart } from 'react-icons/vsc';
import { GrLinkNext } from 'react-icons/gr';

const ServiceList = [
  {
    icon: <VscDebugStart />,
    title: "Step 1",
    description:
      "Details about this step.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 2",
    description: "Details about this step.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 3",
    description:
      "Details about this step.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 4",
    description:
      "Details about this step.",
  },
  {
    icon: <GrLinkNext />,
    title: "Step 5",
    description:
      "Details about this step.",
  },
  {
    icon: <FiCheckSquare />,
    title: "Step 6",
    description:
      "Details about this step.",
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