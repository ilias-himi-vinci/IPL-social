export function isValidEmail(email: string): boolean {
  if (email.includes(" ")) return false;

  const atParts = email.split("@");
  if (atParts.length !== 2) return false;

  const localPart = atParts[0];
  const domain = atParts[1];

  if (localPart.length === 0) return false;
  if (domain.length === 0) return false;

  const dotIndex = domain.indexOf(".");
  if (dotIndex <= 0) return false;
  if (dotIndex === domain.length - 1) return false;

  return true;
}
