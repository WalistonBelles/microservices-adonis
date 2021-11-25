const userRoles = ["admin", "desenvolvedor", "analista", "cliente"] as const

type UserRole = typeof userRoles[number]

export { userRoles, UserRole }
