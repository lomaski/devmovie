import { Container, Coven, Info } from './styles'; 
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
import { getPerson } from "../../services/getDate";
import { getImages } from "../../utils/getImages";

function People() {
    const { id: paramsId } = useParams();
    const [personData, setPersonData] = useState(null);

    useEffect(() => {
        async function fetchPersonData() {
            try {
                const data = await getPerson(paramsId);
                setPersonData(data);
            } catch (error) {
                console.error("Erro ao buscar dados da pessoa:", error);
            }
        }

        if (paramsId) {
            fetchPersonData();
        }
    }, [paramsId]);

    // Retorna null (ou um componente de Loading) enquanto os dados não chegam
    if (!personData) {
        return <p>Carregando...</p>; 
    }

    // Agora é 100% seguro acessar as propriedades de personData
    const birthday = new Date(personData.birthday);

    console.log(personData); // Log para depuração

    return (
        <Container>
            <Coven>
                <img src={getImages(personData.profile_path)} alt={personData.name} />
            </Coven>

            <Info>
                <h2>{personData.name}</h2>
                <p>Conhecido(a) como: {personData.also_known_as.join(", ")}</p>
                <p>Profissão: {personData.known_for_department}</p>
                <p>Sexo: {personData.gender === 1 ? "Feminino" : "Masculino"}</p>
                <p>Nascimento: {birthday.toLocaleDateString()}</p>
                <p>Local de Nascimento: {personData.place_of_birth}</p>
                {personData.biography && <p>Biografia: {personData.biography}</p>}
            </Info>
        </Container>
    );
}


export default People;
