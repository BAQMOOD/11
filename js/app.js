document.getElementById('refund-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  if (!data.firstName || !data.lastName || !data.email || !data.orderId || !data.amount || !data.reason) {
    alert('Merci de compléter tous les champs obligatoires.');
    return;
  }

  // Remplacez par votre endpoint de formulaire (Formspree / Basin / Getform / Netlify Forms / votre API)
  try {
    const resp = await fetch('https://your-form-endpoint.example/submit', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });
    if (resp.ok) {
      alert('Demande envoyée. Nous vous répondrons sous 24–48h.');
      e.target.reset();
    } else {
      alert("Une erreur s'est produite. Réessayez plus tard.");
    }
  } catch {
    alert("Impossible d'envoyer pour l'instant. Vérifiez votre connexion.");
  }
});
