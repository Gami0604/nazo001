async function sha256(text) {
    const buffer = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(text)
    );

    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

async function checkAnswer() {
    const answer = document
        .getElementById("answer")
        .value
        .trim();

    const hash = await sha256(answer);

    const correctHash0 = "44c875a35e8cb3abd388262d2ab0db64d93b67fd0982aa9dd9ed53320eeeedc2";
    const correctHash1 = "f346692204a77ef735940799259ca692ef60d07ff6f56b8132364689b6999b5d";

    if (hash === correctHash0) {
        document.getElementById("message").textContent = "認証中";
        location.href = atob("alI5cXR3WkQuaHRtbA==");
    }
    else if(hash === correctHash1){
        document.getElementById("message").textContent = "認証中";
        location.href = atob("bTlNaVB3YVkuaHRtbA==");
    } else {
        document.getElementById("message").textContent = "入力したパスワードが違います";
    }
}
