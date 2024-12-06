import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=> {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=> {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Emily Williams</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. Choosing to pursue my post-graduate
                         degree at Edusity has been one of the best decisions I’ve ever made. From the moment I joined, I felt embraced by a supportive 
                         community that fosters collaboration and growth. The cutting-edge facilities have provided me with access to advanced tools and 
                         resources, ensuring a seamless and enriching learning experience. My time here has far exceeded my expectations, equipping me with
                         the knowledge and skills to excel in my career.






</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Pursuing my master’s degree at Edusity has been one of the most rewarding decisions of my academic journey. 
                         From the moment I enrolled, I was welcomed into a supportive and vibrant community that fosters both personal and professional growth.
                         The university's cutting-edge facilities and resources have provided an ideal environment for advanced learning and research. 
                         Additionally, the dedication of the faculty to academic excellence has consistently inspired and challenged me to achieve my best.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Anni Watson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Enrolling at Edusity to pursue my degree has been one of the most transformative decisions of my life. From the start, I was embraced by a supportive community that
                         learning, and personal growth. The state-of-the-art facilities have provided me with access to cutting-edge technology and resources, creating an ideal environment for both academic and 
                         practical learning. The faculty's expertise and dedication have not only deepened my knowledge but also inspired 
                         me to push beyond my limits. The institution's emphasis on holistic development ensures that students are well-prepared for real-world challenges.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jack Brown</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my bachelor’s degree at Edusity has been one of the best decisions I’ve ever made. From day one, I was welcomed into a supportive and inclusive community that 
                            encourages growth and collaboration. The university’s cutting-edge facilities have provided access to advanced tools and resources, creating the perfect environment for learning
                            and exploration. What truly sets Edusity apart is its dedication to academic excellence, with passionate faculty who inspire and challenge students to reach their full potential.
                            My experience here has exceeded all expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials