import ecommerceMicroservices from "../../assets/img/EcommerceBoariDiagram.png";
import diagramaEcommerceBoari from "../../assets/img/diagramaEcommerceBoari.png";
import exameChunin from "../../assets/img/exameChuninFront.png";
import gopportunities from "../../assets/img/gopportunities.png";
import './projects.css';

const redirectToUrl = (url: string) => {
    window.location.href = url;
}


const Projects = () => {
    return (
        <div className="container-project" id="projects">
            <h2>Projetos</h2>
            <div className="project left" onClick={() => redirectToUrl("https://github.com/nicholasboari/ecommerce-boari-microservices")}>
                <div className="project-image">
                    <img src={ecommerceMicroservices} alt="Projeto 1" />
                </div>
                <div className="project-description">
                    <h4>E-commerce Microservices Spring</h4>
                    <p>Sistema de um e-commerce de produtos em geral baseado na arquitetura de Microserviços com Spring Boot 3, Keycloak, Docker, AWS, API Gateway, Service Registry, RabbitMQ</p>
                </div>
            </div>
            <div className="project" onClick={() => redirectToUrl("https://github.com/nicholasboari/ecommerce-boari-api")}>
                <div className="project-description">
                    <h4>E-commerce Spring Boot 3 + AWS</h4>
                    <p>Este projeto é uma API de um e-commerce, na qual possui diversas funcionalidades como: autenticar usuário, autorizar rotas, cadastrar e remover produtos, fazer o upload de arquivos na nuvem utilizando o S3 da AWS, etc.</p>
                </div>
                <div className="project-image">
                    <img src={diagramaEcommerceBoari} alt="Projeto 2" />
                </div>
            </div>
            <div className="project left" onClick={() => redirectToUrl("https://github.com/nicholasboari/gopportunities")}>
                <div className="project-image">
                    <img src={gopportunities} alt="Projeto 3" />
                </div>
                <div className="project-description">
                    <h4>GOpportunities</h4>
                    <p>API moderna de oportunidades de emprego construída usando Golang, Gin, Swagger, GORM, SQLite</p>
                </div>
            </div>
            <div className="project" onClick={() => redirectToUrl("https://github.com/nicholasboari/exame-chunin-front")}>
                <div className="project-description">
                    <h4>Exame Chunin Front</h4>
                    <p>Este é um projeto de gerenciamento de carros construído com React. Ele permite que os administradores adicionem, editem e excluam carros de uma lista, além de filtrar os carros por nome.</p>
                </div>
                <div className="project-image">
                    <img src={exameChunin} alt="Projeto 4" />
                </div>
            </div>
        </div>
    );
}

export default Projects;