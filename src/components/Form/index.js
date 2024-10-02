import styles from "./form.module.css";
import { categories } from "../Category";
import { useState } from "react";

function Form() {

    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState("");

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url) || url.length < 43) {
            setErrors('ERRO: URL inválida')
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    function onSave(e) {
        e.preventDefault()

        // validando URL e CATEGORIA

        if (!category || category === "-") {
            setErrors("ERRO: Escolha uma categoria")
            return
        } else {
            setErrors('')
        }

        const urlVid = valideUrl(url)

        if (urlVid && category) {
            // Guardar URl e category num array
            const newVideo = { url, category }
            setVideos([...videos, newVideo]);

            // Guardar array em localstorage
            localStorage.setItem("videosProjetoReact", JSON.stringify([...videos, newVideo]));

            // limpar forms
            setUrl('');
            setCategory('');
        } else {
            setErrors("ERRO: URL invalida")
            return
        }
    }

    return (
        <section className={styles.container}>
            <h2>Cadastre um Video</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Video</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do video"
                        required="required"
                        value={url}

                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria</option>

                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>CADASTRAR</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;
