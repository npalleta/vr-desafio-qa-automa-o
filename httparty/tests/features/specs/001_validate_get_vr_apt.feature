# language: pt
# utf-8

Funcionalidade: Validar a api GET_VR_APT

@api @URGENCY:critical @JIRA++YZZ-100 @HIPTEST--9901 @epic:api-testing-epic
Cenário: Realizar a chamada da api GET_VR_APT
    Dado que eu executo a api GET_VR_APT
    Então o status code 200 deverá  ser validado
    E a key do json "typeOfEstablishment" deverá ser validada
    E a lista de dados sobre estabelecimentos deverá ser apresentada
    E o último item da lista de dados sobre estabelecimentos deverá ser apresentada