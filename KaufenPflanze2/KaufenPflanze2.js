/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KaufenPflanze2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Nicht Genug Geld",
        "./KaufenPflanze2/costumes/Nicht Genug Geld.svg",
        { x: 36.578124999999915, y: 51.01561500000011 }
      ),
      new Costume("Genug Geld", "./KaufenPflanze2/costumes/Genug Geld.svg", {
        x: 36.578124999999915,
        y: 51.01561500000011
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./KaufenPflanze2/sounds/Plopp.wav"),
      new Sound("Klick", "./KaufenPflanze2/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *startAsClone() {
    this.visible = true;
    while (true) {
      if (this.compare(this.stage.vars.euro, 29.9) > 0) {
        this.costume = "Genug Geld";
        if (this.mouse.down && this.touching("mouse")) {
          this.broadcast("Pflanze 3");
          yield* this.startSound("Klick");
          this.stage.vars.euro -= 30;
          this.stage.vars.pflanzeSchuss2 = 1;
          this.visible = false;
          this.deleteThisClone();
        }
      } else {
        this.costume = "Nicht Genug Geld";
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.visible = false;
    this.createClone();
  }

  *whenIReceiveGameOver() {
    for (let i = 0; i < 10; i++) {
      this.deleteThisClone();
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
