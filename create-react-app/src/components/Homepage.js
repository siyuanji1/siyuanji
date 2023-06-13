import HeaderBackground from './headerFooter/Header-background.js'
import { Link } from "react-router-dom";

function StepCard({data}) {
    return (
        <li className={['intro-section', data.index%2?'beige-background':null].join(' ')}>
            <div className={['intro-container', data.index%2?'reverse-row':null].join(' ')}>
                <div className="intro-text">
                    <h2>
                        <Link to={data.link} className='hover-yellow' aria-label={data.ariaLabel}>
                            {data.brief}
                        </Link>
                    </h2>
                    <p>{data.detail}</p>
                </div>
                <div className="intro-img">
                    <img src={data.imgUrl} alt="Dog" />
                </div>
            </div>
        </li>        
    )
}

export default function HomePage(props) {
    const bgData = {
        class: 'bg-image-home',
        title: 'Welcome to Furever Home!',
        subTitle: 'Discover the perfect pet waiting for a loving home.'
    }

    const stepData = [
        {
            index: 0,
            link: '/search',
            brief: 'Step 1: Search and Filter',
            detail: 'By using the search and filter function, you can find your favorite pets that meet your requirements through different filtering information!',
            imgUrl: '/img/img1.jpg',
            ariaLabel: 'Go to Search Page.'
        },
        {
            index: 1,
            link: '/compare',
            brief: 'Step 2: Compare',
            detail: 'When you feel that you don\'t understand the habits of pets, you can use the "Compare" function to understand the differences in the habits of different pets!',
            imgUrl: '/img/img2.jpg',
            ariaLabel: 'Go to Compare Page.'
        },
        {
            index: 2,
            link: '/favorite',
            brief: 'Step 3: Favorite List',
            detail: 'Browse through the pets you have collected before, make a final selection, and choose the pet you want to adopt the most!',
            imgUrl: '/img/img3.jpg',
            ariaLabel: 'Go to Favorite Page.'
        },
        {
            index: 3,
            link: '/app',
            brief: 'Step 4: Adoption Application',
            detail: 'Start the adoption application quickly! Please be patient, this generally takes 7-10 business days for review. After the review is approved, our staff will send you an email for confirmation.',
            imgUrl: '/img/img4.jpg',
            ariaLabel: 'Go to Application Page.'
        },        
    ]

    const stepElemArray = stepData.map((item) => {
        return (<StepCard data={item} key={item.index}></StepCard>)
    })


    return (
        <div>
            <HeaderBackground
                class={bgData.class}
                title={bgData.title}
                subTitle={bgData.subTitle}
            />
            <ul className='home-step'>
                {stepElemArray}
            </ul>
        </div>
    );
}
