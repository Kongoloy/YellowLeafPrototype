import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { getDrinksCategory } from "../../utils";
import NewForm from "./subpages/NewForm";
import UpdateForm from "./subpages/UpdateForm";
import axios from "axios";
import "./ControlsLink.scss"
export default function Controlslink() {
    const navigate = useNavigate()
    const [currentMode, setCurrentMode] = useState('');
    const [drinksCategory, setDrinkCategory] = useState([]);

    const modeList = {
        NewForm: <NewForm category={drinksCategory} />,
        UpdateForm: <UpdateForm category={drinksCategory} />
    }
    const changeMode = (e) => {
        setCurrentMode(e.target.id)
    }

    useEffect(() => {
        const verify = async () => {
            try {
                setDrinkCategory(await getDrinksCategory())
                const data = await axios.get(
                    `${import.meta.env.VITE_API}/api/admin/controls`,
                    { withCredentials: true }
                );
                const { status } = data;
                return status
                    ? console.log('verified')
                    : navigate("/admin");
            } catch (err) {
                return navigate('/admin');
            }
        };
        verify();
    }, [navigate]);

    return (
        <div className="controls-container">
            <h1 className="controls-tag">Controls</h1>
            <button id="NewForm" onClick={changeMode}>Add new menu</button>
            <button id="UpdateForm" onClick={changeMode}>Update existing</button>
            {modeList[currentMode]}
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}