const questions = [
  {
    question: "Kapan waktu terbaik pakai sunscreen? ☀️",
    options: ["Malam hari", "Setiap pagi sebelum keluar rumah", "Saat hujan aja"],
    answer: 1
  },
  {
    question: "Fungsi toner itu apa sih? 💧",
    options: ["Buat nambah minyak di wajah", "Biar wajah makin kusam", "Mengembalikan pH kulit setelah cuci muka"],
    answer: 2
  },
  {
    question: "Apa urutan skincare yang benar? 🧖‍♀️",
    options: ["Toner - Serum - Moisturizer", "Serum - Sunscreen - Toner", "Moisturizer - Toner - Serum"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultText = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  optionsDiv.innerHTML = "";
  resultText.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].answer;
  if (index === correct) {
    resultText.textContent = "🎉 Benar, good job skintizen!";
    score++;
  } else {
    resultText.textContent = "😢 Salah, coba lagi yuk!";
  }
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionText.textContent = `Selesai! Kamu benar ${score} dari ${questions.length} 💖`;
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";
  resultText.textContent = "Terima kasih udah main yaa~ 🧴✨";
}

// Start quiz
showQuestion();
