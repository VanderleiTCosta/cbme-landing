import React from 'react';
import Hero from '../components/Hero';
import Produtos from '../components/Produtos';
import Noticias from '../components/Noticias';
import Feature1 from '../components/Feature1';
import Cursos from '../components/Cursos';
import Saude from '../components/Saude';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Produtos/>
      <Noticias/>
      <Feature1 />
      <Cursos/>
      <Saude/>
      <Footer/>
    </>
  );
};

export default Home;