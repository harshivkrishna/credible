import React from 'react'
import './Category.css'
const Category = () => {
    return (
        <div className='category-container'>
            <p className='category-title'>WHAT WE THRIST FOR</p>
            <div className='category-text-container'>
                <h3>Three things that makes us feel alive</h3>
            </div>
            <div className='types-container'>
                <div className="type-card">
                    <p>I</p>
                    <img src="/assets/category1.avif" alt="" />
                    <h4>TRAVEL</h4>
                    <p className='type-card-descp'>We have a thirst for adventure and love experiencing new places and people together. Travel gives us distance from our lives and allows us to return to our home and our people full of life and experiences.</p>
                </div>

                <div className="type-card">
                    <p>II</p>
                    <img src="/assets/category2.avif" alt="" />
                    <h4>CONNECTION</h4>
                    <p className='type-card-descp'>Beyond taking pictures of our couples our hearts are wired to connect with others. We are thankful for the soul connection with our friends and couples alike we've built over the last few years.</p>
                </div>

                <div className="type-card">
                    <p>III</p>
                    <img src="/assets/category3.avif" alt="" />
                    <h4>INSPIRATION</h4>
                    <p className='type-card-descp'>We are always on the lookout for something new by staying outdoors, scrolling through the Instagram feed and watching challenging documentaries which fuels our creative lives.</p>
                </div>

            </div>
        </div>
    )
}

export default Category