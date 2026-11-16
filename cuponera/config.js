// Configuración compartida de la Cuponera Nutribén
window.CUP = {
  SUPABASE_URL: 'https://lzljnszgqjxxufpkcolv.supabase.co',
  SUPABASE_KEY: 'sb_publishable_U3BePGKe_qc4uBbHuL4_OA_8jbY0iMJ',
  WHATSAPP: '50432448503',
  WHATSAPP_TXT: '+504 3244-8503',
  ERRORES: {
    CELULAR_INVALIDO: 'Revisa el número de celular (8 dígitos).',
    DEMASIADOS_INTENTOS: 'Demasiados intentos. Espera un momento y vuelve a intentarlo.',
    NOMBRE_REQUERIDO: 'Escribe tu nombre.',
    FECHA_BEBE_INVALIDA: 'Revisa la fecha de nacimiento del bebé.',
    CONSENTIMIENTO_REQUERIDO: 'Para registrarte necesitamos tu autorización de uso de datos.',
    YA_REGISTRADA: 'Este celular ya está registrado. Usa "Ya estoy registrada" para entrar.',
    DATOS_NO_COINCIDEN: 'El celular y la fecha de nacimiento no coinciden con un registro.',
    SESION_INVALIDA: 'Tu sesión venció. Vuelve a entrar.',
    CREDENCIALES_INVALIDAS: 'Código de sucursal o PIN incorrecto.',
    FACTURA_REQUERIDA: 'Escribe el número de factura.',
    CODIGO_NO_EXISTE: 'Ese código no existe. Revísalo con la clienta.',
    CUPON_CANJEADO: 'Este cupón ya fue canjeado.',
    CUPON_VENCIDO: 'Este cupón está vencido.',
    CUPON_ANULADO: 'Este cupón fue anulado.',
    CUPON_OTRO_PAIS: 'Este cupón no es válido en este país.',
    CANJE_DUPLICADO: 'Este cupón se acaba de canjear. Espera 2 minutos si es una compra distinta.',
    MEDICO_FUERA_DE_PANEL: 'Ese médico no está en tu panel.',
    TOPE_MENSUAL_VM: 'Llegaste a tu tope mensual de esta plantilla.',
    TOPE_TOTAL_ALCANZADO: 'Esta plantilla ya llegó a su tope total.',
    PLANTILLA_INACTIVA: 'Esa plantilla no está activa.',
    PLANTILLA_VENCIDA: 'Esa plantilla ya venció.',
    YA_TIENE_ESTE_CUPON: 'Esta madre ya tiene este cupón.',
    DATOS_MADRE_REQUERIDOS: 'Es una madre nueva: completa su nombre y la fecha de nacimiento del bebé.',
    CUPO_INVALIDO: 'El cupo debe ser entre 1 y 500.',
    NO_SE_PUEDE_ANULAR: 'Solo se puede anular un cupón sin canjes.',
    NO_AUTORIZADO: 'No tienes permiso para esta acción.',
    PIN_INVALIDO: 'El PIN debe tener de 4 a 8 números.'
  },
  msg(e) {
    const t = (e && (e.message || e.msg || String(e))) || 'Error';
    for (const k in this.ERRORES) if (t.includes(k)) return this.ERRORES[k];
    if (/Failed to fetch|NetworkError/i.test(t)) return 'Sin conexión. Revisa tu internet.';
    return 'Ocurrió un error: ' + t;
  },
  fecha(d) {
    if (!d) return '';
    const x = new Date(String(d).length <= 10 ? d + 'T12:00:00' : d);
    return x.toLocaleDateString('es-HN', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  fechaHora(d) {
    return d ? new Date(d).toLocaleString('es-HN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
  },
  esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  ls: {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  }
};
