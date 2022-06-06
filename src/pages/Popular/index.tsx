import { FC } from "react";
import ContentCard from "../../components/ContentCard";
import "./style.scss";

const Popular: FC = () => {
    return (
        <div className="popular__section">
            <ContentCard
                theme="Design"
                author="Embacy"
                content={{
                    title: "Трудности перевода: веб-дизайн в разных странах",
                    text:
                        "Работая с клиентами из 27 стран, заметили некоторые закономерности — очевидные и не только. Разные языки, разные культуры, разные люди — но насколько отличаются у них сайты?",
                }}
            />
        </div>
    );
};

export default Popular;
