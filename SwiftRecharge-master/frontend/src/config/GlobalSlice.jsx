import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isDark: false,
    user: null,
    role: "PUBLIC",
    accessToken: null,
    userDetails: null,
    operatorName: "jio",
    planName: null,
    internet: null,
    validity: null,
    details: null,
    planType: null,
    planPrice: null,
    fullPlan: null,
};

const globalSlice = createSlice({
    name: "Global",
    initialState,
    reducers: {
        toggleLogin: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        toggleDarkMode: (state, action) => {
            state.isDark = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addToken: (state, action) => {
            state.accessToken = action.payload;
        },
        deleteToken: (state, action) => {
            state.accessToken = null;
        },
        addRole: (state, action) => {
            state.role = action.payload;
        },
        deleteRole: (state, action) => {
            state.role = "PUBLIC";
        },
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        deleteUserDetails: (state, action) => {
            state.userDetails = null;
        },
        addOperatorName: (state, action) => {
            state.operatorName = action.payload;
        },
        delOperatorName: (state, action) => {
            state.operatorName = null;
        },
        addPlanName: (state, action) => {
            state.planName = action.payload;
        },
        delPlanName: (state, action) => {
            state.planName = null;
        },
        addInternet: (state, action) => {
            state.internet = action.payload;
        },
        delInternet: (state, action) => {
            state.internet = null;
        },
        addValidity: (state, action) => {
            state.validity = action.payload;
        },
        delValidity: (state, action) => {
            state.validity = null;
        },
        addDetails: (state, action) => {
            state.details = action.payload;
        },
        delDetails: (state, action) => {
            state.details = null;
        },
        addPlanType: (state, action) => {
            state.planType = action.payload;
        },
        delPlanType: (state, action) => {
            state.planType = null;
        },
        addPlanPrice: (state, action) => {
            state.planPrice = action.payload;
        },
        delPlanPrice: (state, action) => {
            state.planPrice = null;
        },
        addFullPlan: (state, action) => {
            state.fullPlan = action.payload;
        },
        delFullPlan: (state, action) => {
            state.fullPlan = null;
        },
    },
});

export const {
    toggleLogin,
    toggleDarkMode,
    addUser,
    deleteUser,
    addRole,
    deleteRole,
    addToken,
    deleteToken,
    addUserDetails,
    deleteUserDetails,
    addInternet,
    delInternet,
    addOperatorName,
    delOperatorName,
    addValidity,
    delValidity,
    addPlanName,
    delPlanName,
    addDetails,
    delDetails,
    addPlanPrice,
    delPlanPrice,
    addPlanType,
    delPlanType,
    addFullPlan,
    delFullPlan
} = globalSlice.actions;

export default globalSlice.reducer;