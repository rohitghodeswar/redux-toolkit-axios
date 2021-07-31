import usersReducer from "../slices/usersSlice";
import statusReducer from "../slices/statusSlice";
import userPostReducer from "../slices/userPostSlice";

const rootReducer = {
    users: usersReducer,
    status: statusReducer,
    post: userPostReducer
};

export default rootReducer;
