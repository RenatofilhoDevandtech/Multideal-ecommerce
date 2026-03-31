
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, CreditCard, Landmark, QrCode, Clipboard, ChevronRight, CheckCircle2, Leaf, Zap, Package, MapPin } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { useLocation } from '@/contexts/LocationContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { mercadoPagoService } from '@/services/mercadoPagoService';

type CheckoutStep = 'dados' | 'entrega' | 'pagamento' | 'sucesso';

const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('dados');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  interface PixData {
    qr_code_base64: string;
    copy_paste: string;
  }

  const [pixData, setPixData] = useState<PixData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { address, updateCep, isLoading: isLocLoading } = useLocation();

  // Auto-fill address effect
  useEffect(() => {
    if (address && step === 'entrega') {
      setForm(prev => ({
        ...prev,
        zip: address.cep,
        address: `${address.street}${address.neighborhood ? `, ${address.neighborhood}` : ''}`,
        city: address.city,
        state: address.state
      }));
    }
  }, [address, step]);

  const handleCepSearch = async (val: string) => {
    setForm(prev => ({ ...prev, zip: val }));
    const sanitized = val.replace(/\D/g, '');
    if (sanitized.length === 8) {
      await updateCep(sanitized);
    }
  };

  interface CustomerForm {
    name: string;
    email: string;
    cpf: string;
    zip: string;
    address: string;
    number: string;
    city: string;
    state: string;
  }

  // Form State
  const [form, setForm] = useState<CustomerForm>({
    name: '',
    email: '',
    cpf: '',
    zip: '',
    address: '',
    number: '',
    city: '',
    state: '',
  });

  const handleNextStep = () => {
    if (step === 'dados') setStep('entrega');
    else if (step === 'entrega') setStep('pagamento');
  };

  const handleProcessPayment = async () => {
    setIsLoading(true);
    try {
      if (paymentMethod === 'pix') {
        const data = await mercadoPagoService.generatePixKey(totalPrice);
        setPixData(data);
        setStep('sucesso');
        toast.success("Pix gerado com sucesso!", {
          description: "Aguardando pagamento instantâneo.",
          className: "bg-ml-green text-white",
        });
      }
    } catch (error) {
      toast.error("Erro ao processar pagamento");
    } finally {
      setIsLoading(false);
    }
  };

  const copyPix = () => {
    navigator.clipboard.writeText(pixData.copy_paste);
    toast.info("Código Pix copiado!");
  };

  if (cart.length === 0 && step !== 'sucesso') {
    return (
      <div className="min-h-screen bg-ml-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <Package size={64} className="mx-auto text-gray-200 mb-6" />
          <h2 className="text-2xl font-black text-gray-800">Seu carrinho está vazio</h2>
          <p className="text-gray-500 mt-2">Adicione produtos antes de finalizar a compra.</p>
          <Button onClick={() => window.location.href = '/'} className="mt-8 bg-ml-blue text-white font-bold h-12 px-8">
            Voltar para a loja
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ml-background selection:bg-ml-blue/20">
      <Header />

      <main className="container mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* Main Flow */}
          <div className="flex-1 space-y-6">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8 overflow-x-auto no-scrollbar pb-2">
              {[
                { id: 'dados', label: 'Identificação', icon: <Lock size={14} /> },
                { id: 'entrega', label: 'Entrega', icon: <Package size={14} /> },
                { id: 'pagamento', label: 'Pagamento', icon: <CreditCard size={14} /> }
              ].map((s, i) => (
                <div key={s.id} className="flex items-center gap-2 flex-shrink-0">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black
                    ${step === s.id ? 'bg-ml-blue text-white' : i < ['dados', 'entrega', 'pagamento'].indexOf(step) ? 'bg-ml-green text-white' : 'bg-gray-200 text-gray-500'}
                  `}>
                    {i < ['dados', 'entrega', 'pagamento'].indexOf(step) ? <CheckCircle2 size={16} /> : i + 1}
                  </div>
                  <span className={`text-[13px] font-bold ${step === s.id ? 'text-gray-800' : 'text-gray-400'}`}>{s.label}</span>
                  {i < 2 && <div className="w-8 md:w-16 h-px bg-gray-200 mx-2" />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 'dados' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                    <Lock size={20} className="text-ml-blue" /> Seus Dados
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Nome Completo</label>
                      <Input placeholder="Como está no documento" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">E-mail</label>
                      <Input placeholder="seu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">CPF</label>
                      <Input placeholder="000.000.000-00" value={form.cpf} onChange={e => setForm({ ...form, cpf: e.target.value })} />
                    </div>
                  </div>
                  <Button onClick={handleNextStep} className="w-full mt-8 bg-ml-blue text-white font-black h-12 rounded-xl text-lg shadow-lg">
                    Continuar para Entrega
                  </Button>
                </motion.div>
              )}

              {step === 'entrega' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                    <Package size={20} className="text-ml-blue" /> Endereço de Entrega
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">CEP</label>
                      <Input
                        placeholder="00000-000"
                        value={form.zip}
                        onChange={e => handleCepSearch(e.target.value)}
                        disabled={isLocLoading}
                      />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Endereço</label>
                      <Input placeholder="Rua, Número e Complemento" value={form.address || ''} onChange={e => setForm({ ...form, address: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Cidade</label>
                      <Input placeholder="Sua cidade" value={form.city || ''} onChange={e => setForm({ ...form, city: e.target.value })} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Estado</label>
                      <Input placeholder="UF" value={form.state || ''} onChange={e => setForm({ ...form, state: e.target.value })} />
                    </div>
                    <div className="md:col-span-2">
                      <div className="bg-ml-green/5 p-4 rounded-xl border border-ml-green/10 flex items-center gap-4">
                        <div className="bg-ml-green text-white p-2 rounded-lg">
                          <Zap size={20} />
                        </div>
                        <div>
                          <p className="text-[13px] font-black text-ml-green">Entrega Ultra-Rápida Disponível</p>
                          <p className="text-[11px] text-gray-600">Chega amanhã por Logística Multideal.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleNextStep} className="w-full mt-8 bg-ml-blue text-white font-black h-12 rounded-xl text-lg shadow-lg">
                    Ir para o Pagamento
                  </Button>
                </motion.div>
              )}

              {step === 'pagamento' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
                >
                  <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                    <CreditCard size={20} className="text-ml-blue" /> Escolha como pagar
                  </h2>

                  <div className="space-y-3">
                    <div
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ${paymentMethod === 'pix' ? 'border-ml-blue bg-ml-blue/5' : 'border-gray-100'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-ml-blue/10 p-2 rounded-lg text-ml-blue">
                          <QrCode size={20} />
                        </div>
                        <div>
                          <p className="font-black text-gray-800">Pix Instantâneo</p>
                          <p className="text-[11px] text-ml-green font-bold">Confirmação na hora + Segurança MP</p>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'pix' ? 'border-ml-blue' : 'border-gray-200'}`}>
                        {paymentMethod === 'pix' && <div className="w-2.5 h-2.5 bg-ml-blue rounded-full" />}
                      </div>
                    </div>

                    <div
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-xl border-2 transition-all opacity-50 cursor-not-allowed flex items-center justify-between ${paymentMethod === 'card' ? 'border-ml-blue bg-ml-blue/5' : 'border-gray-100'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                          <CreditCard size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-gray-400">Cartão de Crédito</p>
                          <p className="text-[11px] text-gray-400">Em até 10x sem juros</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleProcessPayment}
                    disabled={isLoading}
                    className="w-full mt-8 bg-ml-blue hover:bg-ml-blue-dark text-white font-black h-14 rounded-xl text-xl shadow-xl shadow-ml-blue/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Pagar R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} <ChevronRight size={20} /></>
                    )}
                  </Button>

                  <div className="mt-6 flex items-center justify-center gap-2 text-ml-green bg-ml-green/5 py-3 rounded-lg border border-ml-green/10">
                    <ShieldCheck size={18} />
                    <span className="text-[12px] font-black uppercase tracking-widest">Compra Garantida Mercado Pago</span>
                  </div>
                </motion.div>
              )}

              {step === 'sucesso' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 text-center"
                >
                  <div className="w-20 h-20 bg-ml-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-ml-green">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-800 tracking-tighter">Quase Lá!</h2>
                  <p className="text-gray-500 mt-2 mb-8">Pague o Pix para confirmar sua reserva eco-sustentável.</p>

                  <div className="bg-ml-background rounded-2xl p-6 mb-8 border border-gray-100">
                    <img src={pixData?.qr_code_base64} alt="QR Code Pix" className="mx-auto mb-4 border-4 border-white shadow-sm rounded-xl" />
                    <div className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between gap-4">
                      <div className="truncate text-[12px] text-gray-500 font-mono text-left">
                        {pixData?.copy_paste}
                      </div>
                      <Button onClick={copyPix} variant="outline" size="sm" className="bg-ml-blue/5 border-ml-blue text-ml-blue font-bold">
                        <Clipboard size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-[11px]">Status</span>
                      <span className="text-ml-yellow font-black animate-pulse flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-ml-yellow rounded-full" />
                        AGUARDANDO PAGAMENTO
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-gray-400 font-bold uppercase tracking-widest text-[11px]">Total a Pagar</span>
                      <span className="text-gray-800 font-black text-xl">R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => { clearCart(); window.location.href = '/meus-pedidos'; }}
                    className="w-full mt-10 bg-ml-green text-white font-black h-12 rounded-xl text-lg hover:bg-ml-green-dark transition-all"
                  >
                    Ver Meus Pedidos
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Summary (Sidebar) */}
          {step !== 'sucesso' && (
            <div className="w-full lg:w-[380px] space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-black text-gray-800 text-lg mb-4">Resumo da Compra</h3>
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 no-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 overflow-hidden">
                        <img src={item.image} className="max-h-full max-w-full object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-800 leading-tight line-clamp-1">{item.name}</p>
                        <p className="text-[11px] text-gray-400">Qtd: {item.quantity}</p>
                        <p className="text-[14px] font-black text-ml-blue">R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-2">
                  <div className="flex justify-between text-gray-500 text-[14px]">
                    <span>Produtos ({cart.length})</span>
                    <span>R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-ml-green text-[14px] font-bold">
                    <span>Frete Multideal</span>
                    <span>Grátis</span>
                  </div>
                  <div className="flex justify-between text-gray-800 text-xl font-black pt-2">
                    <span>Total</span>
                    <span className="text-ml-blue">R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Trust Panel */}
              <div className="bg-ml-green/10 rounded-2xl p-6 border border-ml-green/20 space-y-4">
                <div className="flex items-center gap-3 text-ml-green">
                  <ShieldCheck size={24} />
                  <h4 className="font-black text-[14px] uppercase tracking-widest">Sua Compra é Protegida</h4>
                </div>
                <p className="text-[12px] text-gray-600 leading-relaxed">
                  Utilizamos criptografia de ponta a ponta e a tecnologia do **Mercado Pago** para garantir que seu dinheiro e dados estejam sempre seguros.
                </p>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-white rounded border border-ml-green/20 text-[10px] font-black text-ml-green">SSL SECURE</div>
                  <div className="px-2 py-1 bg-white rounded border border-ml-green/20 text-[10px] font-black text-ml-green">IA AUDITED</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
