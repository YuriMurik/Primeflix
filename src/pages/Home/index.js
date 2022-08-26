import { useEffect, useState } from 'react';
import api from '../../services/api';

// https://api.themoviedb.org/3/movie/now_playing?api_key=c1b62582800c630e7b49ef874248aa61

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'c1b62582800c630e7b49ef874248aa61',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results);

        }

        loadFilmes();

    }, [])

    return (
        <div>
            BEM VINDO A HOME
        </div>
    )
}

export default Home;