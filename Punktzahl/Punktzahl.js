/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Punktzahl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Punktzahl/costumes/Kostüm1.svg", {
        x: 82.25,
        y: 15.765625
      })
    ];

    this.sounds = [new Sound("Plopp", "./Punktzahl/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveNewScore() {
    while (true) {
      if (!(this.toString(this.stage.vars.men) === "Lade")) {
        this.visible = true;
        while (true) {
          if (this.toString(this.stage.vars.men) === "Menü") {
            this.visible = false;
            this.stage.watchers.deinePunktzahl.visible = false;
            return;
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.deinePunktzahl.visible = false;
  }

  *whenIReceiveMen() {
    this.visible = false;
    this.stage.watchers.deinePunktzahl.visible = false;
  }
}
