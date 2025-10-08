import {useState} from "react";

export default function MyBlog () { {/*Inseriamo tutti i campi che vogliamo nel form*/}
    const [form, setForm] = useState({ 
        author: "",
        title: "",
        body: "",
        public: false 
    });

    const changeForm = (e) => { {/*Gestiamo l'aggiornamento dello stato del form*/}
        const {name, value, type, checked} = e.target

        if (type === "checkbox"){
            setForm({...form, [name]: checked});
        } else {
            setForm({...form, [name]: value});
        }
    }; {/*Creaiamo la condizione per la quale se è un checkbox usiamo il valore booleano, al contrario usa una stringa*/}

    const submitForm = (e) => { {/*Gestione dei dati d'entrata del form: preveniamo il comportamento di default del subit e inviamo i dati al server di POST tramite chiamata*/}
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", form)
        .then (res => console.log (res))
        .catch (error => console.log (error))
    }; {/*Se la chiamata va a buon fine, stampiamo il risultato del server su console. Al contrario, stamperà un errore*/}

    return (
        <>
            <div>
                <h1>Creazione di un nuovo post</h1>
            </div>
            <div>
                <form onSubmit={submitForm}>
                    <input
                        type="text"
                        name="author"
                        value={form.value}
                        onChange={changeForm}
                    />
                </form>
            </div>
        </>
    )
}