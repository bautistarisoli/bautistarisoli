export const getYears = () => {
     const birthday = new Date("2002-08-01")
     const now = new Date()
     const diff = now.getTime() - birthday.getTime()
     const diffDias = diff / (1000 * 60 * 60 * 24)
     return Math.floor(diffDias / 365) 
}