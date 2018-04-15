export * from './AuthActions';
export * from './CollectiveManagerActions';
export * from './ChatActions';

export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
