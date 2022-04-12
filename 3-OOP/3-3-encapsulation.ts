{
  // 캡슐화

  {
    type CoffeCup = {
      shots: number;
      hasMilk: boolean;
    };

    // private
    // protected 상속
    // public

    class CoffeeMaker {
      private static BEANS_GRAMM_PER_SHOT: number = 7;
      private coffeeBeans: number = 0;

      private constructor(beans: number) {
        this.coffeeBeans = beans;
      }

      static makerMachine(coffeBeans: number): CoffeeMaker {
        return new CoffeeMaker(coffeBeans);
      }

      fillCoffeBeans(beans) {
        if (beans < 1) {
          throw new Error('콩은 0개가 될수 없어!');
        }
        this.coffeeBeans += beans;
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

    const maker1 = CoffeeMaker.makerMachine(20);
    maker1.fillCoffeBeans(50);
  }

  // get, set -> 다양한 연산, 유효성 검사
}
