function isValidPhoneNumber(pn) {
  let regexp =
    /^(\+7|8)( ?\(?[0-9]{3}\)? ?)( ?[0-9]{3}\-? ?)( ?\-?[0-9]{2}\-? ?)( ?\-?[0-9]{2})$/;
  console.log(regexp.test(pn));
}
isValidPhoneNumber('+7(999)476-56-43');
