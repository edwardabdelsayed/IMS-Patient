import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const useSecureStore = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const fetchSecureValue = async () => {
      const secureValue = await SecureStore.getItemAsync(key);
      if (secureValue === null) {
        setValue(defaultValue);
      } else {
        setValue(JSON.parse(secureValue));
      }
    };

    fetchSecureValue();
  }, [key,defaultValue]);

  const setSecureValue = async (newValue) => {
    setValue(newValue);
    await SecureStore.setItemAsync(key, JSON.stringify(newValue));
  };

  const deleteSecureValue = async () => {
    setValue(null);
    await SecureStore.deleteItemAsync(key);
  };

  return [value, setSecureValue, deleteSecureValue];
};

export default useSecureStore;
