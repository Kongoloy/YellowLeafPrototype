import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminLink.scss'
export default function AdminLink() {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API}/api/admin/auth`, formData, { withCredentials: true });
            navigate('/admin/controls');
        } catch (err) {
            console.error('Error submitting form:', err);
            setError(true);
        }
    };

    const handleChange = (e) => {
        setFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="admin-container">
            <h1 className="admin-tag">Welcome</h1>
            <form className="admin-form" onSubmit={handleSubmit}>
                <label htmlFor="passwordLogin">Password</label>
                <input id="passwordLogin" onChange={handleChange} type="text" name="passwordLogin" placeholder="Place your code here" />
                {error && <p className="admin-error">Wrong credentials</p>}
                <button type="submit">Submit</button>
                <button className="admin-home" onClick={() => navigate('/')}>Home</button>
            </form>


        </div>
    );
}
