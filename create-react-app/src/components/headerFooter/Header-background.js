export default function HeaderBackground(props) {
    return (
        <section className={props.class}>
            <div>
                <h1>{props.title}</h1>
                <p className="subtitle">{props.subTitle}</p>
            </div>
        </section>
    );
}