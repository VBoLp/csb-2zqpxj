/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VerbesserungPflanze2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Upgrade 1",
        "./VerbesserungPflanze2/costumes/Upgrade 1.svg",
        { x: 167.72222222222229, y: 50.32020517694181 }
      ),
      new Costume(
        "Upgrade 2",
        "./VerbesserungPflanze2/costumes/Upgrade 2.svg",
        { x: 167.72222, y: 50.32020517694181 }
      ),
      new Costume(
        "Upgrade 3",
        "./VerbesserungPflanze2/costumes/Upgrade 3.svg",
        { x: 167.72222, y: 50.32020517694181 }
      )
    ];

    this.sounds = [
      new Sound("Plopp", "./VerbesserungPflanze2/sounds/Plopp.wav"),
      new Sound("Klick", "./VerbesserungPflanze2/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 1" },
        this.whenIReceive2Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 2" },
        this.whenIReceive2Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 2" },
        this.whenIReceivePflanze2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
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

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceive2Upgrade1() {
    while (true) {
      if (this.compare(this.stage.vars.euro, 79.9) > 0) {
        this.effects.color = 30;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 80;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          this.effects.brightness = 0;
          this.costume = "Upgrade 3";
          yield* this.wait(0.1);
          this.stage.vars.wartezeitPflanze2 = 0.5;
          this.stage.vars.autoaimDauer1 = 0.65;
          this.broadcast("2 Upgrade 2");
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 0;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceive2Upgrade2() {
    while (true) {
      if (this.compare(this.stage.vars.euro, 119.9) > 0) {
        this.effects.color = 30;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 120;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          this.stage.vars.wartezeitPflanze2 = 0.3;
          this.stage.vars.autoaimDauer1 = 0.4;
          this.stage.vars.alleUpgrades++;
          this.broadcast("2 Upgrade 0");
          this.visible = false;
          /* TODO: Implement stop other scripts in sprite */ null;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceivePflanze2() {
    this.stage.vars.wartezeitPflanze2 = 1.5;
    this.visible = true;
    this.effects.brightness = 0;
    this.effects.ghost = 0;
    this.costume = "Upgrade 1";
    while (true) {
      if (this.compare(this.stage.vars.euro, 39.9) > 0) {
        this.effects.color = 30;
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.euro -= 40;
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 100;
          yield* this.wait(0.1);
          this.effects.brightness = 0;
          this.stage.vars.wartezeitPflanze2 = 1;
          this.stage.vars.autoaimDauer1 = 0.8;
          this.broadcast("2 Upgrade 1");
          this.costume = "Upgrade 2";
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 0;
          return;
        }
      } else {
        this.effects.color = 0;
      }
      yield;
    }
  }

  *whenIReceiveMen() {
    this.visible = false;
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
