const { Client } =require('pg')

const client = new Client( {
    connectionString: "postgresql://tiago:tiagotiago@localhost:5432/node_postgres"
})

async function openConnection() {
    await client.connect()
    const result = await client.query("SELECT 1+1 as result;")
    setTimeout( () => {
        client.end()
        console.log('Fechando Connection')
    }, 5000)
}


openConnection()