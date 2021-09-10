import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucess = createAction("api/callSucess");
export const apiCallFailed = createAction("api/callFailed");
