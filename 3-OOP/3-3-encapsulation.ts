{
  // 캡슐화

  {
    type CoffeCup = {
      shots: number;
      hasMilk: boolean;
    };

    class CoffeeMaker {
      static BEANS_GRAMM_PER_SHOT: number = 7;
      coffeeBeans: number = 0;

      constructor(beans: number) {
        this.coffeeBeans = beans;
      }

      static makerMachine(coffeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeBeans);
      }

      makeCoffee(shots: number): CoffeCup {
        if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
          throw new Error('Not enough coffe beans');
        }

        this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

        return {
          shots,
          hasMilk: false,
        };
      }
    }

    const maker1 = new CoffeeMaker(20);
    const maker2 = CoffeeMaker.makerMachine(30);
  }
}
