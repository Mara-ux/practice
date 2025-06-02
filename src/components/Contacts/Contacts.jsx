import InfoL from "../Info/InfoL"
import "./Contacts.module.css"
import s from "./Contacts.module.css"


const Contacts = () => {
    return (
        <section className={s.about}>
            <InfoL
                direction="left"
                name="Как с нами связаться?"
                text1="Мы всегда рады помочь вам! Для связи с нашей службой поддержки вы можете использовать один из следующих способов:"
                li1="ВКонтакте: @your_carnival"
                li2="Телеграм канал: @carnival4us"
                text2="Служба поддержки работает ежедневно с 12:00 до 20:00 (МСК). Мы всегда готовы ответить на ваши вопросы и помочь с любыми возникшими проблемами."
            />
        </section>
    )
}

export default Contacts;