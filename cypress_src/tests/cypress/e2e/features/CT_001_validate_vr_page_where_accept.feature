@epic("AllureAPI")
@story("Cucumber")
@owner("NikyPalleta")
@tagForFeature
Feature: Visualizar a imagem do Google Maps na página da VR - Onde Aceita

    - Eu, como testador, gostaria de validar
    a apresentação do Google Maps na página de
    escolha de endereço.

    - O teste deverá verificar se o mapa / link
    estão sendo apresentados na página.

    @testID("12345")
    @issue("jira","tmsLink")
    @tms("tms","tmsLink")
    @link("example","https://example.com")
    @severity("blocker")
    @tagForTest
    Scenario: Validar a apresentação do mapa e link realizando o fluxo do Onde Aceita
        Given que eu acesso a página da VR - Onde Aceita
        When eu clicar no botão Onde Usar
        Then o mapa e link para o Google Maps deverão ser apresentados
        And a imagem do mapa deverá ser a mesma imagem de base
