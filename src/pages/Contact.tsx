
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';
import { toast } from 'sonner';

const Contact = () => {
  return (
    <div className="min-h-screen bg-ml-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20 md:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <header className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tighter lowercase"><span className="text-ml-blue uppercase">Parceria</span> & Suporte</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Estamos prontos para ajudar na sua escala. Seja para suporte técnico ou parcerias estratégicas em nossos Labs.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <MessageSquare className="text-ml-blue" />, title: "WhatsApp", desc: "Suporte prioritário", href: siteConfig.social.whatsapp },
              { icon: <Phone className="text-ml-blue" />, title: "Consultoria", desc: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\D/g, '')}` },
              { icon: <Mail className="text-ml-blue" />, title: "E-mail", desc: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: <Clock className="text-ml-blue" />, title: "Operação", desc: "Seg-Sex, 9h às 19h" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center space-y-3 hover:border-ml-blue/10 transition-colors">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-1">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 tracking-tight uppercase text-sm">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-ml-blue transition-colors break-all block">
                    {item.desc}
                  </a>
                ) : (
                  <p className="text-sm text-gray-500">{item.desc}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                try {
                  const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqynree';
                  const response = await fetch(`https://formspree.io/f/${formId}`, {
                    method: "POST",
                    body: formData,
                    headers: {
                      'Accept': 'application/json'
                    }
                  });
                  
                  if (response.ok) {
                    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    form.reset();
                  } else {
                    toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
                  }
                } catch (error) {
                  toast.error('Erro de conexão. Verifique sua internet.');
                }
              }} 
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                  <input name="name" type="text" required className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-ml-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">E-mail</label>
                  <input name="email" type="email" required className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-ml-blue transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Assunto</label>
                <select name="subject" className="w-full h-11 px-4 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-ml-blue transition-colors appearance-none">
                  <option>Dúvidas sobre Pedido</option>
                  <option>Devolução e Reembolso</option>
                  <option>Relatório de Impacto</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mensagem</label>
                <textarea name="message" required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-lg outline-none focus:border-ml-blue transition-colors resize-none" />
              </div>
              <Button type="submit" className="w-full h-12 bg-ml-blue text-white font-black rounded-xl">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
