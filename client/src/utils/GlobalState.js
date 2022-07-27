import React, { createContext, useContext } from "react";
import { useProjectReducer } from './reducers'

const UserContext = createContext();
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProjectReducer({
        user: {},
        project: {},
        client: {},
        bridge: {},
        location: {}

    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, useUserContext };
