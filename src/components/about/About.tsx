import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import me from "../../assets/img/me2.jpg";

import "./about.css";

const About = () => {
    return (
        <div className="container-about">
            <div className="about-content">
                <img src={me} alt="foto do nicholas" className="photo" />
                <div className="about-text">
                    <h2>Olá,</h2>
                    <span>Meu nome é Nicholas Boari, sou um desenvolvedor de software backend com experiência em Java e outras tecnologias. Me considero uma pessoa de rápido aprendizado e estou sempre aberto a assumir novas tarefas e desafios.</span>
                    <div className="social-icons">
                        <a href="https://linkedin.com/in/nicholasboari"><FaLinkedin /></a>
                        <a href="https://github.com/nicholasboari"><FaGithub /></a>
                        <a href="mailto:nicholasboari@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;