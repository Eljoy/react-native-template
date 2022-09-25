import { createSlice } from '@reduxjs/toolkit';

type FooState = {};

const initialState: FooState = {};

export const fooSlice = createSlice({
  name: 'foo',
  initialState: { ...initialState },
  reducers: {},
  extraReducers: () => {},
});
