import React, { Fragment, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GeneralContext from "../context/general/generalContext";
import LoginContext from "../context/login/loginContext";

const Project = ({ name }) => {
  const generalContext = useContext(GeneralContext);
  const loginContext = useContext(LoginContext);
  const [displayModels, setDisplayModels] = useState(false);

  const { changeSteps } = generalContext;
  const { selectProject } = loginContext;

  const showModels = state => {
    setDisplayModels(state);
  };

  return (
    <Fragment>
      {!displayModels && (
        <button
          type="button"
          className={
            "btn btn-outline-secondary " +
            (name !== "new" && "d-flex justify-content-between ")
          }
          onClick={
            name === "new"
              ? () => showModels(true)
              : () => {
                  selectProject(name);
                  changeSteps("main");
                }
          }
        >
          {name !== "new" ? (
            <Fragment>
              <span>{name}</span> {/*<FontAwesomeIcon icon={faTrash} />*/}
            </Fragment>
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </button>
      )}
      {displayModels && (
        <div class="form-group w-100">
          <label htmlFor="selectModel">Select Model</label>
          <select class="form-control w-100" id="selectModel">
            <option>Modelo Parana</option>
            <option>Modelo Cape Coral</option>
          </select>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              changeSteps("main");
              selectProject("new");
            }}
          >
            Create
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Project;
