import { useRef } from "react";

function useEffectCustom(effect, dependency) {

    const isFirstrender = useRef(true);   // tracks if this is the first render
    const prevDeps = useRef([]);          // stores previous dependency values

    // -------------------------
    // FIRST RENDER
    // -------------------------
    if (isFirstrender.current) {
        isFirstrender.current = false;

        // run effect first time
        const fun = effect();

        // if effect returned a cleanup function → save it
        if (fun && typeof fun === 'function') {
            fun();
        }

        // store dependencies for next render
        prevDeps.current = dependency || [];

        return;
    }


    // -------------------------
    // CHECK IF DEPENDENCIES CHANGED
    // -------------------------
    const depsChangeed = dependency
        ? JSON.stringify(dependency) !== JSON.stringify(prevDeps.current)
        : true; // if no dependency array is provided → always run


    // -------------------------
    // WHEN DEPENDENCY HAS CHANGED
    // -------------------------
    if (depsChangeed) {
        // run the new effect
        const fun = effect();

        // store new cleanup function if returned
        if (fun && typeof fun === 'function') {
            cleanupRef.current = fun;
        }

        // update previous dependencies
        prevDeps.current = dependency || [];
    }


    // -------------------------
    // NO DEPENDENCY CHANGE
    // (do nothing)
    // -------------------------
}

export default useEffectCustom;