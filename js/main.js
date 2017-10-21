$("#sendButton").on('click', function () {
    let birthday = $("#inputBirthday").val();
    let date = new Date(birthday);
    let herescope = findHerescope(date);
    console.log(herescope);
    $("#result").attr("class", "burc");
    $("#result").addClass(herescope);
});


function findHerescope(date) {
    console.log(date.getMonth(), date.getDate());
    if (((date.getMonth() === 2) && (date.getDate() >= 20 && date.getDate() <= 31)) ||
        ((date.getMonth() === 3) && (date.getDate() >= 0 && date.getDate() <= 19))) {
        return "aries";
    }
    if (((date.getMonth() === 3) && (date.getDate() >= 20 && date.getDate() <= 31)) ||
        ((date.getMonth() === 4) && (date.getDate() >= 0 && date.getDate() <= 20))) {
        return "taurus";
    }
    if (((date.getMonth() === 4) && (date.getDate() >= 21 && date.getDate() <= 31)) ||
        ((date.getMonth() === 5) && (date.getDate() >= 0 && date.getDate() <= 20))) {
        return "gemini";
    }
    if (((date.getMonth() === 5) && (date.getDate() >= 21 && date.getDate() <= 31)) ||
        ((date.getMonth() === 6) && (date.getDate() >= 0 && date.getDate() <= 21))) {
        return "cancer";
    }
    if (((date.getMonth() === 6) && (date.getDate() >= 22 && date.getDate() <= 31)) ||
        ((date.getMonth() === 7) && (date.getDate() >= 0 && date.getDate() <= 21))) {
        return "leo";
    }
    if (((date.getMonth() === 7) && (date.getDate() >= 22 && date.getDate() <= 31)) ||
        ((date.getMonth() === 8) && (date.getDate() >= 0 && date.getDate() <= 21))) {
        return "virgo";
    }
    if (((date.getMonth() === 8) && (date.getDate() >= 22 && date.getDate() <= 31)) ||
        ((date.getMonth() === 9) && (date.getDate() >= 0 && date.getDate() <= 21))) {
        return "libra";
    }
    if (((date.getMonth() === 9) && (date.getDate() >= 22 && date.getDate() <= 31)) ||
        ((date.getMonth() === 10) && (date.getDate() >= 0 && date.getDate() <= 20))) {
        return "scorpio";
    }
    if (((date.getMonth() === 10) && (date.getDate() >= 21 && date.getDate() <= 31)) ||
        ((date.getMonth() === 11) && (date.getDate() >= 0 && date.getDate() <= 20))) {
        return "sagittarius";
    }
    if (((date.getMonth() === 11) && (date.getDate() >= 21 && date.getDate() <= 31)) ||
        ((date.getMonth() === 0) && (date.getDate() >= 0 && date.getDate() <= 19))) {
        return "capricorn";
    }
    if (((date.getMonth() === 0) && (date.getDate() >= 20 && date.getDate() <= 31)) ||
        ((date.getMonth() === 1) && (date.getDate() >= 0 && date.getDate() <= 20))) {
        return "aquarius";
    }
    if (((date.getMonth() === 1) && (date.getDate() >= 19 && date.getDate() <= 31)) ||
        ((date.getMonth() === 2) && (date.getDate() >= 0 && date.getDate() <= 19))) {
        return "pisces";
    }
}
