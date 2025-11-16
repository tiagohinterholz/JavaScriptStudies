const { query } = require('../database')

class Customer {
    constructor(customerRow) {
        this.id = customerRow.id
        this.name = customerRow.name
        this.email = customerRow.email
        this.createdAt = new Date(customerRow.created_at)
        this.updatedAt = new Date(customerRow.updated_at)
    }

    static async get() {
        const result = await query(`SELECT * FROM customers`)
        return result.rows.map(row => new Customer(row))
    }

    static async post({ name, email }) {
        const customerExists = await query(`SELECT * FROM customers WHERE email = $1;`, [email])
        if (customerExists.rows[0]) throw new Error("Email already in use!")

        const result = await query(
            `INSERT INTO customers (name, email)
            VALUES ($1, $2)
            RETURNING *`,
            [name, email]
        )
        return new Customer(result.rows[0])
    }

    static async get_detail(id) {
        const result = await query(`SELECT * FROM customers WHERE id = $1`, [id])
        return new Customer(result.rows[0])
    }

    static async patch(id, attributes) {
        const results = await query(`SELECT * FROM customers WHERE id = $1;`, [id])
        if (!results.rows[0]) return null

        const { rows } = await query(`SELECT * FROM customers WHERE id = $1`, [id])
        const customer = new Customer(rows[0])

        Object.assign(customer, attributes)
        await query(
            `UPDATE customers SET
                name = $1,
                email = $2,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $3`,
            [
                customer.name, customer.email, customer.id
            ]
        )
        return new Customer(customer)
    }

    static async delete(id) {
        const result = await query(`DELETE FROM customers WHERE id = $1 RETURNING *;`, [id])
        if (!result.rows[0]) return null
        
        await query(`DELETE FROM customers WHERE id = $1`, [id])
        return { message: 'Customer deleted successfuly'}
    }
}

module.exports = Customer