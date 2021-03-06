# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What are Hooks?
 1. Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.
 Ex: State of a componennt
 2. Hoks don't work inside classes

## Why Hooks?
 1. Reason set 1
    1. Understand how  **this** keyword works in javaScript
    2. Remember to bind event handlers in class components
    3. Classes don't minify very well and make hot reloading very unreliable
 2. Reason set 2
    1. There is no particular way to reuse stateful component logic
    2. HOC and render props patterrns do address this problem. Makes the code harder to follow.
    3. There is need a to share stateful logic in a better way
3. Reason set 3
    1. Create components for complex scenarios such as data fetching and subscribing to events related code is not organized in one place. Beacse of stateful logic cannot break components into smaller ones
    2. Ex:
        1. Data fetching - In componentDidMount and componentDidUpdate
        2. Event listerners - In componentDidMount and componentWillUnmount

## Rules of Hooks
 1. Only call hooks at the Top Level - Don't call hooks inside loops, conditions, or nested functions
 2. Only call hooks from React Functions - Call them from within React functional components and not just any regular JavScript function

## useState
 1. The useState hook lets you add state to **functional components**
 2. In classes, the state is always an object
 3. With the useState hook, the state doesn't gave to be object.
 4. The useState hook returns an array with 2 elements.The first element is the current valure of the state, and the second element is a state setter function
 5. New state value depends on the previous state value? You can pass a function to the setter function.
 6. When dealing with objects or arrays, always make sure to spread your variable and the call the setter function

## useEffect
 1. The Effect Hook lets you perform** side effects** in **functional components**
 2. It is a close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

## useContext
 Context provide a way to pass data through the component tree without having to pass props down manually at every level
 Ex:
     ```
     const AppContext = createContext();
     <AppContest.provider value = {{....}}>
       <Login /> <User />
     </AppContest.provider>  
     const {...} = useContext(AppContext);
     ```

## useReducer
  1. useReducer is a hook that is used for state management
  2. It is an alternative to useState
  3. useState is built using useReducer
  4. It is related to reducer functions

## reduce vs useReducer
 reduce in JavaScript | useReducer in React
 ------- | -------
 array.reduce(reducer,initialValue) | useReducer(reducer, initialState)
 singValue = reducer(accumulator,itemValue) | newState = reducer(currentState action)
 reduce method returns a single value | useReducer returns a pair of values ie newState and dispatch

## useState vs useReducer
Scenario | useState | useReducer
---------|----------|---------
 Type of state| Number,String,Boolean | Object or Array
 Number of state transitions | One or Two | Too many
 Related state transitions? | No | Yes
 Buisness logic | No buisness logic | Complex buisness logic
 Local vs Global | Local | Global

## useCallback
 1. useCallback us a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
 2. It is useful when passing callbacks to optimized child component that rely on reference equality to prevent unnecessary renders
 3. Suppose we have one parent component having 5 child component, if any changes happens in any ofe of the child component, all of other component also ger re-render.
 4. we can avoild this re-render by using memo, which will not re-render a page unless any of it props or state ger changed
 5. When we are passing some function as props to child from parent component, if any changes happen in parent component will re-render child , Hence we need to check reference equality ie function before re-render not equal to fnction after re-render. So if we use memo, it cant solve the issue.
 6. useCallback is usefull when passing callback to optimize child componet that rely on reference equality to revent unneccessary render
 7. Ex:
     ```javascript
     const incremetAge = useCallback(()=> {
       setAge(age +1);
     },[age]);
     ``` 

## useMemo
 1. Suppose we have the logic to display sorted the array and display small counter value.
 2. For every sorting or increment page, get re-render but suppose sorting array takes 2s and increment takes 0.1s when we do increment then also it takes 2s, because of re-render of page it will again execute sorting logic wich usually takes 2s.
 3. Ex:
     ```javascript
     const isEven = useMemo(()=> {
      let i = 0;
      while ( i<2000) i++;
      return count + 1;
     },[count]);
     ```  

## useRef
 used to create generic conatiner that can hold mutuable value similar to instance property on class component. This generic conatiner doesn't causere-render when data it stores changes, at the same time it also remembers stored data even after other state variable cause the re-render of component

## useLayoutEffect
 1. It is called before useEffect ie when before component start to laod (before inital render)
 2. useEffect called after first render of the page
 
## useImperativeHandle
 1. Execute child logic on parent component
 
## Custom Hooks
 1. A custom Hook is basically a JavaScript function whose name starts with 'use'
 2. A custom hook can also call other Hooks if required
 3. It share the logic ie, Alernative to HOCs and Render Props
 

