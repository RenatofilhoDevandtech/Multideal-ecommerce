
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf, ShieldCheck, CreditCard, Linkedin, Github } from 'lucide-react';
import { siteConfig } from '@/data/site';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  ].filter(link => link.href && link.href !== '#');

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt={`${siteConfig.name} Logo`}
                className="h-16 w-auto object-contain"
              />
              <span className="text-2xl font-black text-gray-800 tracking-tighter">
                {siteConfig.name} <span className="text-ml-blue">2026</span>
              </span>
            </Link>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm">
              Sua plataforma de engenharia de produto e viabilidade de negócios. Curadoria técnica, análise de ROI e transparência total. Sua inteligência transforma o faturamento.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-ml-blue hover:text-white transition-all cursor-pointer"
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ml-blue/5 text-ml-blue rounded-lg text-[13px] font-bold border border-ml-blue/10">
                <ShieldCheck size={16} />
                Curadoria Prospera Verificada
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="space-y-6">
            <h4 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">Plataforma</h4>
            <ul className="space-y-3">
              {[
                { label: 'Sobre a Engenharia', to: '/sobre' },
                { label: 'MultiDeal Labs', to: '/labs' },
                { label: 'Blog de Negócios', to: '/blog' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-500 hover:text-ml-blue text-[14px] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">Business</h4>
            <ul className="space-y-3">
              {[
                { label: 'Kits Validados', to: '/kits' },
                { label: 'Radar de Nichos', to: '/categorias' },
                { label: 'Calculadora ROI', to: '/ferramentas' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-500 hover:text-ml-blue text-[14px] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">Suporte</h4>
            <ul className="space-y-3">
              {[
                { label: 'Ajuda', to: '/ajuda' },
                { label: 'Central de Atendimento', to: '/contato' },
                { label: 'Rastrear Pedido', to: '/pedidos' },
                { label: 'Devolução Sustentável', to: '/devolucoes' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-500 hover:text-ml-blue text-[14px] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[14px] font-bold text-gray-800 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Termos de Uso', to: '/termos' },
                { label: 'Privacidade', to: '/privacidade' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-gray-500 hover:text-ml-blue text-[14px] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-[13px]">
              &copy; {new Date().getFullYear()} {siteConfig.name} 2026. Todos os direitos reservados.
            </p>
            <div className="hidden md:block w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5 text-gray-400 text-[13px]">
              <ShieldCheck size={16} className="text-ml-green" />
              Pagamento 100% Seguro
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="px-2 py-1 border border-gray-200 rounded md:w-12 h-8 flex items-center justify-center font-bold text-[10px] text-gray-400">VISA</div>
            <div className="px-2 py-1 border border-gray-200 rounded md:w-12 h-8 flex items-center justify-center font-bold text-[10px] text-gray-400">MASTER</div>
            <div className="px-2 py-1 border border-gray-200 rounded md:w-12 h-8 flex items-center justify-center font-bold text-[10px] text-gray-400">AMEX</div>
            <div className="px-2 py-1 border border-gray-200 rounded md:w-12 h-8 flex items-center justify-center font-bold text-[10px] text-ml-blue">PIX</div>
            <div className="px-2 py-1 border border-gray-200 rounded md:w-12 h-8 flex items-center justify-center font-bold text-[10px] text-gray-400">BOLETO</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
