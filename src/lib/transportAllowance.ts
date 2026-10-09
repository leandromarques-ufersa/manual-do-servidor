// Fórmula da planilha SIMULADOR_AUX-TRANSPORTE.xlsx da PROGEPE (julho/2025).
export function calculateTransportAllowance(salary: number, dailyCost: number, days: number) {
  if (![salary, dailyCost, days].every(Number.isFinite) || salary <= 0 || dailyCost < 0 || !Number.isInteger(days) || days < 0 || days > 31) {
    throw new RangeError('Informe valores válidos e de 0 a 31 dias inteiros.')
  }
  const monthlyCost = dailyCost * days
  const contribution = salary / 30 * days * 0.06
  return { monthlyCost, contribution, allowance: Math.max(0, monthlyCost - contribution) }
}
