// component to house all fetch requests 

// GET requests 
export const getAllCustomers = (customerId) => {
    return fetch(`http://localhost:8088/customers?_expand=user&userId=${customerId}`)
        .then(response => response.json())
}

export const getCustomers = (customerId) => {
    return fetch(`http://localhost:8088/customers/${customerId}`)
        .then(response => response.json())
}

export const getCustomersAndUsers = () => {
    return fetch(`http://localhost:8088/customers?_expand=user`)
        .then(response => response.json())
}

export const getAllEmployees = (employeeId) => {
    return fetch(`http://localhost:8088/employees?_expand=user&_expand=location&userId=${employeeId}`)
        .then(response => response.json())
}

export const getLocations = () => {
    return fetch(`http://localhost:8088/locations`)
        .then(response => response.json())
}

export const getAllEmployeesLocations = () => {
    return fetch(`http://localhost:8088/employees?_expand=user&_expand=location`)
        .then(response => response.json())
}

export const getProductsWithTypes = () => {
    return fetch(`http://localhost:8088/products?_sort=name&_expand=productType`)
        .then(response => response.json())
}


export const getOrders = () => {
    return fetch(`http://localhost:8088/purchases?_expand=product&_expand=customer`)
        .then(response => response.json())
}

export const getProductTypes = () => {
    return fetch(`http://localhost:8088/productTypes`)
        .then(response => response.json())
}

// PUT requests
export const saveCustEdit = (customerId, customer) => {
    return fetch(`http://localhost:8088/customers/${customerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
        .then(response => response.json())
}

// POST requests 
export const saveNewUser = (userToApi) => {
    return fetch(`http://localhost:8088/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToApi)
    })
        .then(response => response.json())
}

export const saveNewEmployee = (employeeToApi) => {
    return fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToApi)
    })
        .then(response => response.json())
}

export const saveNewPurchase = (userId, product) => {
    return fetch(`http://localhost:8088/purchases`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            customerId: userId.id,
            productId: parseInt(product.id),
            amount: 1
        })
    })
        .then(response => response.json())
}

export const saveNewProduct = (productToAPI) => {
    return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productToAPI)
    })
        .then(response => response.json())
}


// DELETE requests
export const deleteEmployee = (id) => {
    return fetch(`http://localhost:8088/users/${id}`, {
        method: "DELETE"
    })
}
