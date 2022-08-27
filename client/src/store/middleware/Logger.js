import React from 'react'

export const logger = store => next => action => {
    console.log(action);
    next(action);
    console.log(store.getState());
} 