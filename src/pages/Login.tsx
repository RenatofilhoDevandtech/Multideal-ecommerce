
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, ShieldCheck, ArrowLeft, Zap, Lock, Sparkles, BarChart3, TrendingUp } from "lucide-react";
import logoMultideal from '@/assets/logo-multideal.png';
import loginHeroImg from '@/assets/cards/card-hero.png';
import { siteConfig } from '@/data/site';

const loginSchema = z.object({
  email: z.string().email({ message: "Identidade não encontrada" }),
  password: z.string().min(6, { message: "Senha de acesso inválida" }),
});

const registerSchema = z.object({
  name: z.string().min(2, { message: "Nome de guerra necessário" }),
  email: z.string().email({ message: "E-mail professional obrigatório" }),
  password: z.string().min(6, { message: "Segurança mínima: 6 caracteres" }),
  confirmPassword: z.string().min(6, { message: "Confirme sua chave" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Chaves de acesso não conferem",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const Login: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("login");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const onLoginSubmit = (values: LoginFormValues) => {
    setTimeout(() => {
      login({ name: values.email.split('@')[0], email: values.email });
      toast({ title: "Cockpit Liberado", description: "Iniciando inteligência de mercado Shopee." });
      navigate("/");
    }, 1000);
  };

  const onRegisterSubmit = (values: RegisterFormValues) => {
    setTimeout(() => {
      register({ name: values.name, email: values.email });
      toast({ title: "Contrato Ativado", description: "Seja bem-vindo ao Hub de Elite." });
      navigate("/");
    }, 1000);
  };

  return (
    <main className="flex min-h-screen bg-white selection:bg-ml-blue/20 font-sans antialiased overflow-hidden">
      {/* Left Column: Ultra Minimalist Form */}
      <section className="w-full lg:w-[40%] xl:w-[35%] flex flex-col p-8 md:p-16 relative bg-white lg:border-r border-gray-100 shadow-2xl z-20">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-[12px] font-bold uppercase tracking-[0.2em] group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao Dashboard
          </Link>
        </div>

        <motion.div
          className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 overflow-hidden">
                <img src={logoMultideal} alt="Multideal" className="w-full h-full object-cover p-1 scale-110" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tighter uppercase leading-none italic">
                  Multi<span className="text-ml-blue">ideal</span>
                </h1>
                <span className="text-[10px] font-bold text-ml-blue/60 tracking-[0.3em] uppercase">Elite Affiliate Hub</span>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 tracking-tight leading-tight mb-3">
              {activeTab === "login" ? "Acessar Cockpit." : "Ativar sua Licença."}
            </h2>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              {activeTab === "login" 
                ? "Entre para gerenciar sua renda extra e produtos Shopee de elite."
                : "Cadastre-se para desbloquear kits de empreendedorismo validados."}
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-10">
            <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1 rounded-full border border-gray-100 h-14">
              <TabsTrigger value="login" className="rounded-full font-bold uppercase text-[11px] tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-ml-blue data-[state=active]:shadow-md">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="rounded-full font-bold uppercase text-[11px] tracking-widest transition-all data-[state=active]:bg-white data-[state=active]:text-ml-blue data-[state=active]:shadow-md">
                Cadastro
              </TabsTrigger>
            </TabsList>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.2 }}
                className="pt-6"
              >
                {activeTab === "login" ? (
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-5">
                      <FormField
                        control={loginForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Identidade Scout (E-mail)</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" className="h-13 bg-gray-50/50 border-gray-100 rounded-xl focus:bg-white focus:ring-0 focus:border-ml-blue/30 transition-all font-medium" {...field} />
                            </FormControl>
                            <FormMessage className="text-[11px] font-bold text-red-500 pl-1" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Chave de Segurança (Senha)</FormLabel>
                            <div className="relative">
                              <FormControl>
                                <Input
                                  type={showPassword ? "text" : "password"}
                                  placeholder="••••••••"
                                  className="h-13 bg-gray-50/50 border-gray-100 rounded-xl focus:bg-white focus:ring-0 focus:border-ml-blue/30 transition-all font-medium"
                                  {...field}
                                />
                              </FormControl>
                              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-ml-blue transition-colors">
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                            <FormMessage className="text-[11px] font-bold text-red-500 pl-1" />
                          </FormItem>
                        )}
                      />
                      <div className="flex justify-end pt-1">
                        <Link to="#" className="text-[11px] font-black text-ml-blue/60 hover:text-ml-blue uppercase tracking-tighter">Esqueceu a senha?</Link>
                      </div>
                      <Button type="submit" className="w-full h-14 bg-ml-blue hover:bg-gray-900 text-white rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-ml-blue/20 transition-all active:scale-[0.98] group mt-4">
                        {loginForm.formState.isSubmitting ? "Autenticando..." : "Unlock Cockpit"}
                        <Zap size={16} className="ml-2 group-hover:fill-ml-yellow transition-colors" />
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                      <FormField
                        control={registerForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Nome de Guerra</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome real" className="h-13 bg-gray-50/50 border-gray-100 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">E-mail Profissional</FormLabel>
                            <FormControl>
                              <Input placeholder="seu@email.com" className="h-13 bg-gray-50/50 border-gray-100 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Criar Senha</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="Mínimo 6 dígitos" className="h-13 bg-gray-50/50 border-gray-100 rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full h-14 bg-ml-blue hover:bg-gray-900 text-white rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-ml-blue/20 transition-all mt-4">
                        {registerForm.formState.isSubmitting ? "Processando..." : "Ativar Licença Elite"}
                      </Button>
                    </form>
                  </Form>
                )}
              </motion.div>
            </AnimatePresence>
          </Tabs>

          <div className="flex items-center justify-between text-gray-300 border-t border-gray-50 pt-8 opacity-60">
            <div className="flex items-center gap-2 group cursor-help" title="Criptografia AES-256">
              <Lock size={14} className="group-hover:text-ml-blue transition-colors" />
              <span className="text-[10px] font-black tracking-widest uppercase">Secure Hub</span>
            </div>
            <div className="flex items-center gap-2 group cursor-help" title="Shopee API v2026">
              <Sparkles size={14} className="group-hover:text-ml-yellow transition-colors" />
              <span className="text-[10px] font-black tracking-widest uppercase">API Certified</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Right Column: Premium Visual Content (Glassmorphism + loginHeroImg) */}
      <div className="hidden lg:block lg:w-[60%] xl:w-[65%] relative overflow-hidden group">
        <img 
          src={loginHeroImg} 
          alt="Multideal Vision" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-&lsqb;4000ms&rsqb; ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ml-blue/80 via-ml-blue/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-mesh opacity-10 z-10" />

        {/* Floating Glassmorphism Cards: ROI & Stats */}
        <div className="h-full flex flex-col items-start justify-center p-24 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xl space-y-12"
          >
            <div className="space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white font-black text-[11px] uppercase tracking-widest"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <TrendingUp size={14} className="text-ml-yellow" />
                Shopee Global Intelligence Active
              </motion.div>
              
              <h2 className="text-6xl xl:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase italic">
                Acesse o <br />
                <span className="text-ml-yellow">Próximo Nível.</span>
              </h2>

              <p className="text-white/70 text-lg font-bold max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
                Gerencie seus kits de empreendedorismo, analise achados de tecnologia e maximize sua renda extra com os algoritmos elite da Shopee.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] hover:bg-white/10 transition-colors group/card">
                <BarChart3 size={24} className="text-ml-yellow mb-4 group-hover/card:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white leading-none mb-1">99.2%</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Accuracy Scout</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] hover:bg-white/10 transition-colors group/card">
                <Zap size={24} className="text-ml-green mb-4 group-hover/card:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white leading-none mb-1">Instant</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Profit Activation</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Submark */}
        <div className="absolute bottom-16 right-16 text-white/5 text-[100px] font-black uppercase tracking-tighter select-none pointer-events-none rotate-90 origin-bottom-right">
          MULTIDEAL 2026
        </div>
      </div>
    </main>
  );
};

export default Login;
