## Scripts

Basta rodar `npm install` e depois `npm test` para rodar os testes.

Também é possível utilizar `npm test -- --coverage` para ver a cobertura do teste.

## Objetivo

Demonstrar conhecimentos em teste unitários usando Jest em Javascript.

<h2>Projeto de informações sobre um zoológico em Javascript.</h2>

A partir de exercícios baseados num arquivo que inclui dados de um zoológico montei várias funções:

:iphone: <b>calculateEntry:</b>
  <p>Calcula o valor total de entrada de um grupo de pessoas no zoológico.</p>

:otter: <b>countAnimals:</b>
  <p>Retorna quantidades dos animais disponíveis para visitação no zoológico, também podendo selecionar um único animal e também verificar quantos animais do sexo masculino ou feminino existem.</p>
 
:bear: <b>getAnimalMap:</b>
  <p>Mapeia todos os animais do zoológico, dividindo eles pela região onde se encontram.</p>
  <p>Possibilita também a filtragem dos animais por sexo e também coloca os nomes de todos em ordem alfabética.</p>

:lion: <b>getAnimalsOlderThan:</b>
  <p>Retorna todos os animais de uma espécie com a idade mínima escolhida</p>
  
:woman: <b>getEmployeeByName:</b>
  <p>Verifica se há algum empregado do zoológico com o nome especificado e retorna seus dados.</p>
  
:red_haired_woman: <b>getEmployeesCoverage:</b>
  <p>Verifica os dados dos empregados do zoológico e retorna por quais animais cada um é responsável e em qual região atuam, podendo também selecionar empregados individualmente por nome ou id.</p>
  
:one: <b>getOldestFromFirstSpecies:</b>
  <p>Retorna o animal mais velho da primeira espécie pela qual o empregado é responsável.</p>
  
:clock230: <b>getOpeningHours:</b> (função pré-montada)
  <p>Função já feita que possibilita uma pesquisa de horário de funcionamento do zoológico.</p>
  <p><b>Neste caso construí os testes unitários que verificam 100% da função.</p></b>
  
:adult: <b>getRelatedEmployees:</b>
  <p>Retorna todos os empregados que são gerenciados pelo empregado de id fornecido na função.</p>

:clock230: <b>getSchedule:</b>
  <p>Mostra o horário completo de funcionamento do zoológico, assim como os animais que estão disponíveis para visitação em cada dia.</p>

:giraffe: <b>getSpeciesByIds:</b>
  <p>Retorna as espécies dos ids fornecidos.</p>

:elephant: <b>handlerElephants:</b> (função pré-montada)
  <p>Função já feita que possibilita uma pesquisa sobre as informações dos elefantes do zoológico, como idade média, nomes, quantidade, onde ficam localizados e os dias da semana nos quais podem receber visitas.</p>
  <p><b>Neste caso construí os testes unitários que verificam 100% da função.</b></p>
