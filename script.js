// Squad 78 Members List
const students = [
    { roll: "2410998531", name: "HARPRABH SINGH NANDA", email: "harprabh.singh.s78@kalvium.community" },
    { roll: "2410998532", name: "HARSEHAJ SINGH", email: "harsehaj.singh.s78@kalvium.community" },
    { roll: "2410998533", name: "HARSHITA", email: "harshita.s78@kalvium.community" },
    { roll: "2410998534", name: "HARSHVARDHANAM", email: "harshvardhanam.s78@kalvium.community" },
    { roll: "2410998535", name: "HIMANSHU BANSAL", email: "himanshu.bansal.s78@kalvium.community" },
    { roll: "2410998536", name: "HRIDAYJIT SINGH  NANDA", email: "hridayjit.singh.s78@kalvium.community" },
    { roll: "2410998537", name: "ISHPREET SINGH", email: "ishpreet.singh.s78@kalvium.community" },
    { roll: "2410998538", name: "JASAN SINGH", email: "jasan.singh.s78@kalvium.community" },
    { roll: "2410998539", name: "JASNOOR  KAUR", email: "jasnoor.kaur.s78@kalvium.community" },
    { roll: "2410998540", name: "JATIN MALIK", email: "jatin.malik.s78@kalvium.community" },
    { roll: "2410998541", name: "JIYA AGNIHOTRI", email: "jiya.agnihotri.s78@kalvium.community" },
    { roll: "2410998542", name: "KAASHVI", email: "kaashvi.s78@kalvium.community" },
    { roll: "2410998543", name: "KAVYA GUJRAL", email: "kavya.gujral.s78@kalvium.community" },
    { roll: "2410998544", name: "KRISH GARG", email: "krish.garg.s78@kalvium.community" },
    { roll: "2410998545", name: "KUNAL AHUJA", email: "kunal.ahuja.s78@kalvium.community" },
    { roll: "2410998546", name: "LAVANYA  MAHAJAN", email: "lavanya.mahajan.s78@kalvium.community" },
    { roll: "2410998547", name: "LAVANYA LUHAN", email: "lavanya.luhan.s78@kalvium.community" },
    { roll: "2410998548", name: "LAVIZA MUNJAL", email: "laviza.munjal.s78@kalvium.community" },
    { roll: "2410998549", name: "MADHAV MEHTA", email: "madhav.mehta.s78@kalvium.community" },
    { roll: "2410998550", name: "MANAN MAHAJAN", email: "manan.mahajan.s78@kalvium.community" },
    { roll: "2410998551", name: "MITANSH KAUSHAL", email: "mitansh.kaushal.s78@kalvium.community" },
    { roll: "2410998552", name: "MUSKAN DAWAR", email: "muskan.dawar.s78@kalvium.community" },
    { roll: "2410998572", name: "Rakshit Sharma urf THE PANDIT🦅", email: "rakshit.sharma.s79@kalvium.community"}
];


// Dynamically Generate Student Cards
const studentGrid = document.querySelector(".grid");

students.forEach(student => {
    let card = document.createElement("div");
    card.classList.add("student");
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p><strong>Roll No:</strong> ${student.roll}</p>
        <a href="mailto:${student.email}">${student.email}</a>
    `;
    studentGrid.appendChild(card);
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "🔆" : "🌙";
});

// Trivia Game
const triviaQuestions = [
    { q: "Who is Squad 78's CR?", a: "HARSHVARDHANAM!" },
    { q: "What year did Squad 78 start?", a: "2024!" },
    { q: "What is the best thing about Squad 78?", a: "Friendship and teamwork!" }
];

document.getElementById("triviaButton").addEventListener("click", () => {
    let random = Math.floor(Math.random() * triviaQuestions.length);
    document.getElementById("question").innerText = triviaQuestions[random].q;
    document.getElementById("answer").innerText = triviaQuestions[random].a;
});
