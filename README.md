## Web Dev Simplified React Hooks

This code is a following along of [Web Dev Simplfied's YT Playlist series on React Hooks](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h), specifically the use_effect hook.

To install modern react as of 2023, make a directory with the project name, cd into it, and install via [ViteJS](https://vitejs.dev/):

```
mkdir my_project_name && cd "$_" && npm create vite@latest .
```

Then choose 'React' from the cli options menu, and also the 'JS with SWC' option.

After that simply install the dependencies and run the dev server:

```
npm i && npm run dev
```

This will serve base application (usually from port 5173).

**Video Checklist:**

- [x] useState
- [x] useEffect
- [x] useMemo
- [x] useRef
- [x] useContext
- [x] useReducer
- [x] useCallback
- [x] Custom Hooks
- [x] useLayoutEffect
- [x] useTransition
- [x] useDeferredValue
- [x] useImperativeHandle
- [x] Debugging Custom React Hooks
- [x] Easiest React Hook(useId hook)
- [ ] useEffectEvent(not covered, experimental features as of 10/22/2023)
- [ ] New React Hook Breaks ALl The Rules(not covered, experimental features as of 10/22/2023)
- [ ] New React Hook Changes How You Use Forms(not covered, experimental features as of 10/22/2023)
- [x] Note that in the above video, Kyle covers the action attribute of form HTML elements, useful for our project
- [ ] I Cannot Believe They Made A Hook For This(not covered, experimental features as of 10/22/2023)

**HELPFUL NOTES**:

- Using 'rfc' will create a react component on the fly via the LSP.
- useState, useEffect, useMemo, useDeferredValue hooks thus far have been the most useful from what I've seen for beginner projects.
