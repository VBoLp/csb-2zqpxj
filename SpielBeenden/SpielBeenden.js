/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SpielBeenden extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./SpielBeenden/costumes/Kostüm1.svg", {
        x: 17.225000000000108,
        y: -20.598567280216116
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./SpielBeenden/sounds/Plopp.wav"),
      new Sound("Klick", "./SpielBeenden/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beenden Ja" },
        this.whenIReceiveBeendenJa
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beenden Nein" },
        this.whenIReceiveBeendenNein
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Notruf" },
        this.whenIReceiveNotruf
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Beenden Ja" },
        this.whenIReceiveBeendenJa2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Nice 69" },
        this.whenIReceiveNice69
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Streber!" },
        this.whenIReceiveStreber
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
          this.stage.vars.men = "Beenden?";
          yield* this.wait(0.06);
          this.effects.brightness = 0;
          this.broadcast("Spiel Beenden?");
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

  *whenIReceiveBeendenJa() {
    while (!(this.toString(this.stage.vars.ausschalten) === "Bereit")) {
      yield* this.sayAndWait("Beende Spiel", 0.2);
      yield* this.sayAndWait("Beende Spiel.", 0.2);
      yield* this.sayAndWait("Beende Spiel..", 0.2);
      yield* this.sayAndWait("Beende Spiel...", 0.2);
      yield;
    }
    yield* this.wait(0.1);
    this.stage.vars.ausschalten = "Nicht Bereit";
    this.broadcast("Spiel beenden!");
  }

  *whenIReceiveBeendenNein() {
    yield* this.sayAndWait("Alles Klar", 0.7);
    this.stage.vars.men = "Menü";
  }

  *whenIReceiveNotruf() {
    yield* this.sayAndWait("Ich kann dir leider nicht helfen.", 2);
    this.stage.vars.men = "Menü";
  }

  *whenIReceiveBeendenJa2() {
    this.stage.vars.alleUpgrades = 0;
    yield* this.wait(0.2);
    this.stage.vars.euro = 0;
    yield* this.wait(0.2);
    this.stage.vars.heliOnscreen = 0;
    yield* this.wait(0.2);
    this.stage.vars.men = "Menü";
    yield* this.wait(0.2);
    this.stage.vars.ausschalten = "Bereit";
  }

  *whenIReceiveNice69() {
    yield* this.sayAndWait("😎😎😎", 1);
    this.stage.vars.men = "Menü";
  }

  *whenIReceiveStreber() {
    yield* this.sayAndWait("🤓🤓🤓", 1);
    this.stage.vars.men = "Menü";
  }
}
