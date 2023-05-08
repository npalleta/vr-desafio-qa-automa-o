# language: pt
# utf-8

Funcionalidade: Validar a api GET_VR_APT

    - Eu, como testador, quero verificar se
    os dados (key, name) presentes na chave typeOfEstablishment
    da api GET_VR_APT estão sendo devidamente apresentados

    - A ideia é verificar o retorno e a
    lista de dados sobre estabelecimentos

    @api
    @URGENCY:critical
    @JIRA++YZZ-100
    @HIPTEST--9901 @epic:api-testing-epic
    Cenário: Realizar a chamada da api GET_VR_APT
        Dado que eu executo a api GET_VR_APT
        Então o status code 200 deverá ser validado
        E a key "typeOfEstablishment" presente na api deverá ser validada
        E a lista de dados sobre estabelecimentos deverá ser apresentada
        E o último item da lista de dados sobre estabelecimentos deverá ser apresentado
