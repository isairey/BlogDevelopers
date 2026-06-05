export const subscribeEmail = (email: string) => {
  const clean = email.trim().toLowerCase();

  if (!clean) return { ok: false, message: "Email vacío" };

  const list = JSON.parse(localStorage.getItem("emails") || "[]");

  if (list.includes(clean)) {
    return { ok: false, message: "Ya estás suscrito" };
  }

  list.push(clean);
  localStorage.setItem("emails", JSON.stringify(list));

  return { ok: true, message: "Suscripción exitosa" };
};