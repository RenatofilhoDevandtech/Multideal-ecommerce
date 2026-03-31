
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ShieldCheck, Database, AlertCircle, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BackendDiagnostics: React.FC = () => {
  const { isBackendConnected } = useAuth();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-[100] max-w-[300px]"
    >
      <div className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-md flex flex-col gap-3 ${
        isBackendConnected 
          ? 'bg-ml-green/90 border-ml-green/20 text-white' 
          : 'bg-white/90 border-gray-100 text-gray-800'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isBackendConnected ? <Database size={18} /> : <Zap size={18} className="text-ml-blue" />}
            <span className="font-black text-[12px] uppercase tracking-widest">
              {isBackendConnected ? 'Backend: Supabase Real' : 'Backend: Modo Mock'}
            </span>
          </div>
          {isBackendConnected ? <CheckCircle2 size={16} /> : <AlertCircle size={16} className="text-ml-blue" />}
        </div>
        
        <p className="text-[11px] font-medium leading-relaxed opacity-90">
          {isBackendConnected 
            ? 'Conexão segura estabelecida. Dados reais sendo processados.'
            : 'Rodando offline com dados simulados para evitar custos. Configure o .env para conectar ao Supabase.'}
        </p>

        {!isBackendConnected && (
          <div className="flex items-center gap-2 pt-1">
             <div className="px-2 py-0.5 bg-ml-blue/10 rounded text-[10px] font-black text-ml-blue border border-ml-blue/10">FREE TIER OK</div>
             <div className="px-2 py-0.5 bg-ml-green/10 rounded text-[10px] font-black text-ml-green border border-ml-green/10">SECURITY ACTIVE</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default BackendDiagnostics;
