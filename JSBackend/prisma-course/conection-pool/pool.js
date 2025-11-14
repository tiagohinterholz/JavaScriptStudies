const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://tiago:tiagotiago@localhost:5432/node_postgres",
    max: 2
})

async function openConnection() { 
    const client = await pool.connect()

    const result = await client.query("SELECT 1+1 as result;")
    setTimeout( () => {
        client.release()
        console.log('Fechando Connection')
    }, 5000)
}