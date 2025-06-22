const users = [
  {
    id: 1,
    email: "marina.kazsntseva.2005@gmail.com",
    password: "password123",
    name: "Марина",
    middleName: "Александровна",
    lastName: "Казанцева",
    phone: "+7(953)804-31-93",
    address: {
      region: "Новосибирская",
      city: "Новосибирск",
      street: "Зорге",
      house: "17",
      apartment: "55",
      zip: "630088"
    }
  }
];

export default {
  users,
  addUser(user) {
    const newUser = { ...user, id: this.users.length + 1 }
    this.users.push(newUser)
    return newUser
  },
  findUserByEmail(email) {
    return this.users.find(user => user.email === email)
  },
  updateUser(id, updates) {
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updates }
      return this.user[userIndex]
    }
    return null
  }
}