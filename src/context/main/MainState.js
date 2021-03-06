import React, { useReducer } from "react";
import MainReducer from "./mainReducer";
import MainContext from "./mainContext";
import { logoSolo } from "../../img";
import {
  CLEAR_STATE,
  LOAD_CONFIG,
  SELECT_CAT,
  SELECT_OPT,
  SHOW_IMAGE,
  CHANGE_STEPS,
  SET_ALERT,
  CHECK_FILENAME
} from "../types";

const MainState = props => {
  const initialState = {
    shingles: "",
    tileThroughout: "",
    showerFloorTile: "",
    cabinets: "",
    kitchenSink: "",
    bathroomSink: "",
    bathroomFaucet: "",
    interiorWallColor: "",
    exteriorWallColor: "",
    graniteEdge: "",
    grout: "",
    selected: "",
    imgElegida: logoSolo,
    step: { der: "images", izq: "categories" },
    alert: null,
    filename: ""
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  const clearState = () =>
    dispatch({
      type: CLEAR_STATE,
      payload: {
        shingles: "",
        tileThroughout: "",
        showerFloorTile: "",
        cabinets: "",
        kitchenSink: "",
        bathroomSink: "",
        bathroomFaucet: "",
        interiorWallColor: "",
        exteriorWallColor: "",
        graniteEdge: "",
        grout: "",
        selected: "",
        imgElegida: logoSolo,
        step: { der: "images", izq: "categories" },
        alert: null,
        filename: ""
      }
    });

  const loadConfig = (key, value) => {
    dispatch({ type: LOAD_CONFIG, payload: { key, value } });
  };

  const selectCat = nombre => {
    dispatch({ type: SELECT_CAT, payload: nombre });
  };

  const selectOpt = (category, opciones) => {
    initialState.hasOwnProperty(category) &&
      dispatch({ type: SELECT_OPT, payload: { category, opciones } });
  };

  const showImage = opciones => {
    dispatch({ type: SHOW_IMAGE, payload: opciones.image_url });
  };

  const changeSteps = (panel, step) => {
    let newStep = state.step;
    newStep[panel] = step;
    dispatch({ type: CHANGE_STEPS, payload: newStep });
  };

  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });

    state.alert !== null &&
      setTimeout(() => dispatch({ type: SET_ALERT, payload: null }));
  };

  const closeAlert = () => {
    dispatch({ type: SET_ALERT, payload: null });
  };

  const checkFilename = e => {
    dispatch({ type: CHECK_FILENAME, payload: e.target.value });
  };

  return (
    <MainContext.Provider
      value={{
        shingles: state.shingles,
        tileThroughout: state.tileThroughout,
        showerFloorTile: state.showerFloorTile,
        cabinets: state.cabinets,
        kitchenSink: state.kitchenSink,
        bathroomSink: state.bathroomSink,
        bathroomFaucet: state.bathroomFaucet,
        interiorWallColor: state.interiorWallColor,
        exteriorWallColor: state.exteriorWallColor,
        graniteEdge: state.graniteEdge,
        grout: state.grout,
        selected: state.selected,
        imgElegida: state.imgElegida,
        step: state.step,
        alert: state.alert,
        filename: state.filename,
        clearState,
        loadConfig,
        selectCat,
        selectOpt,
        showImage,
        changeSteps,
        setAlert,
        closeAlert,
        checkFilename
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
