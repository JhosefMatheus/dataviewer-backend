import { Injectable } from "@nestjs/common";

@Injectable()
export class DashboardService {
    constructor() {}

    performanceChartData(subject: string): object {
        let data: object;

        switch (subject) {
            case "dificuldade":
                data = [
                    {
                        name: 'Muito Fácil',
                        acertos: '263',
                        erros: '260',
                        restantes: '190'
                      },
                      {
                        name: 'Fácil',
                        acertos: '140',
                        erros: '120',
                        restantes: '110'
                      },
                  
                      {
                        name: 'Médio',
                        acertos: '83',
                        erros: '170',
                        restantes: '100'
                      },
                      {
                        name: 'Difícil',
                        acertos: '60',
                        erros: '100',
                        restantes: '140'
                      },
                      {
                        name: 'Muito Difícil',
                        acertos: '60',
                        erros: '400',
                        restantes: '240'
                      }
                ]

                return data;

            case "assunto":
                data = [
                    {
                      name: 'Aritméticos',
                      acertos: '140',
                      erros: '120',
                      restantes: '110'
                    },
                    {
                      name: 'Se',
                      acertos: '163',
                      erros: '160',
                      restantes: '90'
                    },
                    {
                      name: 'Enquanto',
                      acertos: '83',
                      erros: '170',
                      restantes: '100'
                    },
                    {
                      name: 'For',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    }
                ]

                return data;

            case "lista":
                data = [
                    {
                      fullName: 'Operadores Aritméticos - Resolvida',
                      name: 'op r',
                      acertos: '263',
                      erros: '260',
                      restantes: '190'
                    },
                    {
                      fullName: 'Operadores Aritméticos - Prática',
                      name: 'op p',
                      acertos: '60',
                      erros: '400',
                      restantes: '240'
                    },
                    {
                      fullName: 'Operadores Aritméticos - Exercício',
                      name: 'op e',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    },
                    {
                      fullName: 'Condicionais - Resolvida',
                      name: 'cond r',
                      acertos: '140',
                      erros: '120',
                      restantes: '110'
                    },
                    {
                      fullName: 'Condicionais - Prática',
                      name: 'cond p',
                      acertos: '83',
                      erros: '170',
                      restantes: '100'
                    },
                    {
                      fullName: 'Condicionais - Exercício',
                      name: 'cond e',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    },
                    {
                      fullName: 'Enquanto - Resolvida',
                      name: 'enq r',
                      acertos: '60',
                      erros: '400',
                      restantes: '240'
                    },
                    {
                      fullName: 'Enquanto - Prática',
                      name: 'enq p',
                      acertos: '60',
                      erros: '400',
                      restantes: '240'
                    },
                    {
                      fullName: 'Enquanto - Exercício',
                      name: 'enq e',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    },
                    {
                      fullName: 'Para - Resolvida',
                      name: 'para r',
                      acertos: '140',
                      erros: '120',
                      restantes: '110'
                    },
                    {
                      fullName: 'Para - Prática',
                      name: 'para p',
                      acertos: '83',
                      erros: '170',
                      restantes: '100'
                    },
                    {
                      fullName: 'Para - Exercício',
                      name: 'para e',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    },
                    {
                      fullName: 'Vetores - Resolvida',
                      name: 'vet r',
                      acertos: '60',
                      erros: '400',
                      restantes: '240'
                    },
                    {
                      fullName: 'Vetores - Prática',
                      name: 'vet p',
                      acertos: '83',
                      erros: '170',
                      restantes: '100'
                    },
                    {
                      fullName: 'Vetores - Exercício',
                      name: 'vet e',
                      acertos: '60',
                      erros: '100',
                      restantes: '140'
                    }
                ]
                
                return data;
        }
    }

    assiduousStudentsData(): number {
      return 135;
    }

    missingStudentsData(): number {
      return 78;
    }
}