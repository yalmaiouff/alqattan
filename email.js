const emailLink = document.getElementById("email-link");
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

if (emailLink && isMobile) {
  const recipient = new URL(emailLink.href).searchParams.get("to");
  emailLink.href = `ms-outlook://compose?to=${encodeURIComponent(recipient)}`;
  emailLink.removeAttribute("target");
}
