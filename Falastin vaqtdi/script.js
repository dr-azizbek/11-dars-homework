let date = new Date();
alert('O\'zbekistondagi vaqt: ' + date);
let utcDate = date.toLocaleString("UTC", {timeZone: "Asia/gaza"});
alert('Hozir Falastindagi vaqt: ' + utcDate);