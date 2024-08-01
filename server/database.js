import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_charity'
}
).promise()

// export async function getUsers() {
//     const [rows] = await pool.query("SELECT * FROM user")
//     return rows
// }
//  async function getUser(user_Id) {
//     const [rows] = await pool.query(`SELECT * FROM user WHERE user_Id=? `, [user_Id])
//     return rows [0]
// }

async function createtUser(Name, gender, profile_photo, email, contact, address, username, password, privilege) {
    const result = await pool.query(`INSERT INTO user (Name, gender, profile_photo, email, contact, address, username, password, privilege)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [Name, gender, profile_photo, email, contact, address, username, password, privilege])
    return result
}
 
 

 async function getAdmins() {
    const [rows] = await pool.query("SELECT * FROM admin")
    return rows
}

async function getEvents() {
    const [rows] = await pool.query("SELECT * FROM events")
    return rows
}

async function createEvents() {
    const [events] = await pool.query(`
        INSERT INTO events ( evnt_Id, date_created, title, img_path, schedule, description)
            VALUES (?, ?, ?, ?, ?, ?)`, [event_Id, date_created, title, img_path, schedule, description] )
    return events
}


const events = await createEvents(` `,`2016-07-17`, `Hages`, `IMG_20240512_135115_483.jpg`, `2016-08-16`, `we are here to help.`)
 console.log(events)

//  async function getUser(user_Id) {
//     const [rows] = await pool.query(`SELECT * FROM user WHERE user_Id=? `, [user_Id])
//     return rows [0]
// }

