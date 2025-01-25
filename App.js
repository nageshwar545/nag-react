// const heading = React.createElement("h1", {
//     id:"heading"
// }, "I am React Developer");
// console.log(heading);
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [ 
        React.createElement("h1", {
            id: "child1"
        },"I am h1 tag"),
        React.createElement("h2", {
            id: "child1"
        },"I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [ 
        React.createElement("h1", {
            id: "child1"
        },"I am h1 tag"),
        React.createElement("h2", {
            id: "child1"
        },"I am h2 tag")
    ]),
])
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(parent);