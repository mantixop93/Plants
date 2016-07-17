var reg = /\d/g;

var str = "sadf5srdtfg2dasrd1adwa";

console.log(str.split(reg));

reg = /[0-9a-z\._-]+@[0-9a-z]+.[0-9a-z]+/gi;

str = "amwdoawdm damwod ak m.y@email.com awdaw her@email.com wadawda m.y@email.coms awda";

console.log(str.match(reg));

reg = /<script>.*<\/script>/g;

str = "<awd></adw> awdkmaw<script> dawjdawkdakw </script> awdjadwd <awd>";

console.log(str.match(reg));