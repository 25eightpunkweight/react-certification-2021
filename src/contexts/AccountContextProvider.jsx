import React, { useState } from 'react';

const AccountContext = React.createContext({
  account: null,
  accountChange: () => {},
});

const AccountContextProvider = (props) => {
  const [account, setAccount] = useState(AccountContext.account);

  const accountChange = (acc) => {
    setAccount(acc);
  };

  return (
    <AccountContext.Provider value={{ account, accountChange }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountContext };

export default AccountContextProvider;
