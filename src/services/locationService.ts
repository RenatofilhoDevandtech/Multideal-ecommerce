
export interface Address {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service?: string;
}

/**
 * Serviço para persistência e busca de endereços (BrasilAPI).
 */
export const locationService = {
  /**
   * Busca endereço completo pelo CEP usando a BrasilAPI.
   */
  async getAddressByCep(cep: string): Promise<Address | null> {
    const sanitizedCep = cep.replace(/\D/g, '');
    if (sanitizedCep.length !== 8) return null;

    try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${sanitizedCep}`);
      if (!response.ok) throw new Error('CEP não encontrado');
      
      const data = await response.json();
      return {
        cep: data.cep,
        state: data.state,
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        service: data.service
      };
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      // Mock fallback se a API falhar para fins de demonstração
      if (sanitizedCep === '01234567') {
        return {
          cep: '01234567',
          state: 'SP',
          city: 'São Paulo',
          neighborhood: 'Consolação',
          street: 'Rua da Consolação'
        };
      }
      return null;
    }
  },

  /**
   * Tenta obter o CEP a partir de coordenadas usando o OpenStreetMap (Nominatim).
   */
  async getCepByCoords(lat: number, lon: number): Promise<string | null> {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`);
      if (!response.ok) throw new Error('Falha no Reverse Geocoding');
      const data = await response.json();
      
      // Nominatim retorna o CEP no campo postcode do objeto address
      const cep = data.address?.postcode;
      if (cep) return cep.replace(/\D/g, '');
      return null;
    } catch (error) {
      console.error('Erro no Reverse Geocoding:', error);
      return null;
    }
  },

  /**
   * Detecta localização via Browser ou IP.
   */
  async detectLocation(): Promise<{ city: string; state: string; cep?: string } | null> {
    // 1. Tentar via Geolocation API do Browser (Mais preciso)
    const browserLoc = await new Promise<{ lat: number; lon: number } | null>((resolve) => {
      if (!navigator.geolocation) return resolve(null);
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => resolve(null),
        { timeout: 5000 }
      );
    });

    if (browserLoc) {
      const detectedCep = await this.getCepByCoords(browserLoc.lat, browserLoc.lon);
      if (detectedCep) {
        const addr = await this.getAddressByCep(detectedCep);
        if (addr) return { city: addr.city, state: addr.state, cep: addr.cep };
      }
    }

    // 2. Fallback via IP (Menos preciso, mas funciona sem permissão)
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) throw new Error('Falha na geolocalização por IP');
      const data = await response.json();
      return {
        city: data.city,
        state: data.region_code,
        cep: data.postal
      };
    } catch (error) {
      console.error('Erro ao detectar localização:', error);
      return null;
    }
  }
};
