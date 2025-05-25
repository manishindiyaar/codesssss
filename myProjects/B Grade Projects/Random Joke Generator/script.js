let jokesArray = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do programmers hate nature? It has too many bugs.",
    "Why did the programmer quit his job? Because he didn't get arrays.",
    "Why did the JavaScript developer wear glasses? Because he didn't C#.",
    "Why did the programmer go broke? Because he used up all his cache.",
    "Why do programmers like UNIX? Because it's user-friendly, it's just very particular about who its friends are.",
    "Why did the programmer go to the doctor? Because he had a code injection.",
    "Why did the programmer get stuck in the shower? Because the instructions on the shampoo bottle said: lather, rinse, repeat.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer use Vim? Because he didn't like anything that was too mainstream.",
    "Why did the programmer call his mother? Because he wanted to hear her byte.",
];

let jokeBtn = document.getElementById("jokeBtn");
let joke = document.getElementById("joke");

jokeBtn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * jokesArray.length);
    let randomJoke = jokesArray[randomIndex];
    joke.innerText = randomJoke;
});