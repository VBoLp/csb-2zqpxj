/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Producer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Producer/costumes/Kostüm1.svg", {
        x: 208.74922054245067,
        y: 156.60823529190907
      }),
      new Costume("Kostüm2", "./Producer/costumes/Kostüm2.svg", {
        x: 208.74922054245067,
        y: 156.60822654190906
      }),
      new Costume("Kostüm3", "./Producer/costumes/Kostüm3.svg", {
        x: 208.74922054245067,
        y: 156.6082277919091
      }),
      new Costume("Kostüm4", "./Producer/costumes/Kostüm4.svg", {
        x: 208.74922054245067,
        y: 156.6082290419091
      }),
      new Costume("Kostüm5", "./Producer/costumes/Kostüm5.svg", {
        x: 208.74922054245067,
        y: 156.60823029190914
      }),
      new Costume("Kostüm6", "./Producer/costumes/Kostüm6.svg", {
        x: 208.74922054245067,
        y: 156.60823154190916
      }),
      new Costume("Kostüm7", "./Producer/costumes/Kostüm7.svg", {
        x: 208.74922054245067,
        y: 156.6082327919092
      }),
      new Costume("Kostüm8", "./Producer/costumes/Kostüm8.svg", {
        x: 208.74922054245067,
        y: 156.6082340419092
      }),
      new Costume("Kostüm9", "./Producer/costumes/Kostüm9.svg", {
        x: 208.74922054245067,
        y: 156.60823529190924
      }),
      new Costume("Kostüm10", "./Producer/costumes/Kostüm10.svg", {
        x: 208.74922054245067,
        y: 156.60822654190923
      }),
      new Costume("Kostüm11", "./Producer/costumes/Kostüm11.svg", {
        x: 208.74922054245067,
        y: 156.60822779190926
      }),
      new Costume("Kostüm12", "./Producer/costumes/Kostüm12.svg", {
        x: 208.74922054245067,
        y: 156.60822904190928
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Producer/sounds/Plopp.wav"),
      new Sound("Intro", "./Producer/sounds/Intro.wav"),
      new Sound("Klick", "./Producer/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart3
      )
    ];
  }

  *whenIReceiveSpielStart() {
    yield* this.wait(0.5);
    this.visible = true;
    this.moveAhead();
    this.effects.ghost = 100;
    yield* this.wait(0.1);
    this.effects.ghost = 75;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 25;
    yield* this.wait(0.1);
    this.effects.ghost = 0;
    yield* this.wait(2);
    this.effects.ghost = 25;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 75;
    yield* this.wait(0.1);
    this.effects.ghost = 100;
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSpielStart2() {
    yield* this.wait(0.8);
    yield* this.playSoundUntilDone("Intro");
    yield* this.playSoundUntilDone("Klick");
  }

  *whenIReceiveSpielStart3() {
    this.costume = "Kostüm1";
    yield* this.wait(0.8);
    this.costume = "Kostüm1";
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
    yield* this.wait(0.05);
    this.costumeNumber++;
  }
}
