/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HighscoreKnopf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./HighscoreKnopf/costumes/Kostüm1.svg", {
        x: 60.03030303030289,
        y: 35.12505452651516
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./HighscoreKnopf/sounds/Plopp.wav"),
      new Sound("Klick", "./HighscoreKnopf/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      )
    ];
  }

  *whenIReceiveSpielStart() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Menü") {
        this.visible = true;
        if (this.mouse.down && this.touching("mouse")) {
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.brightness = 0;
          this.broadcast("Übergang");
          this.broadcast("Highscore Menü");
          yield* this.wait(0.2);
          if (this.toString(this.stage.vars.musikart) === "Normal") {
            this.broadcast("Musik In");
          }
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
