import { useState } from "react";
import axios from "axios";
import { capFirstLetter } from "../../../utils";
import "./NewForm.scss";

export default function NewForm({ category }) {
    const [newFormData, setNewFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
    });
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const multiData = new FormData();
        multiData.append("image", image);
        for (let key in newFormData) {
            multiData.append(key, newFormData[key]);
        }
        try {
            await axios.post('/api/admin/controls/new', multiData, { withCredentials: true });
            setLoading(false);
            setNewFormData({
                name: "",
                price: "",
                description: "",
                category: "",
            });
            setImagePreview(null);
            setImage();
        } catch (err) {
            setLoading(false);
        }
    };

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewFormData((curr) => ({ ...curr, [name]: value }));
    };

    return (
        <div className="newform-container">
            {loading && <h1>loading</h1>}
            <h1 className="newform-tag">Add</h1>
            <form className="newform-form" onSubmit={handleSubmit} encType="multipart/form-data">
                {imagePreview && <img className="newform-image-preview" src={imagePreview} alt="Preview" />}
                <label htmlFor="image">Image</label>
                <input required onChange={handleImage} id="image" type="file" name="image" />
                <label htmlFor="name">Name</label>
                <input required onChange={handleChange} id="name" type="text" name="name" value={newFormData.name} placeholder="the name of this item" />
                <label htmlFor="price">Price</label>
                <input required onChange={handleChange} id="price" type="number" name="price" value={newFormData.price} placeholder="the price of this item" />
                <label htmlFor="description">Description</label>
                <textarea className="newform-textarea" required onChange={handleChange} id="description" type="text" name="description" value={newFormData.description} placeholder="the description of this item" />
                <label htmlFor="category">Category</label>
                <select required onChange={handleChange} id="category" name="category" value={newFormData.category}>
                    {category.map((c, idx) => (
                        <option defaultValue={c} value={c} key={idx}>{capFirstLetter(c)}</option>
                    ))}
                </select>
                <button type="submit">Add new data</button>
            </form>
        </div>
    );
}