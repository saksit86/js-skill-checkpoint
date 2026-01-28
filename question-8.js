// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let userList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data
};

const data = await userList();
console.log(data)
const newUsers = data.map(user => user.name)
console.log(newUsers)