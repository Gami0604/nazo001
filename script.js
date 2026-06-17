function checkAnswer() {
    const answer = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    if (answer === "0000") {
        location.href = "jR9qtwZD.html";
    } else {
        document.getElementById("message").textContent =
            "ちがいます";
    }
}
