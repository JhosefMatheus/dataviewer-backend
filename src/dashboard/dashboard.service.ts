import { Injectable } from "@nestjs/common";
import { PerformanceClassDifficultyList, PerformanceClassList, PerformanceClassSubjectList, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { IPerformanceChartData } from "./interface";
@Injectable()
export class DashboardService {
  constructor(private readonly prismaService: PrismaService) { }

  private sumArray(array: any): number {
    let sum: number = 0;

    array.forEach(e => sum += e);

    return sum;
  }

  private getDifficultyData(difficultyResult: PerformanceClassDifficultyList[], level: number): Prisma.JsonValue[] {
    return difficultyResult.map(e => {
      const difficultyArray: Prisma.JsonArray = e.difficulty as Prisma.JsonArray;

      const veryEasyObject = difficultyArray.filter(d => {
        const difficultyObject: Prisma.JsonObject = d as Prisma.JsonObject;

        return difficultyObject.level === level;
      });

      return veryEasyObject[0];
    });
  }

  private getSubjectData(subjectResult: PerformanceClassSubjectList[]): IPerformanceChartData[] {
    const data: IPerformanceChartData[] = [];

    subjectResult.forEach(e => {
      e.tags.forEach(t => {
        const tagObject: Prisma.JsonObject = t as Prisma.JsonObject;

        if (tagObject.subject !== "None") {
          const tagVerifier = data.filter(d => d.name === tagObject.subject);
  
          if (tagVerifier.length !== 0) {
            data[data.indexOf(tagVerifier[0])].acertos = this.sumArray([tagObject.qt_acertos, tagVerifier[0].acertos]);
            data[data.indexOf(tagVerifier[0])].erros = this.sumArray([tagObject.qt_erros, tagVerifier[0].erros]);
            data[data.indexOf(tagVerifier[0])].restantes += this.sumArray([tagObject.qt_parcial, tagObject.qt_erros]);

          } else {
            data.push({
              name: tagObject.subject,
              acertos: this.sumArray([tagObject.qt_acertos]),
              erros: this.sumArray([tagObject.qt_erros]),
              restantes: this.sumArray([tagObject.qt_parcial, tagObject.qt_erros]) 
            });
          }
        }
      });
    });

    return data;
  }

  private getListData(listResult: PerformanceClassList[]): IPerformanceChartData[] {
    const data: IPerformanceChartData[] = [];

    listResult.forEach(e => {
      e.lists.forEach(l => {
        const listObject: Prisma.JsonObject = l as Prisma.JsonObject;

        const listVerifier = data.filter(d => d.fullName === listObject.fullName);

        if (listVerifier.length !== 0) {
          data[data.indexOf(listVerifier[0])].acertos = this.sumArray([listObject.qt_acertos, listVerifier[0].acertos]);
          data[data.indexOf(listVerifier[0])].erros = this.sumArray([listObject.qt_erros, listVerifier[0].erros]);
          data[data.indexOf(listVerifier[0])].restantes += this.sumArray([listObject.qt_parcial, listObject.qt_erros]);
        } else {
          data.push({
            fullName: listObject.description,
            name: listObject.description,
            acertos: this.sumArray([listObject.qt_acertos]),
            erros: this.sumArray([listObject.qt_erros]),
            restantes: this.sumArray([listObject.qt_parcial, listObject.qt_nao_fez])
          });
        }
      });
    });

    return data;
  }

  async performanceChartData(subject: string): Promise<IPerformanceChartData[]> {
    let data: IPerformanceChartData[];

    switch (subject) {
      case "dificuldade":
        const difficultyResult: PerformanceClassDifficultyList[] = await this.prismaService.performanceClassDifficultyList.findMany();

        const veryEasy: Prisma.JsonValue[] = this.getDifficultyData(difficultyResult, 1);
        const easy: Prisma.JsonValue[] = this.getDifficultyData(difficultyResult, 2);
        const normal: Prisma.JsonValue[] = this.getDifficultyData(difficultyResult, 3);
        const hard: Prisma.JsonValue[] = this.getDifficultyData(difficultyResult, 4);
        const veryHard: Prisma.JsonValue[] = this.getDifficultyData(difficultyResult, 5);
        
        data = [
          {
            name: "Muito Fácil",
            acertos: this.sumArray(veryEasy.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_acertos;
            })),
            erros: this.sumArray(veryEasy.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_erros;
            })),
            restantes: this.sumArray(veryEasy.map(e => {
              const data = e as Prisma.JsonObject;
              
              return data.qt_nao_fez
            }).concat(
              veryEasy.map(e => {
                const data = e as Prisma.JsonObject;

                return data.qt_parcial
              })
            ))
          },
          {
            name: "Fácil",
            acertos: this.sumArray(easy.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_acertos;
            })),
            erros: this.sumArray(easy.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_erros;
            })),
            restantes: this.sumArray(easy.map(e => {
              const data = e as Prisma.JsonObject;
              
              return data.qt_nao_fez
            }).concat(
              easy.map(e => {
                const data = e as Prisma.JsonObject;

                return data.qt_parcial
              })
            ))
          },
          {
            name: "Médio",
            acertos: this.sumArray(normal.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_acertos;
            })),
            erros: this.sumArray(normal.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_erros;
            })),
            restantes: this.sumArray(normal.map(e => {
              const data = e as Prisma.JsonObject;
              
              return data.qt_nao_fez
            }).concat(
              normal.map(e => {
                const data = e as Prisma.JsonObject;

                return data.qt_parcial
              })
            ))
          },
          {
            name: "Difícil",
            acertos: this.sumArray(hard.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_acertos;
            })),
            erros: this.sumArray(hard.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_erros;
            })),
            restantes: this.sumArray(hard.map(e => {
              const data = e as Prisma.JsonObject;
              
              return data.qt_nao_fez
            }).concat(
              hard.map(e => {
                const data = e as Prisma.JsonObject;

                return data.qt_parcial
              })
            ))
          },
          {
            name: "Muito Difícil",
            acertos: this.sumArray(veryHard.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_acertos;
            })),
            erros: this.sumArray(veryHard.map(e => {
              const data = e as Prisma.JsonObject;

              return data.qt_erros;
            })),
            restantes: this.sumArray(veryHard.map(e => {
              const data = e as Prisma.JsonObject;
              
              return data.qt_nao_fez
            }).concat(
              veryHard.map(e => {
                const data = e as Prisma.JsonObject;

                return data.qt_parcial
              })
            ))
          }
        ]

        break;

      case "assunto":
        const subjectResult: PerformanceClassSubjectList[] = await this.prismaService.performanceClassSubjectList.findMany();

        data = this.getSubjectData(subjectResult);

        break;

      case "lista":
        const listResult: PerformanceClassList[] = await this.prismaService.performanceClassList.findMany()

        data = this.getListData(listResult);

        break;
    }

    return data;
  }

  trackingChartData(): object {
    let data: object = [
      {
        name: 'Aritméticos',
        real: '140',
        predicao: '120'
      },
      {
        name: 'Se',
        real: '163',
        predicao: '160'
      },
      {
        name: 'Enquanto',
        real: '83',
        predicao: '170'
      },
      {
        name: 'For',
        real: '60',
        predicao: '100'
      }
    ];

    return data;
  }

  timeManagementData(): object {
    let data: object = {
      data0: [
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        }
      ],
      data1: [
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        }
      ],
      data2: [
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        },
        {
          x: Math.floor(Math.random() * 7),
          y: Math.floor(Math.random() * 600),
          z: Math.floor(Math.random() * 300)
        }
      ]
    }

    return data;
  }

  assiduousStudentsData(): number {
    return 135;
  }

  missingStudentsData(): number {
    return 78;
  }

  submissionsNumberData(): number {
    return 432;
  }

  accessesAmountData(): number {
    return 610;
  }
}