/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ZurCkZumMen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ZurCkZumMen/costumes/Kostüm1.svg", {
        x: 100.5,
        y: 57.68957541000819
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./ZurCkZumMen/sounds/Plopp.wav"),
      new Sound("Verlassen", "./ZurCkZumMen/sounds/Verlassen.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen2),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen3)
    ];
  }

  *whenIReceiveMen() {
    while (true) {
      if (
        this.keyPressed(this.toString(this.stage.vars.zurCkZumHauptmen)) &&
        this.toString(this.stage.vars.men) === "Im Spiel!"
      ) {
        yield* this.askAndWait(
          "Bist du dir sicher, das du diese Runde verlassen möchtest?"
        );
        if (
          this.answer === "Klar" ||
          this.answer === "Klar!" ||
          this.answer === "Klar." ||
            this.answer === "Ja" ||
              this.answer === "Yes" ||
              this.answer === "Ja!" || this.answer === "Yes!" ||
              this.answer === "Ja." || this.answer === "Yes." ||
              this.answer === "Jup" || this.answer === "Jup!" ||
              this.answer === "Jup." || this.answer === "Yea" ||
              this.answer === "Yea!" || this.answer === "Yea."
        ) {
          this.broadcast("Game Over");
          yield* this.startSound("Verlassen");
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenIReceiveMen2() {
    while (true) {
      if (
        this.toString(this.stage.vars.men) === "Steuerung" ||
        this.toString(this.stage.vars.men) === "Knopfauswahl"
      ) {
        this.stage.watchers.zurCkZumHauptmen.visible = true;
      } else {
        this.stage.watchers.zurCkZumHauptmen.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveMen3() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Steuerung") {
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.men = "Knopfauswahl";
          this.effects.brightness = 50;
          yield* this.wait(0.06);
          this.effects.brightness = 0;
          this.visible = false;
          yield* this.askAndWait(
            "Welche Taste möchtest du zum Verlassen einer Runde benutzen? "
          );
          if (!(this.toNumber(this.answer) === 0)) {
            this.stage.vars.zurCkZumHauptmen = this.answer;
          } else {
            null;
          }
          this.stage.vars.men = "Steuerung";
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
