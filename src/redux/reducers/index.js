import { combineReducers } from "redux";
import addressReducer from "./Address";
import cartReducer from "./AddToCart";
import bedroomsReducer from "./Bedrooms";
import hostedReducer from "./Hosted";
import imagesReducer from "./HouseIages";
import housesReducer from "./Houses";
import housesLinesReducer from "./HousesLines";
import housesReserveReducer from "./HousesReserve";
import orderReducer from "./Order";
import userReducer from "./User";

const rootReducer = combineReducers({
  hostedState: hostedReducer,
  imagesState: imagesReducer,
  housesState: housesReducer,
  userState: userReducer,
  addressState: addressReducer,
  bedroomState: bedroomsReducer,
  cartState: cartReducer,
  reserveState: housesReserveReducer,
  linesState: housesLinesReducer,
  orderState: orderReducer,
});

export default rootReducer;
