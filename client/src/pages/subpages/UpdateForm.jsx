import { useState } from "react"

export default function UpdateForm({ category }) {
    const [updateFormData, setUpdateFormData] = useState({})
    return (
        <div>
            <h1>Update</h1>
            <form action="/api/admin/update" method="POST">
                <label htmlFor="image">Image</label>
                <input id="image" type="file" name="image" />
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
                <label htmlFor="price">Price</label>
                <input id="price" type="text" name="price" />
                <label htmlFor="description">Description</label>
                <input id="description" type="text" name="description" />
                <label htmlFor="category">Category</label>
                <input id="category" type="text" name="category" />
            </form>
        </div>
    )
}