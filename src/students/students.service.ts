import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentsService {
    constructor() {}
    
    studentsRanking(): object {
        const data: object = [
            {
                name: 'Davi da Rosa',
                points: '57',
                id: 'kMyLWXKlNlYTYc'
            },
            {
                name: 'Leandro Costela',
                points: '16',
                id: 'dqYRuGPogQEuYz'
            },
            {
                name: 'Miguel Viana',
                points: '24',
                id: 'yNkQxXeTLeuoXR'
            },
            {
                name: 'Ana Luiza Alves',
                points: '74',
                id: 'HDMYOAAHnASgLL'
            },
            {
                name: 'Bernardo Pereira',
                points: '8',
                id: 'dWjOoRuBwLFYZT'
            },
            {
                name: 'Amanda Ribeiro',
                points: '78',
                id: 'iFXQeVLZUmPYiB'
            },
            {
                name: 'Brenda Almeida',
                points: '46',
                id: 'JUOCPJsBrLSNHK'
            },
            {
                name: 'Fernanda da Luz',
                points: '2',
                id: 'GTmKcDlWbPqdVu'
            },
            {
                name: 'Giovanna Costela',
                points: '10',
                id: 'eLTPudjXUbRZok'
            },
            {
                name: 'Isadora Rocha',
                points: '56',
                id: 'LHmbYhGobavjDe'
            },
            {
                name: 'Sophia Cavalcanti',
                points: '77',
                id: 'WTYcSQunYRObvI'
            },
            {
                name: 'Leandro Silveira',
                points: '70',
                id: 'mZdngoiJLQwOep'
            },
            {
                name: 'Lorenzo Moreira',
                points: '34',
                id: 'OGmEWsCwlLsXeV'
            },
            {
                name: 'Maria Fernanda Rodrigues',
                points: '3',
                id: 'abKgpycnUPatRZ'
            },
            {
                name: 'Ana Laura Duarte',
                points: '85',
                id: 'gUgILUOzkbgVDO'
            },
            {
                name: 'Pietro Ferreira',
                points: '91',
                id: 'sYcSmlyJEfwhFc'
            },
            {
                name: 'Gustavo Correia',
                points: '12',
                id: 'jpVZAAshYNCWAx'
            },
            {
                name: 'Miguel Campos',
                points: '34',
                id: 'LHXttWjJjwEgwS'
            },
            {
                name: 'Joaquim Lopes',
                points: '8',
                id: 'DOlWMePipHVDQC'
            },
            {
                name: 'Kaique Moura',
                points: '33',
                id: 'yfvvXbdJCqbXNr'
            },
            {
                name: 'Joana Pinto',
                points: '6',
                id: 'ePbPhLrBZfaPvP'
            },
            {
                name: 'Sra. Maria Clara Fogaça',
                points: '68',
                id: 'umcTvOPwoYwLlG'
            },
            {
                name: 'Carolina Moreira',
                points: '42',
                id: 'ZTkkYAgCpjQVkA'
            },
            {
                name: 'João Gabriel Silveira',
                points: '34',
                id: 'SpPVUcHQiEyNoZ'
            },
            {
                name: 'Igor Cavalcanti',
                points: '75',
                id: 'WLNzrecCKhwcut'
            },
            {
                name: 'Lucca Silveira',
                points: '7',
                id: 'CSyTvaSRApojnK'
            },
            {
                name: 'Ana Julia Dias',
                points: '0',
                id: 'NBHzKBJrUAAPon'
            },
            {
                name: 'Guilherme Moura',
                points: '46',
                id: 'KmnFPgQyWCGOlf'
            },
            {
                name: 'Miguel Melo',
                points: '7',
                id: 'ytWhIZdnCNMPiR'
            },
            {
                name: 'João Lucas Silveira',
                points: '1',
                id: 'eVUQWYwuxOrvxt'
            },
            {
                name: 'Mariana Melo',
                points: '48',
                id: 'NDOjBcmBOYmPLD'
            },
            {
                name: 'Emanuella Fernandes',
                points: '6',
                id: 'WEOkccwCyHxENO'
            },
            {
                name: 'Alexandre da Costa',
                points: '22',
                id: 'QIxnpZnuIECecd'
            },
            {
                name: 'Kaique Peixoto',
                points: '82',
                id: 'tPnNdZIvwkRPZx'
            },
            {
                name: 'Lorena Pinto',
                points: '56',
                id: 'boyEkLZkyaZzCp'
            },
            {
                name: 'Antônio Ramos',
                points: '26',
                id: 'uXIpcgyhAuEJtH'
            },
            {
                name: 'Srta. Agatha Barros',
                points: '3',
                id: 'GgBzjXoUxbayIz'
            },
            {
                name: 'Luna Nunes',
                points: '5',
                id: 'nHftWbkaktaajf'
            },
            {
                name: 'Daniel Cavalcanti',
                points: '2',
                id: 'FpaaduJupupkiO'
            },
            {
                name: 'Milena Melo',
                points: '85',
                id: 'KUlqUAvoQTOaKI'
            },
            {
                name: 'Marcelo da Rosa',
                points: '94',
                id: 'viXFagrjQbQRfc'
            },
            {
                name: 'Vitor Nascimento',
                points: '36',
                id: 'VepmwDpPlIYjRT'
            },
            {
                name: 'Mariana Lopes',
                points: '87',
                id: 'yxjZgRahuLyRcO'
            },
            {
                name: 'Maria Fernanda Moura',
                points: '16',
                id: 'BytVjbsbIezwCn'
            },
            {
                name: 'Benício Porto',
                points: '29',
                id: 'jgJFJIibWcYAQa'
            },
            {
                name: 'João Azevedo',
                points: '3',
                id: 'qVZKhxGfaFhDsD'
            },
            {
                name: 'Dra. Júlia Duarte',
                points: '81',
                id: 'kmDbdIgyepZKqz'
            },
            {
                name: 'Benjamin da Conceição',
                points: '99',
                id: 'PWlxICKrgkNtIt'
            },
            {
                name: 'Dra. Lívia Costela',
                points: '60',
                id: 'gHUKFKPBUAxXud'
            },
            {
                name: 'Nina da Paz',
                points: '66',
                id: 'WvIuhRxFEtwvxF'
            },
            {
                name: 'Lucas Silva',
                points: '82',
                id: 'kDYqAvYEgWIpmV'
            },
            {
                name: 'Luiz Otávio Araújo',
                points: '38',
                id: 'QvKEgWkvMpnhir'
            },
            {
                name: 'Guilherme Mendes',
                points: '36',
                id: 'guBhkuwaduEvBa'
            },
            {
                name: 'Lavínia Melo',
                points: '93',
                id: 'zdlxxwnWadIshh'
            },
            {
                name: 'Beatriz Moraes',
                points: '81',
                id: 'SatkbPVjdpFvzi'
            },
            {
                name: 'Luiz Miguel Campos',
                points: '41',
                id: 'HrREafnBICslcb'
            },
            {
                name: 'Gustavo Henrique Almeida',
                points: '86',
                id: 'dDtvfQGYzyqJgb'
            },
            {
                name: 'Nicolas Pereira',
                points: '47',
                id: 'ftlFykXvBGxvbW'
            },
            {
                name: 'Calebe Porto',
                points: '24',
                id: 'vcrMznvSBXPaXm'
            },
            {
                name: 'Daniel Viana',
                points: '66',
                id: 'eQNLHLfeCDWuvY'
            },
            {
                name: 'João das Neves',
                points: '73',
                id: 'mltpOkLvbiVNby'
            },
            {
                name: 'Eduardo Cavalcanti',
                points: '5',
                id: 'tGWRUWszWVIILx'
            },
            {
                name: 'Pedro Lucas Carvalho',
                points: '27',
                id: 'iscxHqQzeaXFkx'
            },
            {
                name: 'Rebeca Ribeiro',
                points: '98',
                id: 'qrcpTDMDFKmZAR'
            },
            {
                name: 'João Guilherme Monteiro',
                points: '97',
                id: 'KucPNdZlkllRuw'
            },
            {
                name: 'Sofia Mendes',
                points: '46',
                id: 'LxWgoalHCBRZAC'
            },
            {
                name: 'Alícia Rezende',
                points: '4',
                id: 'kbFIovQGPJKGaG'
            },
            {
                name: 'Bruno Peixoto',
                points: '60',
                id: 'eXNjZUcwdyMqIM'
            },
            {
                name: 'Esther Ferreira',
                points: '30',
                id: 'nhjFYsXgbwVkkM'
            },
            {
                name: 'Sophie da Luz',
                points: '91',
                id: 'GEZpzFSsIewpxE'
            },
            {
                name: 'Ana Júlia Freitas',
                points: '69',
                id: 'tNBBPvWcTRJYLg'
            },
            {
                name: 'Alana Moreira',
                points: '26',
                id: 'yREdlmSHtCLxzf'
            },
            {
                name: 'Ana Vitória Nunes',
                points: '64',
                id: 'sWSyjNbHIxQSJF'
            },
            {
                name: 'Luana Costa',
                points: '97',
                id: 'PiEwpghaBZkTQT'
            },
            {
                name: 'Ana Carolina da Rocha',
                points: '43',
                id: 'uimKmUtJvoiQUu'
            },
            {
                name: 'Lorena Oliveira',
                points: '3',
                id: 'uoXJYxyMjpKnLm'
            },
            {
                name: 'Davi Lucca Alves',
                points: '27',
                id: 'ASjcrrjAJMbHJR'
            },
            {
                name: 'Evelyn Barbosa',
                points: '8',
                id: 'ccAMxAJHwKHSvo'
            },
            {
                name: 'Ana Laura da Mata',
                points: '53',
                id: 'wXPYJBEoVrRymg'
            },
            {
                name: 'Ana Lívia Alves',
                points: '84',
                id: 'xToIdodOGuORbd'
            },
            {
                name: 'Davi Viana',
                points: '89',
                id: 'mbJBMpGxHGJDBW'
            },
            {
                name: 'Juliana Silveira',
                points: '16',
                id: 'xGIdQxTbtHzomT'
            },
            {
                name: 'Kamilly Fogaça',
                points: '24',
                id: 'PABSeMfurWUlUy'
            },
            {
                name: 'Maria Alice Rocha',
                points: '97',
                id: 'yzqfsuMGFVlLfu'
            },
            {
                name: 'Gustavo Henrique da Conceição',
                points: '11',
                id: 'mjtnQbuqiifQie'
            },
            {
                name: 'Francisco Peixoto',
                points: '17',
                id: 'mkmnRWygvuylkD'
            },
            {
                name: 'João Felipe Cunha',
                points: '45',
                id: 'jAnWsQocvDgDRX'
            },
            {
                name: 'Vicente da Rosa',
                points: '18',
                id: 'gfDewnZOhdzXDj'
            },
            {
                name: 'Clarice Castro',
                points: '20',
                id: 'sxoYewPjLQwuYd'
            },
            {
                name: 'Nathan Moura',
                points: '42',
                id: 'pSuqJHtGNkHVzn'
            },
            {
                name: 'Isabelly Almeida',
                points: '74',
                id: 'vZlPgsxMalwLzi'
            },
            {
                name: 'Luiz Fernando Gonçalves',
                points: '72',
                id: 'pzBlqTheCkdUhm'
            },
            {
                name: 'Daniela Farias',
                points: '85',
                id: 'rcBpZBGoYunTZp'
            },
            {
                name: 'Luiza Moura',
                points: '18',
                id: 'bmLkOGhwLzqgut'
            },
            {
                name: 'Bárbara Correia',
                points: '89',
                id: 'STpxfyRAKFxxbz'
            },
            {
                name: 'Ana Júlia das Neves',
                points: '14',
                id: 'zHzWTSjnFxqRJH'
            },
            {
                name: 'Sofia Melo',
                points: '39',
                id: 'DMrZZGFmCbXPcq'
            },
            {
                name: 'Igor Novaes',
                points: '84',
                id: 'YAduEPeBLEcsWs'
            },
            {
                name: 'Maitê Araújo',
                points: '78',
                id: 'rzSLWvOWkRLdjS'
            },
            {
                name: 'Raquel Moura',
                points: '18',
                id: 'ZDdnUqwjIrsJTL'
            }
        ];

        return data
    }
}