import React, { useContext, useState } from "react";

let initial_state = {
  userId: { userName: null, userToken: null },
  setUserId: null, //setuserid updates userid
};
const UserContext = React.createContext(initial_state);

const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(initial_state.userId);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { userId } = useContext(UserContext);
  return userId;
};

export const useSetUser = () => {
  const { setUserId } = useContext(UserContext);
  return setUserId;
};

export default UserContextProvider;
