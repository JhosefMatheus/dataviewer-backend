import { Injectable } from "@nestjs/common";

@Injectable()
export class ClassesService {
    constructor() {}

    getClasses(): object {
        const data: object = [
            {
                "semester": "1",
                "id_class": "59dfe476-1325-433f-b676-c8df9a2c2072",
                "description": "ECT2203 LÃ³gica de ProgramaÃ§Ã£o - Turma 04",
                "year": "2020",
                "name": "LoP 04 - 2020.1"
            },
            {
                "year": "2021",
                "description": "LoP Turma 04 2020.2",
                "id_class": "6d04019e-905c-4d70-810a-a7f1fa34fe22",
                "name": "LoP Turma 04 2020.2",
                "semester": "1"
            },
            {
                "year": "2021",
                "description": "Ensino Remoto",
                "name": "LoP 03",
                "id_class": "77335557-c5d1-4144-be6e-84b6114ec22e",
                "semester": "1"
            },
            {
                "id_class": "8394d1cb-86b5-4b90-bc62-4b9b192a81f6",
                "year": "2020",
                "name": "LoP - Turma 03",
                "description": "ECT2203 - LÃ³gica de ProgramaÃ§Ã£o (LoP), Turma 03 de 2020.2",
                "semester": "2"
            },
            {
                "description": "ECT2203 - LÃ³gica de ProgramaÃ§Ã£o (LoP), Turma 02 de 2021.1",
                "name": "LoP - Turma 02 - 2021.1",
                "semester": "1",
                "id_class": "8f055c33-00ad-4284-aec8-da401901e795",
                "year": "2021"
            },
            {
                "id_class": "ca9ea92d-a0a9-4a62-8a05-24793f0a823f",
                "semester": "1",
                "year": "2020",
                "description": "Para aulas de laboratÃ³rio de LOP",
                "name": "LoP 03 - 2020.1"
            },
            {
                "id_class": "d99923f0-d174-4902-9759-c8220b821d36",
                "year": "2020",
                "semester": "2",
                "description": "Turma 05 do semestre 2020.2 - Ensino Remoto",
                "name": "LoP Turma 05 - 2020.2"
            },
            {
                "id_class": "e9c7c378-eac4-44b2-b687-4dca6d77cd54",
                "semester": "2",
                "year": "2021",
                "name": "LoP - Turma 5",
                "description": "Turma 5 de LÃ³gica de ProgramaÃ§Ã£o (Ensino Remoto)"
            },
            {
                "description": "ECT2203 LÃ³gica de ProgramaÃ§Ã£o - Turma 05 - 2020.6",
                "id_class": "f2dd7bef-5b5d-4cb3-9efa-aa8652af0605",
                "year": "2020",
                "name": "LoP 05",
                "semester": "1"
            },
            {
                "year": "2021",
                "id_class": "f7144f91-f493-4e55-aac5-39f0d4add995",
                "name": "LoP - Turma 01 - 2021.2",
                "description": "ECT2203 - LÃ³gica de ProgramaÃ§Ã£o (LoP) - Turma 01",
                "semester": "2"
            }
        ];

        return data
    }
}