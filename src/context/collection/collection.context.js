import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase.utils';

export const CollectionContext = createContext({
  collectionMap: {},
});

export const CollectionProvider = ({ children }) => {
  const [collectionMap, setCollectionMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const collectionMap = await getCategoriesAndDocuments();
      setCollectionMap(collectionMap);
    };

    getCategoriesMap();
  }, []);

  const value = { collectionMap };
  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
};


