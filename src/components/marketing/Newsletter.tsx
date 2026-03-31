
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, ShieldCheck, Leaf } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor, insira seu email');
      return;
    }

    const formData = new FormData(e.currentTarget);
    
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
        toast.success('Inscrição confirmada! Você agora recebe alertas de impacto e ofertas eco-exclusivas.');
        setEmail('');
      } else {
        toast.error('Ocorreu um erro ao processar sua inscrição.');
      }
    } catch (error) {
      toast.error('Erro de conexão ao assinar newsletter.');
    }
  };

  return (
    <section className="bg-ml-background py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-premium border border-gray-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ml-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-ml-blue/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <motion.div
            className="max-w-3xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ml-green/10 text-ml-green rounded-full text-[12px] font-black uppercase tracking-widest mb-6">
              <Leaf size={14} />
              Comunidade Multideal 2026
            </div>
            <h3 className="text-gray-800 text-3xl md:text-5xl font-black mb-6 tracking-tighter">
              Receba Alertas de <span className="text-ml-blue">Impacto Positivo</span>
            </h3>
            <p className="text-gray-500 text-[16px] md:text-[18px] mb-10 leading-relaxed">
              Junte-se a mais de **500 mil eco-membros** e receba relatórios semanais sobre a pegada de carbono do seu CEP, além de cupons exclusivos para produtos 100% sustentáveis.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-ml-blue transition-colors" size={20} />
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail consciente"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-ml-blue/20 focus:bg-white transition-all text-[15px]"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-ml-blue hover:bg-ml-blue-dark text-white font-black py-4 px-10 rounded-xl transition-all duration-300 shadow-xl shadow-ml-blue/20"
              >
                Quero Participar
              </motion.button>
            </form>

            <div className="flex items-center justify-center gap-6 mt-8 text-[12px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-ml-green" />
                Privacidade Garantida
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Sem Spam, Apenas Impacto</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
