---
title: "Testea el 'qué', no el 'cómo'"
description: "Estructura para definir pruebas centradas en comportamiento."
date: "2024-11-01"
draft: false
---

## Given-When-Then

El movimiento del <a href="https://cucumber.io/docs/bdd/" target="_blank">Behavior Driven Development</a> (BDD) popularizó el uso de la estructura **Given-When-Then**. La idea es especificar el comportamiento deseado en un lenguaje más intuitivo el cual tiende a dirigir el pensamiento de forma más natural hacia el comportamiento (en lugar de hacia los detalles de la implementación). La idea de este enfoque se basa en dividir la escritura de un escenario (o test) en tres secciones:

- **Given**: Describe el estado inicial o las precondiciones antes de ejecutar el comportamiento especificado en la prueba.

- **When**: Representa la acción o evento que desencadena el comportamiento a probar.

- **Then**: Verifica el resultado esperado (assert) o la interacción con algún colaborador (mock verify).

Otro patrón similar es Arrange-Act-Assert. Este enfoque se originó en la comunidad de <a href="http://www.extremeprogramming.org/" target="_blank">eXtreme Programming</a> (XP). Aunque los pasos tienen diferentes nombres, el concepto subyacente es el mismo: estructurar las pruebas de manera que sean claras y comprensibles, facilitando la identificación del contexto, la acción y la verificación del resultado.

Para ilustrar este concepto con un ejemplo en código, analicemos el siguiente caso:

```java
@Test
void haveTheBalanceIncreasedAfterDeposit() {
    var bankAccount = new BankAccount();

    bankAccount.deposit(10);

    assertThat(bankAccount.balance()).isEqualTo(10);
}
```

En este fragmento de código, primero creamos un objeto `BankAccount`, que representa una nueva cuenta bancaria. Este paso establece el contexto inicial de la prueba (**Given**). A continuación, realizamos una acción al depositar 10 en la cuenta (**When**). Nuestro objetivo es observar cómo se modifica el estado de la cuenta después de esta operación. Finalmente, verificamos el resultado de la acción utilizando una aserción que asegura que el saldo de la cuenta sea igual a 10 (**Then**). Este enfoque estructurado permite entender fácilmente la intención detrás de cada paso en la prueba.

## Comportamiento > Implementación

Si bien las pruebas nos proporcionan certeza al alertarnos de inmediato sobre cualquier cambio, este mismo aspecto puede resultar problemático. Incluso el cambio más pequeño, que podría parecer irrelevante para el propósito de la prueba, puede provocar su fallo.

Por ejemplo, si modificamos la implementación interna del método `balance()`, el test debería continuar pasando siempre que la lógica del método sea correcta. Sin embargo, el test no puede discernir si `balance()` simplemente retorna un atributo de `BankAccount` o si está realizando cálculos complejos a partir de una lista de depósitos y extracciones para determinar el saldo final.

Al analizar el objeto que estamos probando, es fundamental preguntarnos cuál es el comportamiento deseado que queremos verificar y cuáles detalles de implementación son irrelevantes y no deberían estar anclados en nuestro test. Esto nos ayuda a mantener nuestros test enfocados y menos susceptibles a cambios que no afectan la funcionalidad principal que estamos validando.

## Referencias
- <a href="https://martinfowler.com/bliki/GivenWhenThen.html" target="_blank">Martin Fowler - Given When Then</a>
- <a href="https://xp123.com/3a-arrange-act-assert/" target="_blank">Bill Wake - 3A – Arrange, Act, Assert</a>
- <a href="https://www.manning.com/books/effective-unit-testing/" target="_blank">Lasse Koskela - Effective Unit Testing</a>