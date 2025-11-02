export function calculateDiscountedPrice(basic_price, discount_percentage) {
    if (discount_percentage === null || discount_percentage === undefined || discount_percentage === 0) {
        return basic_price;
    }
    return basic_price * (1 - discount_percentage / 100);
}

export async function getCustomerDiscountMap(customer_id, db) {
    const SQL = `
        SELECT 
            ccp.product_category,
            pc.discount_percentage
        FROM customer_category_pricing ccp
        JOIN price_categories pc ON ccp.price_tier_id = pc.id
        WHERE ccp.customer_id = $1
    `;
    
    try {
        const { rows } = await db.query(SQL, [customer_id]);
        
        const discountMap = new Map();
        rows.forEach(row => {
            discountMap.set(row.product_category, parseFloat(row.discount_percentage));
        });
        
        return discountMap;
    } catch (error) {
        console.error('Error fetching customer discounts:', error);
        return new Map();
    }
}

export async function addCustomerPricingByUserId(products, user_id, db) {
    if (!user_id) {
        return products;
    }
    
    try {
        const { rows } = await db.query(
            'SELECT id FROM customers WHERE user_id = $1',
            [user_id]
        );
        
        if (rows.length === 0) {
            return products;
        }
        
        const customer_id = rows[0].id;
        
        const discountMap = await getCustomerDiscountMap(customer_id, db);
        
        return products.map(product => ({
            ...product,
            customer_price: calculateDiscountedPrice(
                product.basic_price,
                discountMap.get(product.product_category) || null
            )
        }));
    } catch (error) {
        console.error('Error adding customer pricing:', error);
        return products;
    }
}