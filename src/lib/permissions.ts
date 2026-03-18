import { UserRole } from "@/types/domain";

const matrix: Record<UserRole, string[]> = {
  admin: ["*"],
  reception: ["reservations", "checkin", "checkout", "charges", "rooms.read"],
  housekeeping: ["housekeeping"],
  finance: ["finance.read", "finance.write", "reports.finance"],
  management: ["dashboard", "reports", "rooms.read"]
};

export function hasPermission(role: UserRole, permission: string) {
  return matrix[role].includes("*") || matrix[role].includes(permission);
}
