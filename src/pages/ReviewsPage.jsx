import React from 'react';
import ReviewCarousel from '../components/ReviewCarousel';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <ReviewCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;