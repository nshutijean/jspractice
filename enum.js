/**
 * Enum implementation in Javascript
 * using Object.freeze()
 * Preventing it to be modified
 */

//Names of 12 months of the year in Rwanda
const AMEZI = Object.freeze({
    MUTARAMA: "Mutarama",
    GASHYANTARE: "Gashyantare",
    WERURWE: "Werurwe",
    MATA: "Mata",
    GICURASI: "Gicurasi",
    KAMENA: "Kamena",
    NYAKANGA: "Nyakanga",
    KANAMA: "Kanama",
    NZELI: "Nzeli",
    UKWAKIRA: "Ukwakira",
    UGUSHYINGO: "Ugushyingo",
    UKUBOZA: "Ukuboza",
});

//Can't modify when using const(obviously😂)
const ukwezi = AMEZI.MUTARAMA;
AMEZI.MUTARAMA = "Umucyo";
console.log(ukwezi);

//⚠ Assignment of variable can be done using 'let'
let ukwezi_test = AMEZI.MUTARAMA;
ukwezi_test = "Jamviye";
console.log(ukwezi_test);

