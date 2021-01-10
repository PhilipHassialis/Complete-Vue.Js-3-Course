import { createApp } from "vue/dist/vue.esm-browser.js";

const Num = {
    props: {
        numberProp: {
            type: Number,
            required: true,
        },
    },
    methods: {
        getClass(number) {
            return this.isEven(number) ? "red" : "blue";
        },
        isEven(number) {
            return number % 2 === 0;
        },
        handleClick() {
            this.$emit("clickedNumberEvent", { number: this.numberProp });
        },
    },
    template: `
        <button :class="getClass(numberProp)" @click="handleClick" >{{numberProp}}</button>
    `,
};

const app = createApp({
    components: {
        Num,
    },
    template: `
        <num />
        <p>{{person}}</p>
        <p>{{count}}</p>
        <button @click="increment(3)">Increment</button>

        <div v-if="isEven(count)">
            Even
        </div>
        <div v-else>
            Odd
        </div>
        <div v-for="name in names">
            {{name}}
        </div>
        <div v-for="even in evenList">
            <num :numberProp="even"/>
        </div>
        <div>
            <num v-for="theNumber in numbers" :numberProp="theNumber" @clickedNumberEvent="clickedNumberHandler"/>
            | Unclickable numbers:
            <num v-for="theNumber in clickedNumbers" :numberProp="theNumber" />

        </div>
        <input @input="input" :value="value" /> | <input v-model="value" /> | {{ value }}
        <div v-if="error">{{error}}</div>
        <input type="checkbox"  v-model="boolValue"> | {{ boolValue }} 
        <div>
            <input type="radio" v-model="radioValue" value="a" />
            <input type="radio" v-model="radioValue" value="b" />
            {{radioValue}}
        </div>
        <div>
            <input type="checkbox" v-model="arrayValue" value="first" />
            <input type="checkbox" v-model="arrayValue" value="second" />
            {{arrayValue}}
        </div>

        
    `,
    computed: {
        nameList() {
            return this.names;
        },
        evenList() {
            return this.numbers.filter(this.isEven);
        },
        error() {
            if (this.value.length < 7) {
                return "Too short";
            }
        },
    },
    data() {
        return {
            msg: "world",
            person: {
                name: "Philip",
                age: 45,
            },
            count: 0,
            names: ["Philip", "Helen", "Kostas", "Fenia", "George", "Katerina"],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            value: "User",
            boolValue: false,
            radioValue: "a",
            arrayValue: [],
            clickedNumbers: [],
        };
    },
    methods: {
        increment(value) {
            this.count += value;
        },
        isEven(number) {
            return number % 2 === 0;
        },

        input($evt) {
            let inputValue = $evt.target.value;
            console.log("Input value", inputValue);
            this.value = inputValue;
        },
        clickedNumberHandler(payload) {
            console.log("It works " + payload.number);
            this.clickedNumbers.push(payload.number);
        },
    },
}).mount("#app");
