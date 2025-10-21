// Entry animation for the form
gsap.from("#parent", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const Boy = document.getElementById("Boy");
  const Girl = document.getElementById("Girl");

  const l1 = Boy.value.length;
  const l2 = Girl.value.length;

  const result = Math.pow(l1 + l2, 3) % 101;

  const resultText = document.querySelector("h2");
  resultText.textContent = `🎉 Wooww your Matching Result is: ${result}% 🎉`;

  form.reset(); 
  // Firecracker burst effect
  gsap.fromTo("body", 
    { backgroundColor: "black" }, 
    { backgroundColor: "#ff4e50", duration: 0.3, yoyo: true, repeat: 3 }
  );

  // Flower burst animation
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = "🌸";
    document.body.appendChild(flower);

    gsap.fromTo(flower, 
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 0.5,
        position: "absolute",
        left: "50%",
        top: "50%",
        fontSize: "2rem"
      },
      {
        x: Math.random() * 600 - 300,
        y: Math.random() * 400 - 200,
        scale: 1.5,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        onComplete: () => flower.remove()
      }
    );
  }

  // Result text bounce
  gsap.fromTo(resultText, 
    { scale: 0.5, opacity: 0, color: "#fff" }, 
    { scale: 1.2, opacity: 1, duration: 1, ease: "bounce.out", color: "#ff69b4" }
  );
  if (result > 40) {
  const congrats = document.createElement("div");
  congrats.textContent = "💖 Perfect Match! 💖";
  congrats.style.position = "fixed";
  congrats.style.top = "20%";
  congrats.style.left = "50%";
  congrats.style.transform = "translate(-50%, -50%)";
  congrats.style.fontSize = "2rem";
  congrats.style.color = "#fff";
  congrats.style.zIndex = "9999";
  document.body.appendChild(congrats);

  gsap.fromTo(congrats, 
    { scale: 0, opacity: 0 }, 
    { scale: 1.5, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
  );

  setTimeout(() => congrats.remove(), 3000);
}
});