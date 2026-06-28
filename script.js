function openInvite() {
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");

  console.log("clic enveloppe OK");

  if (intro) {
    intro.style.display = "none";
  }

  if (content) {
    content.style.display = "block";
  } else {
    console.error("#content introuvable");
  }
}

async function send() {

  const url = "https://script.google.com/macros/s/AKfycbwNA3YrmQ7LqVyaNEynfcYqcywH4TYDsWLo5VQWgPrSUZ0VyqDnTLYXGVgq_VmR532g/exec";

  const data = {
    name: document.getElementById("name").value,
    presence: document.getElementById("presence").value,
    people: document.getElementById("people").value,
    message: document.getElementById("message").value
  };

  document.getElementById("status").innerText = "⏳ Envoi...";

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const text = await res.text();

    if (text === "OK") {
      document.getElementById("status").innerHTML = `
        🎉 <b>Merci !</b><br>
        Votre réponse a bien été enregistrée ❤️<br>
        Nous avons hâte de vous voir !
      `;

      if (typeof confetti === "function") {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

    } else {
      document.getElementById("status").innerText = "⚠️ Erreur serveur";
    }

  } catch (e) {
    console.log(e);
    document.getElementById("status").innerText = "❌ Erreur d’envoi";
  }
 }
function openInvite() {
  const envelope = document.querySelector(".envelope");
  const intro = document.getElementById("intro");
  const content = document.getElementById("content");

  envelope.classList.add("open");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.2)";

    setTimeout(() => {
      intro.style.display = "none";

      content.style.display = "block";

      requestAnimationFrame(() => {
        content.classList.add("show");
      });

    }, 600);

  }, 800);
}
const music = document.getElementById("bg-music");
if (music) {
  music.volume = 0.2;
  music.play();
}