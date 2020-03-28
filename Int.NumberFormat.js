/**
 * Intl.NumberFormat object is a constructor for objects that enable language sensitive number formatting.
 * ⚠ For better performance run in your browser console
*/

console.log(new Intl.NumberFormat("rw-RW", {
    style: "currency",
    currency: "RWF"
}).format(432342.43));

console.log(new Intl.NumberFormat("pt-PT", {
    style: 'unit',
    unit: "kilometer-per-hour"
}).format(50));

console.log(new Intl.NumberFormat('fr', {
    notation: "compact",
    compactDisplay: "long"
}).format(76789676767));




