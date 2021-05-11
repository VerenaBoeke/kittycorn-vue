import alphabet from './constants/alphabet.js'
import { nameFirstPart, nameSecondPart } from "./constants/kittycornNames.js"
import months from './constants/months.js'

export default {
    name: "App",
    components: {},
    data() {
        return {
            firstname: null,
            selectedMonth: null,
            kittycornName: null,
            months: months,
        };
    },

    computed: {
        invalid() {
            return this.firstname && this.letterPosition === -1;
        },

        firstChar() {
            return this.firstname && this.firstname.substring(0, 1).toUpperCase();
        },

        letterPosition() {
            return this.firstChar && alphabet.indexOf(this.firstChar);
        }
    },

    methods: {
        calculate() {
            const firstChar = this.firstChar;
            console.log(firstChar);
            var letterPosition = this.letterPosition;
            console.log(alphabet);
            console.log(letterPosition);
            let name01 = nameFirstPart[letterPosition];
            let name02 = nameSecondPart[this.selectedMonth];
            this.kittycornName = name01 + " " + name02;
        },

        reset() {
            this.kittycornName = null
            this.selectedMonth = null
            this.firstname = null
        }
    },
};