'use strict';

 * @param {Object} state
 * @param {Object[]} actions

function transformStateWithClones(state, actions) {
  const states = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'clear':
        currentState = {};
        break;

      case 'addProperties':
        currentState = {
          ...currentState,
          ...action.extraData,
        };
        break;

      case 'removeProperties':
        currentState = { ...currentState };

        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;

      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
    states.push(currentState);
  }

  return states;
}

module.exports = transformStateWithClones;
