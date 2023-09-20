/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CreditKnopf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./CreditKnopf/costumes/Kostüm1.svg", {
        x: 17.224999999999994,
        y: -21.142515000000003
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./CreditKnopf/sounds/Plopp.wav"),
      new Sound("Klick", "./CreditKnopf/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveMen() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Menü") {
        this.visible = true;
        if (this.mouse.down && this.touching("mouse")) {
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.broadcast("Übergang");
          this.effects.brightness = 0;
          yield* this.wait(0.24);
          this.broadcast("Musik In");
          this.broadcast("Credits");
          this.stage.vars.men = "Credits";
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Beenden?") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }
}
