/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MusikAnAus extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("An", "./MusikAnAus/costumes/An.svg", {
        x: 83.24647887323948,
        y: 48.64606023212593
      }),
      new Costume("Aus", "./MusikAnAus/costumes/Aus.svg", {
        x: 99.24647887323951,
        y: 51.64591335712592
      })
    ];

    this.sounds = [new Sound("Plopp", "./MusikAnAus/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }

  *whenIReceiveMen() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Steuerung") {
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.effects.brightness = 50;
          if (this.toString(this.stage.vars.musik) === "An") {
            this.stage.vars.musik = "Aus";
            this.broadcast("Musik In");
            yield* this.wait(0.2);
          } else {
            if (this.toString(this.stage.vars.musik) === "Aus") {
              this.stage.vars.musik = "An";
              this.broadcast("Musik");
              yield* this.wait(0.2);
            }
          }
          this.effects.brightness = 0;
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Knopfauswahl") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveMen2() {
    while (true) {
      if (this.toString(this.stage.vars.musik) === "An") {
        this.costume = "An";
      }
      if (this.toString(this.stage.vars.musik) === "Aus") {
        this.costume = "Aus";
      }
      yield;
    }
  }
}
