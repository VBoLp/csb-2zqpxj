/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SpielStart extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./SpielStart/costumes/Kostüm1.svg", {
        x: 110.5,
        y: 66.6875
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./SpielStart/sounds/Plopp.wav"),
      new Sound("Klick", "./SpielStart/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel beenden!" },
        this.whenIReceiveSpielBeenden
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    this.effects.brightness = 50;
    yield* this.startSound("Klick");
    yield* this.wait(0.06);
    this.effects.brightness = 0;
    this.effects.ghost = 0;
    yield* this.wait(0.06);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.effects.ghost = 100;
    this.broadcast("Spiel Start!");
    this.visible = false;
  }

  *whenIReceiveSpielBeenden() {
    this.effects.ghost = 0;
    yield* this.wait(0.25);
    this.moveAhead();
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.moveAhead();
  }
}
