// src/utils/localStorage.js

// const PREFIX = "jobPortal_"; // Optional key prefix to avoid collisions

export const setItem = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem( key, jsonValue);
  } catch (err) {
    console.error("Failed to set item in localStorage", err);
  }
};

export const getItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (err) {
    console.error("Failed to parse item from localStorage", err);
    return null;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem( key);
  } catch (err) {
    console.error("Failed to remove item from localStorage", err);
  }
};
