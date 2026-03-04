"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const plan = formData.get("plan");
  const message = formData.get("message");

  // Server-side validation
  if (!name || !email || !message) {
    return {
      success: false,
      error: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (!formspreeId || formspreeId === "YOUR_FORM_ID_HERE") {
    console.error("FORMSPREE_FORM_ID is not configured in .env.local");
    return {
      success: false,
      error: "Le formulaire n'est pas encore configuré. Veuillez contacter l'administrateur.",
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Non renseigné",
        plan: plan || "Non spécifiée",
        message,
        _subject: `Nouvelle demande TGE de ${name}`,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      console.error("Formspree error:", data);
      return {
        success: false,
        error: "Erreur lors de l'envoi. Veuillez réessayer.",
      };
    }
  } catch (error) {
    console.error("Network error:", error);
    return {
      success: false,
      error: "Impossible de contacter le serveur. Vérifiez votre connexion.",
    };
  }
}
