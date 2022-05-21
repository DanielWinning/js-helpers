import Helper from "./Helper";

const helloWorld = (name = null) => {
    const log = name === null ? "world" : name;
    console.log(`Hello, ${log}!`);
}

export default { helloWorld, Helper };