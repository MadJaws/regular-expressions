let str = prompt('Enter URL', 'http://azaza.php');
let regexp = /^https?:\/\/\S+.(php|html)$/i;
alert(regexp.test(str));
