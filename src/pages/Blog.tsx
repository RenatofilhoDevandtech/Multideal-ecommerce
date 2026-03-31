
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: "Como reduzir seu lixo doméstico em 50%", date: "12 Mar, 2024", category: "Dicas" },
    { id: 2, title: "O guia completo dos tecidos sustentáveis", date: "10 Mar, 2024", category: "Moda" },
    { id: 3, title: "Por que escolher energia solar em 2024?", date: "05 Mar, 2024", category: "Tech" }
  ];

  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tighter">Blog de <span className="text-ml-green">Impacto</span></h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notícias, dicas e histórias sobre sustentabilidade e o futuro do nosso planeta.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-gray-300 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-[12px] font-black uppercase tracking-widest text-ml-blue">{post.category}</span>
                  <p className="text-[12px] text-gray-400">{post.date}</p>
                  <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    {post.title}
                  </h2>
                  <Link to="#" className="inline-flex items-center gap-2 text-ml-blue font-bold text-sm hover:underline">
                    Ler mais <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
