import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'whatwg-fetch';

export default function DetailPage(props) {
    // Component state
    const {id} = useParams();
    const [dog, setDog] = useState([]);
    const [carouselIndicatArray, setCarouselIndicatArray] = useState([]);
    const [carouselInnerArray, setCarouselInnerArray] = useState([]);
    const [charArr, setCharArr] = useState([]);

    // Fetch Function
    useEffect(() => {   
        fetch('/database.json')
            .then(res => res.json())
            .then(data => {
                setDog(data['dog'+id])

                // Indicator buttons
                setCarouselIndicatArray(data['dog'+id].images.map((item, index) => {
                    return (
                        <button key={index} type="button" aria-label="Change dog image"
                                data-bs-target="#picture-gallery" 
                                data-bs-slide-to={index} 
                                className={index===0?'active':null}>
                        </button>
                    )
                }))

                // Dog images
                setCarouselInnerArray(data['dog'+id].images.map((item, index) => {
                    return (
                        <div key={index} className={['carousel-item', index===0?'active':null].join(' ')}>
                            <img className="d-block w-100 shadow-lg" src={item} alt='Dog' />
                        </div>
                    )
                }))

                // Dog characteristics
                setCharArr(data['dog'+id].personality.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                }))
            })
            .catch(e => console.log('error:', e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])    

    return (
        <div>
            <div id="picture-gallery" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    { carouselIndicatArray }
                </div>
                <div className="carousel-inner">
                    { carouselInnerArray }
                </div>
                <a className="carousel-control-prev" href="#picture-gallery" role="button" data-bs-slide="prev" aria-label='Previous image'>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#picture-gallery" role="button" data-bs-slide="next" aria-label='Next image'>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <section className="py-5 container">
                <div className="row py-lg-5">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="card mb-3">
                            <div className="card-body">
                                <h2 className="fw-light text-left">🐶 {dog.name}</h2>
                                <figure>
                                    <figcaption className="blockquote-footer">
                                        {dog.gender} {dog.ageCategory} {dog.size} {dog.color}/{dog.breed}
                                    </figcaption>
                                </figure>
                                <p className="lead text-body-secondary text-left">Hi, I am {dog.age}.</p>
                                <hr className="my-4" />
                                <h2 className="fw-light text-left">🧡 About</h2>
                                <div className="text-left">
                                    <p><strong>Characteristic</strong></p>
                                    <ul>
                                        { charArr }
                                    </ul>
                                </div>
                                <hr className="my-4" />
                                <div className="text-left">
                                    <h2 className="fw-light">💫 Story</h2>
                                    <p>{dog.introduction}</p>
                                </div>
                                <hr className="my-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}