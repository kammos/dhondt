import { useState } from "react";

let nextId = 0;

export const useId = prefix => {
    const [id] = useState(() => `${prefix}-${nextId++}`);

    return id;
}