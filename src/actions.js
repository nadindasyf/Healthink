// actions.js

// Definisikan tipe-tipe action
export const TOGGLE_MODE = 'TOGGLE_MODE';
// Definisikan action kreator

export const toggleMode = () => {
    console.log('Toggle mode action triggered');
    return {
      type: TOGGLE_MODE,
    };
  };
  