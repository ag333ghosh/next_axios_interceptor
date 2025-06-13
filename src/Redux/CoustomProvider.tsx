"use client";

import { Provider } from "react-redux";
import store from "./store";

interface componentType {
    children: React.ReactNode;
}

export default function CoustomProvider({ children }: componentType) {
    return <Provider store={store}>{children}</Provider>;
}