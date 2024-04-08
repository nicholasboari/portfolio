import "./skills.css"

const Skills = () => {
    return (
        <section className="container-skills" id="skills">
            <h2>Habilidades</h2>
            <div className="content-skills">
                <div className="card">
                    <img src="https://icongr.am/devicon/java-original.svg?size=128&color=currentColor" alt="logo java" />
                    Java
                </div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                    Spring Boot</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                    Spring Cloud</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                    Docker</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" />
                    Go</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" />
                    RabbitMQ</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                    AWS S3, EC2, RDS</div>
                <div className="card">
                    <img src="src/assets/img/microservices.png" />
                    Microservices</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                    SQL</div>
                <div className="card">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    NoSQL</div>
            </div>
        </section>
    )
}

export default Skills