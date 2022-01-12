import { takeEvery, all } from "redux-saga/effects";
import * as Action from "../constants/Hosted";
import * as ActionImages from "../constants/HousesImages";
import * as ActionHouses from "../constants/Houses";
import * as ActionUser from "../constants/User";
import * as ActionAddress from "../constants/address";
import * as ActionBedrooms from "../constants/Bedrooms";
import * as ActionCart from "../constants/AddToCart";
import * as ActionReserve from "../constants/HousesReserve";
import * as ActionLines from "../constants/HousesLines";
import * as ActionOrder from "../constants/Order";
import {
  handleCretaeHosted,
  handleDeleteHosted,
  handleGetHosted,
  handleUpdateHosted,
} from "../sagas/Hosted";
import {
  handleCreateImages,
  handleDeleteImages,
  handleGetImages,
  handleUpdateImages,
} from "./HouseImages";
import {
  handleAddHouses,
  handleDeleteHouses,
  handleGetAllHouses,
  handleGetHouses,
  handleGetOneHouses,
  handleUpdateHouses,
} from "./Houses";
import {
  handleGetUsers,
  handleLogout,
  handleSignin,
  handleSignup,
  handleUpdateUsers,
} from "./User";
import { handleCreateAddres, handleGetAddress } from "./Address";
import { handleGetBedrooms } from "./Bedrooms";
import { handleAddToCart } from "./AddToCart";
import { handleGetHousesReserve } from "./HousesReserve";
import {
  handleDeleteLines,
  handleGetLines,
  handleGetLinesByOrder,
} from "./HousesLines";
import {
  handleCancelOrder,
  handleCreateOrder,
  handleGetOrder,
  handleGetOrderCancelled,
} from "./Order";

function* watchAll() {
  yield all([
    takeEvery(Action.GET_HOSTED_REQUEST, handleGetHosted),
    takeEvery(Action.CRETAE_HOSTED_REQ, handleCretaeHosted),
    takeEvery(Action.UPDATE_HOSTED_REQ, handleUpdateHosted),
    takeEvery(Action.DELETE_HOSTED_REQ, handleDeleteHosted),
    takeEvery(ActionImages.GET_IMAGES_REQ, handleGetImages),
    takeEvery(ActionImages.CRETAE_IMAGES_REQ, handleCreateImages),
    takeEvery(ActionHouses.GET_HUSES_REQ, handleGetHouses),
    takeEvery(ActionImages.DELETE_IMAGES_REQ, handleDeleteImages),
    takeEvery(ActionImages.UPDATE_IMAGES_REQ, handleUpdateImages),
    takeEvery(ActionHouses.DElETE_HUSES_REQUEST, handleDeleteHouses),
    takeEvery(ActionHouses.ADD_HOUSES_REQ, handleAddHouses),
    takeEvery(ActionUser.GET_SIGNUP_REQ, handleSignup),
    takeEvery(ActionUser.GET_SIGNIN_REQ, handleSignin),
    takeEvery(ActionUser.GET_LOGOUT_REQ, handleLogout),
    takeEvery(ActionUser.UPDATE_USER_REQ, handleUpdateUsers),
    takeEvery(ActionUser.GET_USER_REQ, handleGetUsers),
    takeEvery(ActionHouses.GET_ONE_HUSES_REQ, handleGetOneHouses),
    takeEvery(ActionAddress.CREATE_ADDRESS_REQ, handleCreateAddres),
    takeEvery(ActionAddress.GET_ADDRESS_REQ, handleGetAddress),
    takeEvery(ActionBedrooms.GET_BEDROOMS_REQ, handleGetBedrooms),
    takeEvery(ActionCart.ADD_TO_CART_REQ, handleAddToCart),
    takeEvery(ActionReserve.GET_RESERVE_REQ, handleGetHousesReserve),
    takeEvery(ActionLines.GET_LINES_REQ, handleGetLines),
    takeEvery(ActionLines.DELETE_LINES_REQ, handleDeleteLines),
    takeEvery(ActionOrder.CREATE_ORDER_REQ, handleCreateOrder),
    takeEvery(ActionOrder.GET_ORDER_REQ, handleGetOrder),
    takeEvery(ActionOrder.CANCEL_ORDER_REQ, handleCancelOrder),
    takeEvery(ActionLines.GET_LINES_BY_ORDER_REQ, handleGetLinesByOrder),
    takeEvery(ActionHouses.GET_ALL_HOUSES_REQ, handleGetAllHouses),
    takeEvery(ActionHouses.UPDATE_HOUSES_REQ, handleUpdateHouses),
    takeEvery(ActionOrder.GET_ORDER_CANCEL_REQ, handleGetOrderCancelled),
  ]);
}

export default watchAll;
