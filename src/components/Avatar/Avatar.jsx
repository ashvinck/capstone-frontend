import React, { useEffect, useState } from 'react';
import Header from '../Header/header';
import "./Avatar.css";
import GrossRevenueChart from './Charts/Charts';
import Navi from "../../Assets/images/Navibody.jpg"
import { API } from "../../Global";

const AvatarHome = () => {

    const [data, setData] = useState([]);

    // API Get Method
    const getData = () => {
        fetch(`${API}/avatar`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then((res) => setData(res))
    }
    // Using UseEfffect Hook to rerender the fetched data
    useEffect(() => getData(), [])

    return (
        <>
            <Header />
            <div className='Avatar container-fluid'>
                <div className='Avatarcol col-12'>
                    {/* Section 1 */}
                    <div className="r1 row">
                        <div className="AvatarCard-container">
                            {/* Displaying data from MongoDB */}
                            {data?.map((mv) => (
                                <div className="Avatar card" key={mv.id}>
                                    <img className="Avatarimg card-img-top" src={mv?.poster} alt="movie-poster" />
                                    <h3 className='Avatart card-title'>{mv.title}</h3>
                                    <h6 className='Avatardesc'>{mv.description}</h6>
                                    <h6 >{mv.releasedate}</h6>
                                    <h6>{mv.budget}</h6>
                                    {console.log(mv.poster)}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Section 2 */}
                    <div className="r2 row">
                        <div className="Avatarcol3 col-12">
                            <div className='col 3'>
                                <img className="NaviImage" src={Navi} alt="tree" />
                            </div>
                            <div className="Nav-desc col-9 d-none d-sm-none d-md-block d-lg-block">
                                <p>The Na'vi (English: The People) are a race of sapient extraterrestrial humanoids who inhabit the lush jungle moon of Pandora. Humans are known to refer to them as "blues", "savages", "the locals", "hostiles", or "the natives". Parker Selfridge at one point refers to them as "blue monkeys".They are the only known extraterrestrial species discovered to be sapient, like humans. Although the Na'vi are hunter-gatherers with technology equivalent of Earth's Paleolithic epoch, they are highly intelligent and have developed a sophisticated culture based on a profound spiritual connection to other life on their moon, each other, and an encompassing "goddess" they call Eywa.</p>
                                <p>The Na'vi are overall humanoid in their anatomy, though they also possess feline features such as flat, bifurcated noses, large, round eyes, pointed ears that can move independently, and a long, prehensile tail used for gripping and balance. The neck is long and body slender, with a narrow, elongated waist and wide shoulders that create a V-shaped upper back. Despite their thin proportions, their musculature is sharply defined and they have roughly four times the strength of a human in peak physical condition. The Na'vi use their superior strength, agility, and uncanny sense of balance to scale trees, rocks, and other obstacles with ease. In the unlikely case of a fall, they usually escape unharmed, as their bones are reinforced with a type of naturally occurring carbon fiber. Distinctly separating them from humans, native Na'vi possess only four digits on each hand and foot, including an opposable thumb and thumb toe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="r3 row">
                        <div className="Nav-desc col-12 d-block d-sm-block d-md-none d-lg-none">
                            <p>The Na'vi (English: The People) are a race of sapient extraterrestrial humanoids who inhabit the lush jungle moon of Pandora. Humans are known to refer to them as "blues", "savages", "the locals", "hostiles", or "the natives". Parker Selfridge at one point refers to them as "blue monkeys".They are the only known extraterrestrial species discovered to be sapient, like humans. Although the Na'vi are hunter-gatherers with technology equivalent of Earth's Paleolithic epoch, they are highly intelligent and have developed a sophisticated culture based on a profound spiritual connection to other life on their moon, each other, and an encompassing "goddess" they call Eywa.</p>
                            <p>The Na'vi are overall humanoid in their anatomy, though they also possess feline features such as flat, bifurcated noses, large, round eyes, pointed ears that can move independently, and a long, prehensile tail used for gripping and balance. The neck is long and body slender, with a narrow, elongated waist and wide shoulders that create a V-shaped upper back. Despite their thin proportions, their musculature is sharply defined and they have roughly four times the strength of a human in peak physical condition. The Na'vi use their superior strength, agility, and uncanny sense of balance to scale trees, rocks, and other obstacles with ease. In the unlikely case of a fall, they usually escape unharmed, as their bones are reinforced with a type of naturally occurring carbon fiber. Distinctly separating them from humans, native Na'vi possess only four digits on each hand and foot, including an opposable thumb and thumb toe.</p>
                        </div>
                    </div>
                    {/* Section 3 */}
                    <div className="r4 row">
                        <div className="Avatarcol4 col-12">
                            <GrossRevenueChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AvatarHome;