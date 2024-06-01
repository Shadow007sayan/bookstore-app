import React from 'react'
import BannerImg from '../../public/BannerImg.jpg'

function Banner() {
  return (
    <>
      <div className="max-w-screen 2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 mt-12 order-2 md:order-1 md:mt-16">
          <h1 className="text-4xl font-bold"> Welcome to My Book Store App .<span className='text-pink-500'>HAPPY READING !!!!</span> </h1>
          <br></br>
          <p >Welcome to Book Store! <br></br>

            Discover a world of stories with our carefully curated selection of books, from classics to bestsellers. Whether you're a seasoned reader or new to the joys of reading, we have something for everyone. Our knowledgeable staff is here to offer personalized recommendations.
            <br></br><br></br>

            Join our community for author events, book clubs, and exclusive promotions. Stay updated with our latest arrivals by signing up for our newsletter.

            <br></br>
            Thank you for choosing Book Store. Happy reading!</p>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src={BannerImg}/>
          </div>
      </div>
    </>
  )
}

export default Banner