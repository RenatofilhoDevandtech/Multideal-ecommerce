
/**
 * Serviço Mock para simular a integração com Mercado Pago Checkout Transparente.
 */
export const mercadoPagoService = {
  /**
   * Cria uma preferência de pagamento e retorna o link de checkout ou ID da transação
   */
  async createPaymentPreference(items: { id: number; name: string; price: number; quantity: number }[], total: number) {
    console.log('[MercadoPagoAPI] Criando preferência para:', items);

    // Simulando delay de segurança
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      init_point: "https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=mock_12345",
      preference_id: "mock_12345",
      external_reference: `ECO-${Date.now()}`
    };
  },

  /**
   * Simula a geração de uma chave Pix (Heurística de Feedback Instantâneo)
   */
  async generatePixKey(amount: number) {
    console.log('[MercadoPagoAPI] Gerando Pix para:', amount);

    return {
      qr_code: "mock_qr_code_base64",
      qr_code_base64: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=MultidealMockPix",
      copy_paste: "00020126330014br.gov.bcb.pix0111mock-key-eco-shop-2026",
      expires_at: new Date(Date.now() + 30 * 60000).toISOString() // 30 mins
    };
  }
};
